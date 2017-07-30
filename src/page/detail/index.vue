<template>
	<div class="item_details">
		<!-- 返回 -->
		<span class="back_button fa fa-chevron-left fa-lg" @click="goback"></span>
		<!--banner-->
		<swiper></swiper>
		<!--价格、名称、运费-->
		<div class="item_info">
			<p class="item_info_name">PISN 高贵冷淡 四色不对称开叉高领百搭针织打底衫加厚套头毛衣女</p>
			<p class="item_info_price">
			<span class="newPrice">￥199</span>
			<span class="oldPrice">￥259</span>
			</p>
			<p class="item_info_other">运费：￥8.00<span>非包邮地区</span><i class="fa fa-envelope-o"></i><i class="fa fa-heart-o"></i></p>
		</div>
		<!--选择型号-->
		<div class="detail_choose">
			<div class="choose_info">
				<label class="choose_title">颜色</label>
				<div class="choose_style">
					<span v-for="(item,index) in color" @click="chooseColor(index)" :class="{active:index===isColor}">{{item}}</span>
				</div>
			</div>
			<div class="choose_info">
				<label class="choose_title">尺寸</label>
				<div class="choose_style">
					<span v-for="(item,index) in size" @click="chooseSize(index)" :class="{active:index===isSize}">{{item}}</span>
				</div>
			</div>
		</div>
		<!--选择数量-->
		<div class="choose_number">
			<label>数量</label>
			<div class="num_option">
				<span :class="{active:num>1}" @click="minus">-</span>
				<input type="text" name="number" v-model="num">
				<span :class="{active:num>0}" @click="addition">+</span>
			</div>
		</div>

		<!--承诺-->
		<div class="promise">
			<span>豆瓣市集担保</span>
			<span>七天无理由退货</span>
			<span>正品保证</span>
			<span>独立品牌</span>
		</div>

		<!--选项卡-->
		<div class="tabs">
			<span @click="changeComponent('tabsDetail')">商品详情</span>
			<span @click="changeComponent('tabsDiscuss')">评论</span>
			<span @click="changeComponent('tabsRated')">讨论</span>
		</div>

		<!--选项卡内容-->
		<component :is='componentId'></component>

		<!--底部固定栏-->
		<div class="bottom_fixed">
			<div class="bottom_fixed_cart"><i class="fa fa-shopping-cart fa-lg"></i></div>
			<div class="bottom_fixed_addCart">加入购物车</div>
			<div class="bottom_fixed_buyNow">立即购买</div>
		</div>
	</div>
</template>

