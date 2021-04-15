import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import http from './plugins/http.js'

// Vue.use(http)

// scss
import './assets/scss/styles.scss';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
