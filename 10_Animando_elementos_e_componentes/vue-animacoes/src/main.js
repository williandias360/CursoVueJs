import BootStrap from 'bootstrap-vue/dist/bootstrap-vue.esm'
import AnimateCss from 'animate.css'
import Vue from 'vue'
import App from './App4.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootStrap)
Vue.use(AnimateCss)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
