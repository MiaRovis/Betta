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
    path: '/RasboraOffer',
    name: 'RasboraOffer',
    component: () => import(/* webpackChunkName: "ShampooOffer" */ '../views/RasboraOffer.vue')
  },
  {
    path: '/TetraOffer',
    name: 'TetraOffer',
    component: () => import(/* webpackChunkName: "ShampooOffer" */ '../views/TetraOffer.vue')
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
  {
    path: '/Blog',
    name: 'Blog',
    component: () => import(/* webpackChunkName: "MyFavorites" */ '../views/Blog.vue')
  },
  {
    path: '/opiscomb',
    name: 'opiscomb',
    component: () => import(/* webpackChunkName: "MyFavorites" */ '../views/opisiBetta/opiscomb.vue')
  },
  {
    path: '/opisveil',
    name: 'opisveil',
    component: () => import(/* webpackChunkName: "MyFavorites" */ '../views/opisiBetta/opisveil.vue')
  },
  {
    path: '/opissdelta',
    name: 'opissdelta',
    component: () => import(/* webpackChunkName: "MyFavorites" */ '../views/opisiBetta/opissdelta.vue')
  },
  {
    path: '/opisdouble',
    name: 'opisdouble',
    component: () => import(/* webpackChunkName: "MyFavorites" */ '../views/opisiBetta/opisdouble.vue')
  },
  {
    path: '/opisplakat',
    name: 'opisplakat',
    component: () => import(/* webpackChunkName: "MyFavorites" */ '../views/opisiBetta/opisplakat.vue')
  },{
    path: '/opiscrown',
    name: 'opiscrown',
    component: () => import(/* webpackChunkName: "MyFavorites" */ '../views/opisiBetta/opiscrown.vue')
  },
  {
    path: '/opishalf',
    name: 'opishalf',
    component: () => import(/* webpackChunkName: "MyFavorites" */ '../views/opisiBetta/opishalf.vue')
  },
  {
    path: '/opisfan',
    name: 'opisfan',
    component: () => import(/* webpackChunkName: "MyFavorites" */ '../views/opisiBetta/opisfan.vue')
  },

  {
    path: '/opisfeather',
    name: 'opisfeather',
    component: () => import(/* webpackChunkName: "MyFavorites" */ '../views/opisiBetta/opisfeather.vue')
  },
  {
    path: '/opisblack',
    name: 'opisblack',
    component: () => import(/* webpackChunkName: "MyFavorites" */ '../views/opisiTetra/opisblack.vue')
  },
  {
    path: '/opisblood',
    name: 'opisblood',
    component: () => import(/* webpackChunkName: "MyFavorites" */ '../views/opisiTetra/opisblood.vue')
  },
  {
    path: '/opiscar',
    name: 'opiscar',
    component: () => import(/* webpackChunkName: "MyFavorites" */ '../views/opisiTetra/opiscar.vue')
  },
  {
    path: '/opiscongo',
    name: 'opiscongo',
    component: () => import(/* webpackChunkName: "MyFavorites" */ '../views/opisiTetra/opiscongo.vue')
  },
  {
    path: '/opisdiamond',
    name: 'opisdiamond',
    component: () => import(/* webpackChunkName: "MyFavorites" */ '../views/opisiTetra/opisdiamond.vue')
  },
  {
    path: '/opisember',
    name: 'opisember',
    component: () => import(/* webpackChunkName: "MyFavorites" */ '../views/opisiTetra/opisember.vue')
  },
  {
    path: '/opisneon',
    name: 'opisneon',
    component: () => import(/* webpackChunkName: "MyFavorites" */ '../views/opisiTetra/opisneon.vue')
  },
  {
    path: '/opisrummy',
    name: 'opisrummy',
    component: () => import(/* webpackChunkName: "MyFavorites" */ '../views/opisiTetra/opisrummy.vue')
  },
  {
    path: '/opisserpae',
    name: 'opisserpae',
    component: () => import(/* webpackChunkName: "MyFavorites" */ '../views/opisiTetra/opisserpae.vue')
  },
  {
    path: '/opisaxel',
    name: 'opisaxel',
    component: () => import(/* webpackChunkName: "MyFavorites" */ '../views/opisiRasbora/opisaxel.vue')
  },
  {
    path: '/opisberry',
    name: 'opisberry',
    component: () => import(/* webpackChunkName: "MyFavorites" */ '../views/opisiRasbora/opisberry.vue')
  },
  {
    path: '/opisgal',
    name: 'opisgal',
    component: () => import(/* webpackChunkName: "MyFavorites" */ '../views/opisiRasbora/opisgal.vue')
  },
  {
    path: '/opishar',
    name: 'opishar',
    component: () => import(/* webpackChunkName: "MyFavorites" */ '../views/opisiRasbora/opishar.vue')
  },
  {
    path: '/opiskubo',
    name: 'opiskubo',
    component: () => import(/* webpackChunkName: "MyFavorites" */ '../views/opisiRasbora/opiskubo.vue')
  },
  {
    path: '/opisline',
    name: 'opisline',
    component: () => import(/* webpackChunkName: "MyFavorites" */ '../views/opisiRasbora/opisline.vue')
  },
  {
    path: '/opispor',
    name: 'opispor',
    component: () => import(/* webpackChunkName: "MyFavorites" */ '../views/opisiRasbora/opispor.vue')
  },
  {
    path: '/opissci',
    name: 'opissci',
    component: () => import(/* webpackChunkName: "MyFavorites" */ '../views/opisiRasbora/opissci.vue')
  },
  {
    path: '/opisside',
    name: 'opisside',
    component: () => import(/* webpackChunkName: "MyFavorites" */ '../views/opisiRasbora/opisside.vue')
  },
  
  
  
  
  
  
  
  
  
  

  





  
  
  

  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
