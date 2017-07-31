// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store/'
import routes from './router/index.js'
import infiniteScroll from 'vue-infinite-scroll'
//懒加载用的图片
import def_lazy_img from './assets/img/loading.gif'
//懒加载插件
import VueLazyLoad from "vue-lazyload"

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(infiniteScroll)
Vue.use(VueLazyLoad,{
	loading: def_lazy_img,
	preLoad:40
})

const router =new VueRouter({
	routes
})

/* eslint-disable no-new */
new Vue({
  router,
  store
}).$mount('#app')
