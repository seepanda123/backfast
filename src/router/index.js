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
      path: "/index",
      name: "index",
      component: () => import("../views/Index"),
      children: [
        {
          path: "/home",
          name: "home",
          component: () => import("../views/Home")
        },
        {
          path: "/more",
          name: "more",
          component: () => import("../views/More")
        },
        {
          path: "/shopbasket",
          name: "shopbasket",
          component: () => import("../views/ShopBasket"),
        },
        {
          path: "/menutypetbl",
          name: "menutypetbl",
          component: () => import("../views/MenuTypeTbl")
        }
      ]
    }
  ]
});
