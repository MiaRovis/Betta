import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  
  {
    path: '/AboutUs',
    name: 'AboutUs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutUs.vue')
  },
  {
    path: '/ShampooOffer',
    name: 'ShampooOffer',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ShampooOffer.vue')
  },
  {
    path: '/CreateYourOwn',
    name: 'CreateYourOwn',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CreateYourOwn.vue')
  },
  {
    path: '/MyOrder',
    name: 'MyOrder',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MyOrder.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
