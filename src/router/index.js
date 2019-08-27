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
  { path:'/WeekHot',
    name:'WeekHot',
    component:()=>import('../views/WeekHot')
  },
  { path:'/Search',
    name:'Search',
    component:()=>import('../views/Search')
  },
  { path:'/SearchList',
    name:'SearchList',
    component:()=>import('../views/SearchList')
  },
  { path:'/ClassList',
    name:'ClassList',
    component:()=>import('../views/ClassList')
  },
  { path:'/Gmyj',
    name:'Gmyj',
    component:()=>import('../views/Gmyj')
  }
  ]
})
