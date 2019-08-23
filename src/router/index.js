import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
   { path:'/index',
    name:'index',
    component:()=>import('../views/index')
  },
  { path:'/Fresh',
    name:'Fresh',
    component:()=>import('../views/Fresh')
  },
  ]
})
