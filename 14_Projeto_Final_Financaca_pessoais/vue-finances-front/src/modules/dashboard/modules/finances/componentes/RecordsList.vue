<template>
  <div>

    <TotalBalance class="mb-2" />
    <ToolbarByMonth
      class="mb-2"
      format="MM-YYYY"
      @month="changeMonth"
      :color="toolbarColor"
      :month="$route.query.month"
    />
    <v-card>

      <v-card-text
        class="text-center"
        v-if="mappedRecordsLength === 0"
      >
        <v-icon
          size="100"
          color="gray"
        >assignment</v-icon>
        <p class="font-weigth-light subheading grey--text">
          Nenhum lançamento no período
        </p>
      </v-card-text>
      <v-list
        two-line
        subheader
        v-else
      >
        <template v-for="(records, date, index) in mappedRecords">
          <v-subheader :key="date">{{ date }}</v-subheader>
          <RecordListItem
            v-for="record in records"
            :key="record.id"
            :record="record"
          />
          <v-divider
            v-if="showDivider(index, mappedRecords)"
            :key="`${date}-${index}`"
          ></v-divider>
        </template>
      </v-list>

      <v-footer class="pa-2">
        <v-flex text-right>
          <h3 class="font-weight-light">
            <span>Saldo do mês:</span>
            <strong
              class="ml-5"
              :class="amountColor(totalAmount)"
            >{{ formatCurrency(totalAmount) }}</strong>
          </h3>
        </v-flex>
      </v-footer>
    </v-card>
  </div>
</template>

<script>
import moment from 'moment'
import { groupBy } from '@/utils'
import RecordListItem from './RecordsListItem'
import ToolbarByMonth from './ToolbarByMonth'
import amoutColorMixin from './../mixins/amount-color'
import RecordsServices from './../services/records-services'
import formatCurrencyMixin from '@/mixins/format-currency'
import TotalBalance from './TotalBalance'

export default {
  name: 'RecordList',
  components: {
    RecordListItem,
    ToolbarByMonth,
    TotalBalance
  },
  mixins: [
    amoutColorMixin,
    formatCurrencyMixin
  ],
  data: () => ({
    records: []
  }),
  computed: {
    mappedRecords () {
      return groupBy(this.records, 'date', (record, dateKey) => {
        return moment(record[dateKey]).format('DD/MM/YYYY')
      })
    },
    totalAmount () {
      return this.records.reduce((sum, record) => sum + record.amount, 0)
    },
    mappedRecordsLength () {
      return Object.keys(this.mappedRecords).length
    },
    toolbarColor () {
      return this.totalAmount < 0 ? 'error' : 'primary'
    }
  },
  methods: {
    showDivider (index, object) {
      return index < Object.keys(object).length - 1
    },
    changeMonth (month) {
      this.$router.push({
        path: this.$route.path,
        query: { month }
      })
        .catch(() => { })
        .finally(this.setRecords(month))
    },
    async setRecords (month) {
      this.records = await RecordsServices.records({ month })
    }
  }
}
</script>
