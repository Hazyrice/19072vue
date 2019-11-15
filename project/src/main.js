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
import PM from './util/PublicMethod.js'
import MySwiper from './util/mySwiper.js'



Vue.component('my-navigator', navigator)
Vue.component('my-bottom', bottom)
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.PublicMethod = PM;
Vue.use(infiniteScroll)
axios.defaults.baseURL = 'http://localhost:9191';
axios.defaults.withCredentials = true;
Vue.prototype.axios = axios
Vue.prototype.MySwiper = MySwiper;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
