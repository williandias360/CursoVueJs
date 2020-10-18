const moment = require("moment");
const { getUserId } = require("./../utils");

function accounts(parent, args, context, info) {
  const userId = getUserId(context);
  return context.db.query.accounts(
    {
      where: {
        OR: [
          {
            user: {
              id: userId,
            },
          },
          {
            user: null,
          },
        ],
      },
      orderBy: "description_ASC",
    },
    info
  );
}

function categories(_, { operation }, context, info) {
  const userId = getUserId(context);

  let AND = [
    {
      OR: [
        {
          user: {
            id: userId,
          },
        },
        {
          user: null,
        },
      ],
    },
  ];

  AND = !operation ? AND : [...AND, { operation }];

  return context.db.query.categories(
    {
      where: { AND },
      orderBy: "description_ASC",
    },
    info
  );
}

function records(
  _,
  { month, type, accountsIds, categoriesIds },
  context,
  info
) {
  const userId = getUserId(context);

  let AND = [{ user: { id: userId } }];
  AND = !type ? AND : [...AND, { type }];

  AND =
    !accountsIds || accountsIds.length === 0
      ? AND
      : [
          ...AND,
          {
            OR: accountsIds.map((id) => ({ account: { id } })),
          },
        ];
  AND =
    !categoriesIds || categoriesIds.length === 0
      ? AND
      : [
          ...AND,
          {
            OR: categoriesIds.map((id) => ({ category: { id } })),
          },
        ];

  if (month) {
    const date = moment(month, "MM-YYYY");
    const startDate = date.startOf("month").toISOString();
    const endDate = date.endOf("month").toISOString();

    AND = [...AND, { date_gte: startDate }, { date_lte: endDate }];

    console.log("Base Date", date.toISOString());
    console.log("Star Date", startDate);
    console.log("End Date", endDate);
  }

  return context.db.query.records(
    {
      where: {
        AND,
      },
      orderBy: "date_ASC",
    },
    info
  );
}

function user(parent, args, context, info) {
  const userId = getUserId(context);
  return context.db.query.user({ where: { id: userId } }, info);
}

function users(parent, args, context, info) {
  return context.db.query.users();
}

function totalBalance(parent,{date}, context, info){
  const userId = getUserId(context);
  const dateISO = moment(date, 'YYYY-MM-DD').endOf("day").toISOString();
  const pgSchema = `${process.env.PRISMA_SERVICE}$${process.env.PRISMA_STAGE}`;

  const mutation = `
    mutation TotalBalance($database:PrismaDatabase, $query:String!){
      executeRaw(database: $database, query:$query)
    }
  `;

  const variables = {
    database:"default",
    query:`
    select SUM(amount) as totalBalance 
      from "${pgSchema}"."Record"
      
      inner join "${pgSchema}"."_RecordToUser" 
      On "${pgSchema}"."_RecordToUser"."A" = "${pgSchema}"."Record"."id"
    
      WHERE "${pgSchema}"."_RecordToUser"."B" = '${userId}'
    
    AND "${pgSchema}"."Record"."date" <= '${dateISO}'
    `
  };

  console.log("pgSchema", pgSchema);
  console.log("query:", variables.query);

  return context.prisma.$graphql(mutation, variables)
  .then(response => {
    console.log("Response:", response);
    const totalBalance = response.executeRaw[0].totalBalance;
    return totalBalance ? totalBalance : 0;
  });
}

module.exports = {
  accounts,
  categories,
  records,
  totalBalance,
  user,
  users,
};
