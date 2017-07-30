// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store/'
import routes from './router/index.js'
import infiniteScroll from 'vue-infinite-scroll'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(infiniteScroll)

const router =new VueRouter({
	routes
})

/* eslint-disable no-new */
new Vue({
  router,
  store
}).$mount('#app')
