import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ProductList from '@/components/ProductList'
import Product from '@/components/Product'
import About from '@/components/About'
import Test from '@/components/Temptest'

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
      name: 'Home',
      component: Home
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
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ],
  mode: 'history'
})

router.afterEach((to, from) => {
  document.getElementById('app').scrollIntoView()
})

export default router
