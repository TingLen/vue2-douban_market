const GET_HOT_PRODUCTS="GET_HOT_PRODUCTS"
const GET_HOT_SHOPS="GET_HOT_SHOPS"
const CHANGE_SCROLLING="CHANGE_SCROLLING"
const ADD_SHOPS_NUM="ADD_SHOPS_NUM"
const ISSHOPS_END ="ISSHOPS_END"
const ISSHOPS_SCROLL="ISSHOPS_SCROLL"
const GET_MYPRODUCKS="GET_MYPRODUCKS"
const ISMYPRODUCKS_END="ISMYPRODUCKS_END"
const ISMYPRODUCKS_SCROLL="ISMYPRODUCKS_SCROLL"
const ADD_MYPRODUCKS_NUM="ADD_MYPRODUCKS_NUM"
const CHANGE_MYPRODUCKSSCROLLING="CHANGE_MYPRODUCKSSCROLLING"
const CHANGE_PRODUCKSSCROLLING="CHANGE_PRODUCKSSCROLLING"
const GET_PRODUCKS="GET_PRODUCKS"
const ISPRODUCKS_END="ISPRODUCKS_END"
const ISPRODUCKS_SCROLL="ISPRODUCKS_SCROLL"
const ADD_PRODUCKS_NUM="ADD_PRODUCKS_NUM"

export default{
	[GET_HOT_PRODUCTS](state,list){
	state.hotProducksList=list;
	},
	[GET_HOT_SHOPS](state,list){
		state.hotShopsList=state.hotShopsList.concat(list);
	},
	[CHANGE_SCROLLING](state,bool){
		state.isShopsScrolling=bool;
	},
	[ADD_SHOPS_NUM](state,num){
		state.shopsNum+=num;
	},
	[ISSHOPS_END](state,bool){
		state.isScrollEndTips=bool;
	},
	[ISSHOPS_SCROLL](state,bool){
		state.isScrollingTips=bool;
	},
	[GET_MYPRODUCKS](state,list){
		state.myProducksList=state.myProducksList.concat(list);
	},
	[ISMYPRODUCKS_END](state,bool){
		state.isMyProducksScrollEndTips=bool;
	},
	[ISMYPRODUCKS_SCROLL](state,bool){
		state.isMyProducksScrollingTips=bool;
	},
	[ADD_MYPRODUCKS_NUM](state,num){
		state.myProducksNum+=num;
	},
	[CHANGE_MYPRODUCKSSCROLLING](state,bool){
		state.isMineScrolling=bool;
	},
	[CHANGE_PRODUCKSSCROLLING](state,bool){
		state.isProducksScrolling=bool;
	},
	[GET_PRODUCKS](state,list){
		state.producksList=state.producksList.concat(list);
	},
	[ISPRODUCKS_END](state,bool){
		state.isProducksScrollEndTips=bool;
	},
	[ISPRODUCKS_SCROLL](state,bool){
		state.isProducksScrollingTips=bool;
	},
	[ADD_PRODUCKS_NUM](state,num){
		state.producksNum+=num;
	}


}
