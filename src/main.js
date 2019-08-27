// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "lib-flexible/flexible";

import Vue from "vue";
import App from "./App";
import router from "./router";
import Vant from "vant";
import "vant/lib/index.css";
import { Image } from "vant";
import { Icon } from "vant";
import { Row, Col } from "vant";
import { NavBar } from "vant";
import { Toast } from "vant";
import { Tabbar, TabbarItem } from "vant";
import { Lazyload } from "vant";
import { PullRefresh } from "vant";
import { Search } from 'vant';
import { Card } from 'vant';

// options 为可选参数，无则不传

Vue.use(Card);
Vue.use(Search);
Vue.use(Lazyload);
Vue.use(Vant);
Vue.use(Tabbar).use(TabbarItem);
Vue.use(Toast);
Vue.use(NavBar);
Vue.use(Row).use(Col);
Vue.use(Icon);
Vue.use(Image);
Vue.config.productionTip = false;
Vue.use(PullRefresh);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
