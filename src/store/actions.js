import axios from'axios'

export default{
	getHotProducts({commit,state}){
		axios.get("../../static/data/hot-products.json").then((response) => {
			let list =response.data.list;
			if(list){
				commit("GET_HOT_PRODUCTS",list);
			}
			
		})
	},
	getHotShops({commit,state}){
		commit("CHANGE_SCROLLING",false);
		axios.get("../../static/data/hot-shops.json").then((response) => {
			let items = response.data.list.slice(state.shopsNum-4, state.shopsNum);
			if(items.length!=0){
				commit("GET_HOT_SHOPS",items);
				commit("ADD_SHOPS_NUM",4);
			}
			else {
				commit("ISSHOPS_END",true);
				commit("ISSHOPS_SCROLL",false);
			}
		});
		commit("CHANGE_SCROLLING",true);
	},
	getMyProducks({commit,state}){
		commit("CHANGE_MYPRODUCKSSCROLLING",false);
		axios.get("../../static/data/my-producks.json").then((response) => {
			let list =response.data.list.slice(state.myProducksNum-8,state.myProducksNum);
			if(list.length!=0){
				commit("GET_MYPRODUCKS",list);
				commit("ADD_MYPRODUCKS_NUM",8);
			}
			else{
				commit("ISMYPRODUCKS_END",true);
				commit("ISMYPRODUCKS_SCROLL",false);
			}
		});
			commit("CHANGE_MYPRODUCKSSCROLLING",true);
	},
	getProducks({commit,state}){
		commit("CHANGE_PRODUCKSSCROLLING",false);
		axios.get("../../static/data/producks.json").then((response) => {
			let list =response.data.list.slice(state.producksNum-8,state.producksNum);
			if(list!=0){
				commit("GET_PRODUCKS",list);
				commit("ADD_PRODUCKS_NUM",8);
			}
			else{
				commit("ISPRODUCKS_END",true);
				commit("ISPRODUCKS_SCROLL",false);
			}
		});
			commit("CHANGE_PRODUCKSSCROLLING",true);
	}
}