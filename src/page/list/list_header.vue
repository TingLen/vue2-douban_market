<template>
	<div class="list_head">
		<a class="back_home">首页</a>
		<span class="list_name">饮食<i class="fa fa-angle-down"></i></span>

		<!--列表-->
		<div class="list_sort" v-if='isShow'>
			<ul>
				<li>饮食</li>
				<li>饮食</li>
				<li>饮食</li>
				<li>饮食</li>
				<li>饮食</li>
				<li>饮食</li>
				<li>饮食</li>
				<li>饮食</li>
				<li>饮食</li>
				<li>饮食</li>
				<li>饮食</li>
				<li>饮食</li>
				<li>饮食</li>
			</ul>
		</div>

		<!--遮盖层-->
		<div class="list_mask" v-if='isShow'></div>
	</div>
</template>

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

<script type="text/javascript">
	export default{
		name:'list_head',
		data(){
			return{
				isShow:0
			}
		}
	}
</script>