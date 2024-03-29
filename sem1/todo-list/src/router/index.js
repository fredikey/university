import Vue from 'vue'
import VueRouter from 'vue-router'
import { Home, Important, Statistics, Tasks } from '../views'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
	// {
	// 	path: '/',
	// 	name: 'auth',
	// 	component: Auth
	// },
  {
    path: '/important',
    name: 'important',
    component: Important
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: Tasks
  },
  {
    path: '/statistics',
    name: 'statistics',
    component: Statistics
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
