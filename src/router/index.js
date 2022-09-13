import Vue from 'vue'
import { VueElement } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  
  {
    path: "/",
    name: "home",
    component: () => import("../views/AboutUs.vue"),
  },
  {
    path: '/AboutUs',
    name: 'AboutUs',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutUs.vue')
  },
  {
    path: '/ShampooOffer',
    name: 'ShampooOffer',
    component: () => import(/* webpackChunkName: "about" */ '../views/ShampooOffer.vue')
  },
  {
    path: '/CreateYourOwn',
    name: 'CreateYourOwn',
    component: () => import(/* webpackChunkName: "about" */ '../views/CreateYourOwn.vue')
  },
  {
    path: '/MyOrder',
    name: 'MyOrder',
    component: () => import(/* webpackChunkName: "about" */ '../views/MyOrder.vue')
  },
  {
    path: '/Order',
    name: 'Order',
    component: () => import(/* webpackChunkName: "about" */ '../views/Order.vue')
  },
  {
    path: '/Custom',
    name: 'Custom',
    component: () => import(/* webpackChunkName: "about" */ '../views/Custom.vue')
  },
  {
    path: '/CustomOrder',
    name: 'CustomOrder',
    component: () => import(/* webpackChunkName: "about" */ '../views/CustomOrder.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
