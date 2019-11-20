import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomePage.vue'
import Person from '../views/personalPage.vue'
import RegLog from '../views/LogReg.vue'
import Register from '../views/register.vue'
import Find from '../views/find.vue'
import BuyCar from '../views/buycar.vue'
import GoodsDetail from '../views/goodsDetail.vue'
import Shop from '../views/shop.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/person',
    name: 'person',
	component:Person
  },
  {
    path: '/LogReg/register',
    name: 'register',
  	component:Register
  },
  {
    path: '/logReg',
    name: 'logReg',
  	component:RegLog
  },
  {
    path: '/find',
    name: 'find',
  	component:Find
  },
  {
    path: '/scart',
    name: 'scart',
  	component:BuyCar
  },
  {
    path: '/goodsDetail',
    name: 'goodsDetail',
  	component:GoodsDetail
  },
  {
    path: '/shop',
    name: 'shop',
  	component:Shop
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
