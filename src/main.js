// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'lib-flexible/flexible'



import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
<<<<<<< HEAD
import { Tabbar, TabbarItem } from 'vant';
import { Lazyload } from 'vant';
=======
>>>>>>> 7af8c4063ea1e55c4dcb11c6554e3591029e00a1
import { Image } from 'vant';
import { Icon } from 'vant';
import { Row, Col } from 'vant';
import { NavBar } from 'vant';
import { Toast } from 'vant';
<<<<<<< HEAD
// options 为可选参数，无则不传

Vue.use(Lazyload);
Vue.use(Vant);
=======
import { Tabbar, TabbarItem } from 'vant';
import { Lazyload } from 'vant';

// options 为可选参数，无则不传
Vue.use(Lazyload);
>>>>>>> 7af8c4063ea1e55c4dcb11c6554e3591029e00a1
Vue.use(Tabbar).use(TabbarItem);
Vue.use(Toast);
Vue.use(NavBar);
Vue.use(Row).use(Col);
Vue.use(Icon);
Vue.use(Image);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
