import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
import Vuelidate from './plugins/vuelidate'
import router from './router'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  Vuelidate,
  router,
  render: h => h(App)
}).$mount('#app')
