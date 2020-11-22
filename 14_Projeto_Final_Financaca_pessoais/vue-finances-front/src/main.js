import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
import Vuelidate from './plugins/vuelidate'
import '@/plugins/moment'
import router from './router'
import { errorHandler } from './../src/utils'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false
Vue.config.errorHandle = errorHandler

new Vue({
  store,
  vuetify,
  Vuelidate,
  router,
  render: h => h(App)
}).$mount('#app')
