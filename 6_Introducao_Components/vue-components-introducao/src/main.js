import Vue from 'vue'
import App from './App.vue'
import AppContador from './AppContador.vue'


Vue.component('app-contador', AppContador)

new Vue({
  el: '#app',
  render: h => h(App)
})

