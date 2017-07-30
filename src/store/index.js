import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions.js'
import mutations from './mutaition.js'

Vue.use(Vuex)

const state = {
	hotShopsList:[],//热门商铺列表
	hotProducksList:[],//热门商品列表
	producksList:[],//商品列表
	myProducksList:[],//我的商品列表
	shopsNum:4,//每次加载商铺的数量
	myProducksNum:8,//每次加载商品的数量
	producksNum:8,
	isScrollingTips:true,//显示正在加载组件
	isScrollEndTips:false,//显示滚动至结尾组件
	isMyProducksScrollingTips:true,
	isMyProducksScrollEndTips:false,
	isShopsScrolling:false,//店铺是否加载
	isMineScrolling:false,//购买的商品是否加载
	isProducksScrolling:false,
	isProducksScrollEndTips:false,
	isProducksScrollingTips:true
}

export default new Vuex.Store({
	state,
	actions,
	mutations
})