import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './components/_globals'
import './imports'
import './breakingpoints'
/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
