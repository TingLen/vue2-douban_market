<template>
	<div class="list">
		<header-bar></header-bar>
		<head-nav></head-nav>
		<head-option></head-option>
		<div class="list_details">
			<ul class="clearfloat">
			<div v-infinite-scroll="getProducks" infinite-scroll-distance="8">
				<li v-for='produck in producksList'>
					<div class="list_container">
						<span class="list_heart">
							<i class="fa fa-heart-o fa-lg" @click="changeHeart($event)"></i>
						</span>
						<a :href="produck.url+'/'+produck.id">
						<img v-lazy="produck.src">
						</a>
						<p>{{produck.title}}</p>
						<span class="list_newPrice">{{produck.new_price}}</span>
						<span class="list_oldPrice">{{produck.old_price}}</span>
					</div>
				</li>
			</div>
			</ul>
		</div>
		<loading v-if='isProducksScrollingTips'></loading>
		<loading-end v-if='isProducksScrollEndTips'></loading-end>
	</div>
</template>

<script type="text/javascript">
import headerBar from './list_header.vue'
import headNav from './list_nav.vue'
import headOption from './list_option.vue'
import loading from '../../components/loading.vue'
import loadingEnd from '../../components/loadingend.vue'
import {mapState,mapActions} from 'vuex'

export default{
	name:'list',
	components:{
		headerBar,
		headOption,
		headNav,
		loading,
		loadingEnd
	},
	data(){
		return{
			isTrue:false
		}
	},
	computed:{
		...mapState([
			'producksList',
			'isProducksScrolling',
			'isProducksScrollingTips',
			'isProducksScrollEndTips'
			])
	},
	methods:{
		...mapActions([
			'getProducks'
			]),
		changeHeart(e){
			if(this.isTrue){
				e.target.className="fa fa-heart fa-lg";
				this.isTrue=false;
			}
			else{
				e.target.className="fa fa-heart-o fa-lg";
				this.isTrue=true;
			}
			e.preventDefault();
		}
	}
}
	
</script>

<style type="text/css">
	.list_details{
		box-sizing: border-box;
		padding: 0.07rem;
	}
	.list_details ul li{
		float: left;
		box-sizing: border-box;
		padding: 0.08rem;
		margin-bottom: 0.11rem;
		width: 50%;
		height: 6.5rem;
	}
	.list_details ul li .list_container{
		border: 1px solid #ccc;
		position: relative;
	}
	.list_details ul li .list_container .list_heart{
		position: absolute;
		right: 0.13rem;
		top: 0.13rem;
	}
	.list_details ul li .list_container a{
		display: block;
		width: 100%;
		height: 5rem;
	}
	.list_details ul li .list_container a img{
		max-height: 100%;
		max-width: 100%;
	}
	.list_details ul li .list_container p{
		display: block;
	    padding: 5px 0;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    overflow: hidden;
	    color: #ccc;
	    font-size: 14px; 
	}
	.list_details ul li .list_container span{
		color: #e17c72;
   		font-weight: 600;
	}
	.list_details ul li .list_container span.list_oldPrice{
		text-decoration: line-through;
  		color: #cccccc;
	}
</style>

