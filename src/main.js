/* eslint-disable no-undef */

import App from './App.vue'
import router from './router'
import store from './store'

import 'amfe-flexible'

// 解决移动端点击延时300ms
import FastClick from 'fastclick'

// 全局样式初始化
import './assets/style/reset.css'
// 全局样式初始化
import './assets/style/border.css'

// 阻止启动生产消息
Vue.config.productionTip = false

FastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
