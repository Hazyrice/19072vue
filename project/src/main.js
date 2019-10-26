import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import infiniteScroll from 'vue-infinite-scroll'
import navigator from "./components/navigator.vue"
import bottom from "./components/bottom.vue"


Vue.component('my-navigator',navigator)
Vue.component('my-bottom',bottom)
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.axios = axios
Vue.use(infiniteScroll)
axios.defaults.baseURL = 'http://localhost:9191';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
