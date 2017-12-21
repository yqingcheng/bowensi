// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入vue-awesome-swiper
import VueAwesomeSwiper from "vue-awesome-swiper"
import iView from 'iview'; // 导入组件库
import 'iview/dist/styles/iview.css'; // 导入样式
import axios from 'axios';
import qs from 'qs';
import domain from './domain.js';
global.domain = domain;

Vue.prototype.$http = axios;

Vue.prototype.$http.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
Vue.use(iView);
Vue.prototype.$qs = qs;
Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);

// router.afterEach((to,from,next) => {
//   window.scrollTo(0,0);
// });
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
