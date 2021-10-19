import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Changelog from "@/views/Changelog";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/changelog',
    name: 'changelog',
    component: Changelog
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
