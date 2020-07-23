import Vue from 'vue'
import BootStrap from 'bootstrap-vue/dist/bootstrap-vue.esm'
import VueRouter from 'vue-router'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootStrap)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: []
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
