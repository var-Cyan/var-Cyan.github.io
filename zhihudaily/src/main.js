// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import appCss from './assets/css/app.css'
//请求数据
import Axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,Axios)
//轮播图
import 'mint-ui/lib/style.css'
import Mint from 'mint-ui';
Vue.use(Mint);

import store from './store/vuex'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})