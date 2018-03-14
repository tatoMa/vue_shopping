import Vue from 'vue'
import Router from 'vue-router'

import AuthGuard from './auth-guard'
import Home from '@/components/Home'
import ProductList from '@/components/ProductList'
import Product from '@/components/Product'
import About from '@/components/About'
// import Test from '@/components/Temptest'
import ShoppingCart from '@/components/ShoppingCart'

import Profile from '@/components/User/Profile'
import Signup from '@/components/User/Signup'
import Signin from '@/components/User/Signin'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/products',
      name: 'ProductList',
      component: ProductList
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/products/:id',
      name: 'Product',
      component: Product
    },
    // {
    //   path: '/',
    //   name: 'Test',
    //   component: Test
    // },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      beforeEnter: AuthGuard
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/cart',
      name: 'ShoppingCart',
      component: ShoppingCart
    }
  ]
  // mode: 'history'
})

router.afterEach((to, from) => {
  document.getElementById('app').scrollIntoView()
})

export default router
