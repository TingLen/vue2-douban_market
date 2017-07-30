<template>
	<div>
	<head-bar></head-bar>
	<head-list></head-list>
	<swiper></swiper>
	<!--热门商品-->
	<div class="home_list">
		<ul class="clearfloat">
			<li v-for="product in hotProducksList">
				<div class="list_item">
					<a :href="product.url+'/'+product.id" class="list_img">
						<img :src="product.src">
						<p>{{product.title}}</p>
						<span>{{product.new_price}}</span>
						<span class="old_price">{{product.old_price}}</span>
					</a>
				</div>
			</li>
		</ul>
	</div>

	<!--热门店铺-->
	<div v-infinite-scroll="getHotShops" infinite-scroll-distance="{shopsNum}">
	<div class="home_hotShops clearfloat" v-for='shop in hotShopsList'>
		<div class="shop_name">
			<img :src="shop.icon">
			<span>{{shop.name}}</span>
			<p>{{shop.intrduction}}</p>
		</div>
		<ul class="items clearfloat">
			<li v-for='item in shop.products'>
				<div class="list_item">
					<a :href="item.url+'/'+item.id" class="list_img">
						<img :src="item.src">
						<p>{{item.title}}</p>
						<span>{{item.newPrice}}</span>
						<span class="old_price">{{item.oldPrice}}</span>
					</a>
				</div>
			</li>
		</ul>
		<div class="shop_link">
			<a :href="shop.url">进入店铺</a>
		</div>
	</div>
	</div>
	<loading v-if='isScrollingTips'></loading>
	<loading-end v-if='isScrollEndTips'></loading-end>
	</div>
</template>
<script>
	import headBar from '../../components/head.vue'
	import headList from '../../components/head_list.vue'
	import Swiper from './sliper.vue'
	import loading from '../../components/loading.vue'
	import loadingEnd from '../../components/loadingend.vue'
	import {mapState,mapActions} from 'vuex'
	export default{
		name:'home',
		computed:{
			...mapState([
				'hotProducksList',
				'hotShopsList',
				'isShopsScrolling',
				'isScrollingTips',
				'isScrollEndTips'
				])
		},
		mounted(){
			//获取热门商品
			this.getHotProducts();
		},
		methods:{
			...mapActions(['getHotProducts','getHotShops'])
		},
		components:{
			headBar,
			headList,
			Swiper,
			loading,
			loadingEnd
		}
	}
</script>

<style>
.home_list ul{
	margin: 0.08rem;
}
.home_list ul li{
	box-sizing: border-box;
	padding: 0.08rem;
	margin-bottom: 0.11rem;
	width: 50%;
	height: 6.5rem;
	float: left;
}
.home_list ul .list_item{
	border: 1px solid #ccc;
	height: 100%;
	padding: 0.08rem;
}
.home_list ul li a{
	display: block;
	width: 100%;
	height: 5rem;
}
.home_list ul li a img{
	margin: 0.05rem;
	max-height: 100%;
	max-width: 100%;
}
 .home_list ul li a p{
 	display: block;
    padding: 5px 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #ccc;
    font-size: 14px; 
 }
  .home_list ul li a span{
  	color: #e17c72;
    font-weight: 600;
  }
  .home_list ul li a .old_price{
  	text-decoration: line-through;
  	color: #cccccc;
  }
  .home_hotShops{
  	position: relative;
  	margin: 1rem 0.2rem;
  	border: 1px solid #ccc;
  	padding: 0.2rem;
  }
  .home_hotShops .shop_name img{
  	display: inline-block;
  	width: 0.8rem;
  	height: 0.8rem;
  	vertical-align: middle;
  }
  .home_hotShops .shop_name span{
  	margin-left: 0.27rem;
  	font-size: 12px;
  }
  .home_hotShops .shop_name p{
  	font-size: 14px;
  	color: #ccc;
  }
  .home_hotShops .items{
  	margin-top: 0.4rem;
  }
  .home_hotShops .items li{
  	float: left;
  	box-sizing: border-box;
  	padding: 0.2rem;
  	width: 50%;
  	height: 5.8rem;
  }
  .home_hotShops .items li .list_item{
  	border: 1px #ccc solid;
  }
  .home_hotShops .items li .list_item img{
  	max-width: 100%;
  	max-height: 100%;
  }
  .home_hotShops .items li .list_item p{
  	color: #ccc;
  	font-size: 14px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .home_hotShops .items li .list_item span{
  	color: #e17c72;
    font-weight: 600;
  }
  .home_hotShops .items li .list_item .old_price{
  	text-decoration: line-through;
  	color: #cccccc;
  }
  .home_hotShops .shop_link{
  	float: right;
  	margin-right: 0.4rem;
  }
  .home_hotShops .shop_link a{
  	color: #000;
  }
</style>