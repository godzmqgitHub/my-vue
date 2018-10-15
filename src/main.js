// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import router from './router'
import axios from 'axios'
// import fetchPost from '@/config/axiosConfig'
import Mint from 'mint-ui';
import App from './App'
Vue.use(Mint);
// import blockquote from '@/components/blockquote'

Vue.config.productionTip = false
Vue.prototype.$axios = axios;
// Vue.config.axios = axios;
// Vue.prototype.$post = fetchPost;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
