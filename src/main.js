/* eslint-disable no-undef */

import App from './App.vue'
import router from './router'
import store from './store'

import 'amfe-flexible'

// 解决移动端点击延时300ms
import FastClick from 'fastclick'

import loading from './common/loading'

import comHeader from './components/CompHeader.vue'

// 全局样式初始化
import './assets/style/reset.css'
// 全局样式初始化
import './assets/style/border.css'
// 全局样式初始化
import './assets/style/public.less'

Vue.component(comHeader.name, comHeader)

// 阻止启动生产消息
Vue.config.productionTip = false

FastClick.attach(document.body)

Vue.use(loading)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
