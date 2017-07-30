<template>
	<div class="list_head">
		<router-link to="/" class="back_home">首页</router-link>
		<span class="list_name" @click="showList">{{name}}<i class="fa fa-angle-down"></i></span>

		<!--列表-->
		<div class="list_sort" v-if='isShow'>
			<ul>
				<li v-for="(item,index) in list" @click="changeName(index)">{{item}}</li>
			</ul>
		</div>

		<!--遮盖层-->
		<div class="list_mask" v-if='isShow' @click="showList"></div>
	</div>
</template>

<script type="text/javascript">
	export default{
		name:'list_head',
		data(){
			return{
				isShow:0,
				list:["饮食1","饮食2","饮食3","饮食","饮食","饮食","饮食","饮食","饮食","饮食","饮食","饮食","饮食","饮食","饮食","饮食","饮食","饮食"],
				name:'饮食'
			}
		},
		methods:{
			changeName(index){
				this.name=this.list[index];
				this.isShow=0;
			},
			showList(){
				this.isShow=!this.isShow;
			}
		}
	}
</script>

<style type="text/css">
	.list_head{
		position: relative;
		width: 100%;
		height: 1rem;
		font-size: 16px;
		text-align: center;
		line-height: 1rem;
	}
	.list_head .back_home{
		position: absolute;
		color: #ccc;
		left: 0.6rem;
	}
	.list_head .list_name{
		color: #3ba94d;
	}
	.list_head .list_name i{
		margin-left: 0.13rem;
	}
	.list_sort{
		position: absolute;
		padding-top: 0.23rem;
		padding-bottom: 0.23rem;
		width: 6rem;
		height: 8rem;
		left: 50%;
		top:3rem;
		margin-left: -3rem;
		overflow: hidden;
		background-color: #fff;
		border-radius: 0.13rem;
		z-index: 5;
	}
	.list_sort ul{
		height: 100%;
		overflow-y: auto;
	}
	.list_sort ul::-webkit-scrollbar{
		width: 0px;
	}
	.list_mask{
		position: fixed;
    	bottom: 0;
    	left: 0;
    	right: 0;
    	z-index: 4;
    	width: 100%;
    	height: 100%;
    	background-color: rgba(0,0,0,0.5);	}
</style>

