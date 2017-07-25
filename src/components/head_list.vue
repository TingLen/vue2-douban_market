<template>
	<div class="head_list">
		<ul>
			<li v-for='item in navItems'><router-link :to='item.url' active-class='actived'>{{item.text}}</router-link></li>
		</ul>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				navItems:[{
					text:'首页',url:'/home'
				},{
					text:'分类',url:'/sort'
				},{
					text:'购物车',url:'/cart'
				},{
					text:'我的',url:'/mine'
				}],
			}
		}

	}
</script>
<style>
.head_list{
	width: 100%;
	height: 1rem;
	border-bottom: 2px solid #68cb78;
}
.head_list ul{
	display: flex;
	height: 100%;
	justify-content: space-between;
}
.head_list ul li{
	display: inline-block;
	width: 25%;
	height: 100%;
	text-align: center;
}
.head_list ul li a{
	display: inline-block;
	line-height: 1rem;
	font-size: 15px;
	color: #000000;
}
.head_list ul li a.actived{
	color: #68cb78;
}
</style>