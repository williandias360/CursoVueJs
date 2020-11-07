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

export {
  errorHandler,
  formatError
}
