import Vue from 'vue'
import App from './App.vue'
import store from './store'
import routerObj from './router'
import axios from 'axios'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueResource from 'vue-resource'
import api from './api/api'

Vue.use(VueResource)
Vue.use(ElementUI);
Vue.prototype.axios = axios
Vue.prototype.Apiurl = api
Vue.config.productionTip = false
Vue.prototype.routeMenuConfig = routerObj.routeMenuConfig


//设置超时时间
axios.defaults.timeout = 5000
/* console.log("new Vue aPP") */
let router = routerObj.router;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')