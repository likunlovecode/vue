import Vue from 'vue';
import App from './App.vue';


import VueRouter from 'vue-router';
Vue.use(VueRouter);//其他组件使用router-view/link组件
import routes from './router.config';

import axios from 'axios';
Vue.prototype.$http=axios;

//注册全局组件
import loading from './loading';
Vue.use(loading)

const router = new VueRouter(routes);
new Vue({
  el: '#app',
  data:{
    bNav:true,
    bFoot:true,
    bLoading:true,
  },
  render: h => h(App),
  router
})



