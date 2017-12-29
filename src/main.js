// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import BootstrapVue from 'bootstrap-vue'

import Vector from './components/Vector'
Vue.component('vector', Vector)

Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// D3
var VueD3 = require('vue-d3')
Vue.use(VueD3)

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },

  created: function () {
    // Establish Ethereum connection on create
    // console.log(ContentStore);
    // ContentStore.establishWeb3()
  }
})