<style>
	.item_details{
		width: 100%;
	}
	.back_button{
		position: absolute;
		width: 0.9rem;
		height: 0.9rem;
		border-radius: 0.45rem;
		top: 0.27rem;
		left: 0.27rem;
		background-color: #ccc;
		text-align: center;
		line-height: 0.9rem;
		color: #fff;
		z-index: 10;
	}
	.item_info{
		padding: 0.21rem;
		border-bottom: 1px solid #ccc;
	}
	.item_info p{
		margin: 0.21rem;
	}
	.item_info_name{
		font-size: 16px;
	}
	.item_info_price{
		font-size: 14px;
		font-weight: 600;
	}
	.item_info_price .newPrice{
		color: #e17c72;
	}
	.item_info_price .oldPrice{
		text-decoration: line-through;
		color: #ccc;
	}
	.item_info_other{
		font-size: 15px;
	}
	.item_info_other span{
		margin-left: 0.4rem;
		color: #e17c72;
	}
	.item_info_other i{
		float: right;
		margin-right: 0.27rem;
	}
	.item_info_other .fa-heart-o{
		color:#e17c72;
	}
	.item_info_other .fa-envelope-o{
		color:#68cb78;
	}
	.detail_choose{
		border-bottom: 1px solid #ccc;
		padding: 0.21rem;
	}
	.detail_choose .choose_info{
		margin-bottom: 0.21rem;
	}
	.detail_choose .choose_info .choose_title{

		font-size: 16px;
		margin-right: 0.5rem;
		vertical-align: top;

	}
	.detail_choose .choose_info .choose_style{
		display: inline-block;
		width: 70%;
	}
	.detail_choose .choose_info .choose_style span{
		display: inline-block;
		width: 2rem;
		height: 0.75rem;
		line-height: 0.75rem;
		background-color: #ccc;
		color: #fff;
		border-radius: 0.37rem;
		text-align: center;
		margin-right: 0.15rem;
		margin-bottom: 0.15rem;
	}
	.choose_number .num_option span.active,.detail_choose .choose_info .choose_style span.active{
		background-color: #68cb78;
	}
	.choose_number{
		padding-right: 0.21rem;
		padding-left: 0.21rem;
		padding-top: 0.4rem;
		padding-bottom: 0.4rem;
		border-bottom: 1px solid #ccc;
	}
	.choose_number label{
		font-size: 16px;
		margin-right: 0.5rem;
		vertical-align: top;
	}
	.choose_number .num_option{
		display: inline-block;
	}
	.choose_number .num_option span{
		display: inline-block;
		width: 0.7rem;
		height: 0.7rem;
		border-radius: 0.35rem;
		background-color: #ccc;
		line-height: 0.7rem;
		text-align: center;
		font-size: 24px;
		font-weight: 600;
		color:#fff;
	}
	.choose_number .num_option input{
		width: 1.4rem;
		height: 0.7rem;
		border-radius: 0.35rem;
		border: none;
		background-color: #ccc;
		vertical-align: top;
		text-align: center;
	}
	.promise{
		display: flex;
		justify-content: space-between;
		width: 80%;
		margin: 0.27rem auto
	}
	.promise span{
		font-size: 12px;
		color: #ccc;
		margin-right: 0.1rem;
		padding-right: 0.1rem;
		border-right: 1px solid #ccc;

	}
	.promise span:last-child{
		border-right: none;
	}

	.tabs{
		display: flex;
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
		width: 100%;
		border-bottom: 2px solid #e17c72;
	}
	.tabs span{
		display: inline-block;
		padding: 0.4rem;
		flex: 1;
		height: 0.4rem;
		line-height: 0.4rem;
		font-size: 18px;
		text-align: center;
	}
	.bottom_fixed{
		display: flex;
		position: fixed;
		width: 100%;
		height: 1.3rem;
		bottom: 0px;
		left: 0px;
	}
	.bottom_fixed div{
		-webkit-flex:1;
		-o-flex:1;
		-ms-flex:1;
		-moz-flex:1;
		flex: 1;
		height: 1.3rem;
		line-height: 1.3rem;
		text-align: center;
		font-size: 14px;
		color: #fff;
	}
	.bottom_fixed .bottom_fixed_cart{
		background-color: #EFEFEF;
		color: #9d9d9d;
	}
	.bottom_fixed .bottom_fixed_addCart{
		background-color: #eba887;
	}
	.bottom_fixed .bottom_fixed_buyNow{
		background-color: #e17c72;
	}
</style>
<script>
	import swiper from './details_swiper.vue'
	import tabsDetail from './tab_details.vue'
	import tabsDiscuss from './tab_discuss.vue'
	import tabsRated from './tab_rated.vue'
	export default{
		name:'detail',
		components:{
			swiper,
			tabsDetail,
			tabsDiscuss,
			tabsRated
		},
		data(){
			return{
				componentId:'tabsDetail',
				isColor:0,
				isSize:0,
				color:["白色","青色","紫色"],
				size:["S","M","L","XL","XXL"],
				num:1
			}
		},
		methods:{
			chooseColor(index){
				this.isColor=index;
			},
			chooseSize(index){
				this.isSize=index;
			},
			addition(){
				this.num++;
			},
			minus(){
				this.num--;
			},
			changeComponent(component){
				this.componentId=component;
			},
			goback(){
				this.$router.go(-1);
			}
		}
	}
</script>
