import Vue from 'vue'


/*Vue.component('wdb-component', {
  data: function () {
    return {
      titulo: 'Curso de VuJs',
      contador: 0
    }
  },
  methods: {
    incrementar: function () {
      this.contador++
    }
  },
  template: `
    <div>
      <h1>{{ titulo }}</h1>
      <button @click="incrementar">Clicado {{contador}}</button>
    </div>
      
    `
})*/

const wdbComponent = {
  data: function () {
    return {
      titulo: 'Curso de VuJs',
      contador: 0
    }
  },
  methods: {
    incrementar: function () {
      this.contador++
    }
  },
  template: `
    <div>
      <h1>{{ titulo }}</h1>
      <button @click="incrementar">Clicado {{contador}}</button>
    </div>
      
    `
}

new Vue({
  el: '#app1',
  components: {
    'wdb-component': wdbComponent
  }
})

new Vue({
  el: '#app2',
  components: {
    'wdb-component': wdbComponent
  }
})
