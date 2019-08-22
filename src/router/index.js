import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Register',
      name: 'Register',
      component: ()=>import('../views/Register')
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import('../views/Login')
    },
    {
      path: '/Details',
      name: 'Details',
      component: () => import('../views/Details')
    },
    {
      path: '/MaterialList',
      name: 'MaterialList',
      component: () => import('../views/MaterialList')
    },
    {
      path: '/CookStep',
      name: 'CookStep',
      component: () => import('../views/CookStep')
    }
  ]
})
