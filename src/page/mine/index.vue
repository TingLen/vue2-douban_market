<template>
	<div class="mine">
	<head-bar></head-bar>
	<head-list></head-list>
	<div class="myProducts">
	<ul>
	    <div v-infinite-scroll="getMyProducks" infinite-scroll-distance="{myProducksNum}" class="clearfloat">
		<li v-for='item in myProducksList'>
				<div class="list_item">
					<a :href="item.url+'/'+item.id" class="list_img">
						<img v-lazy="item.src">
						<p>{{item.title}}</p>
						<span>{{item.new_price}}</span>
						<span class="old_price">{{item.old_price}}</span>
					</a>
				</div>
			</li>
			</div>
	</ul>
	</div>
	<loading v-if='isMyProducksScrollingTips'></loading>
	<loading-end v-if='isMyProducksScrollEndTips'></loading-end>
	</div>
</template>
<script>
	import headBar from '../../components/head.vue'
	import headList from '../../components/head_list.vue'
	import loading from '../../components/loading.vue'
	import loadingEnd from '../../components/loadingend.vue'
	import {mapActions,mapState} from "vuex"
	export default{
		name:'mine',
		components:{
			headBar,
			headList,
			loading,
			loadingEnd
		},
		computed:{
			...mapState([
				'myProducksList',
				'isMineScrolling',
				'isMyProducksScrollingTips',
				'isMyProducksScrollEndTips'
				])
		},
		methods:{
			...mapActions([
				'getMyProducks'
				])
		}
	}
</script>

<style>
	.myProducts ul{
  	margin-top: 0.4rem;
  }
  .myProducts ul li{
  	float: left;
  	box-sizing: border-box;
  	padding: 0.2rem;
  	width: 50%;
  	height: 5.8rem;
  }
  .myProducts ul li .list_item{
  	border: 1px #ccc solid;
  }
  .myProducts ul li .list_item img{
  	max-width: 100%;
  	max-height: 100%;
  }
  .myProducts ul li .list_item p{
  	color: #ccc;
  	font-size: 14px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .myProducts ul li .list_item span{
  	color: #e17c72;
    font-weight: 600;
  }
  .myProducts ul li .list_item .old_price{
  	text-decoration: line-through;
  	color: #cccccc;
  }
</style>