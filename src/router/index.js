import Vue from "vue";
import Router from "vue-router";

//解决router-link点击相同路由报错
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/index"
    },
    {
      path: "/all",
      name: "all",
      component: () => import("../views/All"),
      children: [
        {
          path: "/index",
          name: "index",
          component: () => import("../views/Index"),
        }, {
          path: "/home",
          name: "home",
          component: () => import("../views/Home")
        }, {
          path: "/more",
          name: "more",
          component: () => import("../views/More")
        }, {
          path: "/shopbasket",
          name: "shopbasket",
          component: () => import("../views/ShopBasket")
        }, {
          path: "/menutypetbl",
          name: "menutypetbl",
          component: () => import("../views/MenuTypeTbl")
        },
      ]
    }, 
    {
      path: "/kitchenstory",
      name: "kitchenstory",
      component: () => import("../views/KitchenStory.vue")
    },
    {
      path: "/collecting",
      name: "collecting",
      component: () => import("../views/Collecting.vue")
    },
    {
      path: "/readhistory",
      name: "readhistory",
      component: () => import("../views/ReadHistory.vue")
    },
    {
      path: "/Register",
      name: "Register",
      component: () => import("../views/Register")
    },
    {
      path: "/Login",
      name: "Login",
      component: () => import("../views/Login")
    },
    {
      path: "/Details",
      name: "Details",
      component: () => import("../views/Details")
    },
    {
      path: "/MaterialList",
      name: "MaterialList",
      component: () => import("../views/MaterialList")
    },
    {
      path: "/CookStep",
      name: "CookStep",
      component: () => import("../views/CookStep")
    },
    {
      path:"/menudetails",
      name:"menudetails",
      component:()=>import("../views/MenuDetails")
    },
    {
      path: '/Fresh',
      name: 'Fresh',
      component: () => import('../views/Fresh')
    },

  ]
})
