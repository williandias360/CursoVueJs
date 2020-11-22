
const errorHandler = (err, vm, info) => {
  console.log('Vue [error hadle]', err, info)
  const jwtErros = ['jwt malformed', 'jwt expired', 'jwt not active']

  if (jwtErros.some(jwtError => err.message.inclues(jwtError))) {
    vm.$router.push({
      path: '/login',
      query: {
        redirect: vm.$route.path
      }
    })
  }
}

const formatError = (message) => {
  const messageSplit = message.split(':')
  return messageSplit[messageSplit.length - 1].trim()
}

const groupBy = (array, key, makeCurrentKey) => {
  return array.reduce((accumulated, item) => {
    const currentKey = makeCurrentKey(item, key)
    return {
      ...accumulated,
      [currentKey]: [
        ...(accumulated[currentKey] || []),
        item
      ]
    }
  }, {})
}

const currencyFormatter = ({ locale, currency } = { locale: 'pt-BR', currency: 'BRL' }) => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency
  })
}

export {
  currencyFormatter,
  groupBy,
  errorHandler,
  formatError
}
