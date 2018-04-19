// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import App from './App'
import VueWechatTitle from 'vue-wechat-title'
import 'lib-flexible'
import { AlertPlugin, ToastPlugin, WechatPlugin, AjaxPlugin } from 'vux'
import global_ from './global/index'
import store from './store/store'
Vue.prototype.GLOBAL = global_
Vue.use(WechatPlugin)
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
Vue.use(AjaxPlugin)
console.log(Vue.http)
Vue.use(VueWechatTitle)
Vue.use(router)
FastClick.attach(document.body)
console.log(Vue.wechat)
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  // Change doc title
  // document.title = to.meta.title || 'Unknow title'
  document.querySelector('meta[name="keywords"]').setAttribute('content', to.meta.keywords)
  document.querySelector('meta[name="description"]').setAttribute('content', to.meta.description)
  next()
})
router.afterEach(function (to) {
  if (window.ga) {
    window.ga('set', 'page', to.fullPath) // 你可能想根据请求参数添加其他参数，可以修改这里的 to.fullPath
    window.ga('send', 'pageview')
  }
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
