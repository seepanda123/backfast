// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import { Tabbar, TabbarItem } from 'vant';
import { NavBar } from 'vant';
import { Search } from 'vant';
import { Icon } from 'vant';
import { Card } from 'vant';

Vue.use(Card);

Vue.use(Icon);

Vue.use(Search);

Vue.use(NavBar);

Vue.use(Tabbar).use(TabbarItem);

Vue.use(Vant);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
