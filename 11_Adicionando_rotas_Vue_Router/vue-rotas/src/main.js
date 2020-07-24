import Vue from 'vue'
import BootStrap from 'bootstrap-vue/dist/bootstrap-vue.esm'
import App from './App.vue'
import router from "./router"

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootStrap)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
