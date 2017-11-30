// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import TransitionManager from '@/components/TransitionManager'

Vue.config.productionTip = false
Vue.component('transition-manager',TransitionManager)
Vue.prototype.$eventHub = new Vue();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }

})