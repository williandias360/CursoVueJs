function user(parent, args, context, info) {
  return context.db.query.user({ where: { id: args.id } }, info);
}

function users(parent, args, context, info) {
  return context.db.query.users();
}

module.exports = {
  user,
  users,
};
