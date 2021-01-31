import Vue from 'vue'
import VueRouter from 'vue-router'
import SignUp from '../components/regestrion/SignUp'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/home',
    name: 'Home',
    component:Home
  },
  {
    path: '/edit-reciep/:id',
    name: 'edit-reciep',
    component: () => import('../components/cart/EditReciep')
  },
  {
    path: '/add-receip',
    name: 'add',
    component: () => import('../components/cart/AddReciep')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../components/cart/ShopingList')
  },
  { path: '/:catchAll(.*)',
    name:'NotFound',
    component: () => import('../views/404.vue') 
   }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
