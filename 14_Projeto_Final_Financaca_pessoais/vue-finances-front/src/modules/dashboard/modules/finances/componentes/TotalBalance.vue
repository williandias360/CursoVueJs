<template>
  <v-card :color="color">
    <v-card-title primary-title>
      <div class="text-center ma-auto">
        <p class="subheading">Saldo atual:</p>
        <h1 class="display-2">{{totalInCurrency}}</h1>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
import formatCurrencyMixin from '@/mixins/format-currency.js'
import RecordService from './../services/records-services'

export default {
  name: 'TotalBalance',
  data: () => ({
    total: 0
  }),
  mixins: [
    formatCurrencyMixin
  ],
  computed: {
    color () {
      return this.total < 0 ? 'error' : 'primary'
    },
    totalInCurrency () {
      return this.formatCurrency(this.total)
    }
  },
  async created () {
    this.total = await RecordService.totalBalance()
  }
}
</script>
