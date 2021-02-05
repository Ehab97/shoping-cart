import Vue from 'vue'
import VueRouter from 'vue-router'
import SignUp from '../components/regestrion/SignUp'
import Home from '../views/Home.vue'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'signup',
    component: SignUp,
    
  },
  {
    path: '/home',
    name: 'Home',
    component:()=>import('../views/Home.vue'),
    // meta:{requiresAuth: true}
  },
  {
    path: '/edit-reciep/:id',
    name: 'edit-reciep',
    component: () => import('../components/cart/EditReciep'),
    meta:{requiresAuth: true}
  },
  {
    path: '/add-receip',
    name: 'add',
    component: () => import('../components/cart/AddReciep'),
    meta:{requiresAuth: true}
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../components/cart/ShopingList'),
    meta:{requiresAuth: true}
  },
  { path: '/:catchAll(.*)',
    name:'NotFound',
    component: () => import('../views/404.vue'),
    meta:{requiresAuth: true} 
   }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

router.beforeEach((to,from,next)=>{
  if(to.matched.some(record=>record.meta.requiresAuth)){ //to.meta.requiresAuth
    //need to login
    if(!store.state.auth){
      next({name: 'signup'})
    }else{
      next();
    }
  }else{
    next();
  }
})
export default router
