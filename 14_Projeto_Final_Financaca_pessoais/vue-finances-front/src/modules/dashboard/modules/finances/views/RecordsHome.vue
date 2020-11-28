<template>
  <RecordList />
</template>

<script>
import RecordList from './../components/RecordsList'
import { mapActions } from 'vuex'
export default {
  name: 'RecordsHome',
  components: {
    RecordList
  },
  created () {
    this.setTitle({ title: 'Lançamentos' })
  },
  methods: {
    ...mapActions(['setTitle'])
  }
}
</script>
