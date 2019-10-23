import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomePage.vue'
import Person from '../views/personalPage.vue'

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
