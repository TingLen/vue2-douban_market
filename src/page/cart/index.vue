<template>
<div class="cart">
	<head-bar></head-bar>
	<head-list></head-list>
	<div class="login_false">
		<p>还未登录,请使用豆瓣账号登录</p>
	</div>
	<div class="login">
		<p>登录豆瓣账号后，可以进行订单查询，使用优惠券</p>
		<router-link to='/login'>登陆</router-link>
		<p>没有豆瓣账号？<span><router-link to='/login'>注册</router-link></span></p>
	</div>
	<hr>
	<div class="anonymous">
		<p>使用匿名购买，则可以点击以下链接查询订单</p>
		<p><router-link to='/'>查询订单</router-link></p>
	</div>
</div>
</template>
<script>
	import headBar from '../../components/head.vue'
	import headList from '../../components/head_list.vue'
	export default{
		name:'cart',
		components:{
			headBar,
			headList
		}
	}
</script>

<style>
.cart{
	width: 100%;
}
.login_false{
	width: 100%;
	height: 2rem;
	border-bottom: 1px solid #9d9d9d;
    background-color: #f8f8fe;
}
.login_false p{
	text-align: center;
	font-size: 14px;
	line-height: 2rem;
}
.login{
	margin-top: 1rem;
	margin-bottom: 1rem;
}
.login p:nth-child(1){
	text-align: center;
	font-size: 12px;
}
.login a:nth-child(2){
	display: block;
	background-color: #68cb78;
	width: 80%;
	height: 1rem;
	margin: 0.26rem auto;
	border-radius: 0.08rem;
	text-align: center;
	color: #ffffff;
	font-size: 16px;
	font-width: 200;
	line-height: 1rem;
}
.login p:nth-child(3){
	text-align: center;
	font-size: 12px;
    color: #9d9d9d;
}
.login p:nth-child(3) span a{
	color: #68cb78;
}
.anonymous{
	margin-top:2rem;
}
.anonymous p{
	text-align: center;
	font-size: 12px;
    color: #9d9d9d;

}
.anonymous a{
	display: block;
	color: #68cb78;
	margin-top: 0.27rem;
}
</style>