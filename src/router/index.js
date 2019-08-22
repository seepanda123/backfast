import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/more',
      name:'more',
      component:()=>import("../views/More.vue")

    },
    {
      path:'/kitchenstory',
      name:'kitchenstory',
      component:()=>import("../views/KitchenStory.vue")
    },
    {
      path:'/collecting',
      name:'collecting',
      component:()=>import("../views/Collecting.vue")
    },
    {
      path:'/readhistory',
      name:'readhistory',
      component:()=>import("../views/ReadHistory.vue")
    },
    {path: '/Register',
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
