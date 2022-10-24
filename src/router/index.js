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
    path: '/BettaOffer',
    name: 'BettaOffer',
    component: () => import(/* webpackChunkName: "ShampooOffer" */ '../views/BettaOffer.vue')
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
  {
    path: '/MyFavorites',
    name: 'MyFavorites',
    component: () => import(/* webpackChunkName: "MyFavorites" */ '../views/MyFavorites.vue')
  },
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
