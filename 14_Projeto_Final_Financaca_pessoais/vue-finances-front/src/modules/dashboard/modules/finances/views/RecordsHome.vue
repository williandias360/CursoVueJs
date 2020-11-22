<template>
  <RecordList />
</template>

<script>
import RecordList from './../componentes/RecordsList'
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
