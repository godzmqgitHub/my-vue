// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import router from './router'
import {post,get} from './config/api.serve'
import Mint from 'mint-ui'
import App from './App'
import store from './store/index'
import errorHandler from './error-handler/error-handler'

Vue.use(Mint);
// import blockquote from '@/components/blockquote'

// Vue.config.productionTip = false;
Vue.prototype.$post = post;
Vue.prototype.$get = get;

// 代码异常捕获
Vue.config.errorHandler = errorHandler;
// 接口异常捕获
Vue.prototype.$throw = (error)=> errorHandler(error,this);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
