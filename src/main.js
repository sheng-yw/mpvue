import Vue from 'vue'

import store from './vuex/store';
import App from './App.vue'

//设置关闭vue中提示
Vue.config.productionTip = false;
//声明App为整个应用
App.mpType = 'app';

Vue.prototype.$store = store;
//生成实例
const app = new Vue(App);
//挂载应用
app.$mount();

