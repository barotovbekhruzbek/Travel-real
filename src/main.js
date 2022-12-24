import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Paginate from 'vuejs-paginate'











Vue.config.productionTip = false

new Vue({
  router,
  store,
  Paginate,
  render: h => h(App)
}).$mount('#app')
