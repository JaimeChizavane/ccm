import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './trans'

Vue.config.productionTip = false

Vue.prototype.$eventHub = new Vue()

window.vm = new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
