// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
<<<<<<< HEAD
import Vue from "vue";
import App from "./App";
import router from "./router";
import Vant from "vant";
import "vant/lib/index.css";
import 'lib-flexible/flexible'

Vue.use(Vant);
Vue.config.productionTip = false;
=======
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import { Image } from 'vant';
import { Icon } from 'vant';
import { Row, Col } from 'vant';
import { NavBar } from 'vant';

Vue.use(NavBar);
Vue.use(Row).use(Col);
Vue.use(Icon);
Vue.use(Image);
Vue.use(Vant)
Vue.config.productionTip = false
>>>>>>> ecae9bf71ca3be0d3b63bad8f3bf608edccf60ec

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
