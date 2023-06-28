import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//导入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//导入axios
import Axios from 'axios'
import * as echarts from 'echarts'

Vue.use(ElementUI);
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  Axios,
  echarts,
  render: h => h(App)
}).$mount('#app')
