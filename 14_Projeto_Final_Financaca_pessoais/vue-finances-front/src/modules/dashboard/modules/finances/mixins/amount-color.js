export default {
  methods: {
    amountColor (amount) {
      return amount > 0
        ? 'primary--text text--lighten-1'
        : 'error--text text--lighten-1'
    }
  }
}
