import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/AboutUs.vue';
import { VueElement } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store';


const routes = [
  
  {
    path: "/",
    name: "home",
    component: () => import("../views/AboutUs.vue"),
       
    
  },
  {
    path: '/AboutUs',
    name: 'AboutUs',
    component: () => import(/* webpackChunkName: "AboutUs" */ '../views/AboutUs.vue')
  },
  {
    path: '/ShampooOffer',
    name: 'ShampooOffer',
    component: () => import(/* webpackChunkName: "ShampooOffer" */ '../views/ShampooOffer.vue')
  },
  {
    path: '/CreateYourOwn',
    name: 'CreateYourOwn',
    component: () => import(/* webpackChunkName: "CreateYourOwn" */ '../views/CreateYourOwn.vue')
  },
  {
    path: '/MyOrder',
    name: 'MyOrder',
    component: () => import(/* webpackChunkName: "MyOrder" */ '../views/MyOrder.vue')
  },
  {
    path: '/Order',
    name: 'Order',
    component: () => import(/* webpackChunkName: "Order" */ '../views/Order.vue')
  },
  {
    path: '/Custom',
    name: 'Custom',
    component: () => import(/* webpackChunkName: "Custom" */ '../views/Custom.vue')
  },
  {
    path: '/CustomOrder',
    name: 'CustomOrder',
    component: () => import(/* webpackChunkName: "CustomOrder" */ '../views/CustomOrder.vue')
  },  
  {
    path: '/signup',
    name: 'signup',
    component: () => import(/* webpackChunkName: "signup" */ '../views/signup.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login.vue')
  },
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
