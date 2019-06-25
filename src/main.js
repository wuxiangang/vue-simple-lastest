import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { http, fetch } from '@/assets/js/fetch'
// import ElementUI from 'element-ui'
// import { Dialog, Message } from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

Vue.prototype.$http = http
Vue.prototype.$fetch = fetch
// Vue.use(Dialog)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
