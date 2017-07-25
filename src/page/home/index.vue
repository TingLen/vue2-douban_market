<template>
	<div>
	<head-bar></head-bar>
	<head-list></head-list>
	<div class="banner"></div>
	<div class="home_list">
		<ul class="clearfloat">
			<li>
			<div class="list_item">
			<a href="" class="list_img">
				<img src="../../assets/img/test_hot_product.jpg" height="300" width="300">
			
				<p>PISN 高贵冷淡 四色不对称开叉高领百搭针织打底衫加厚套头毛衣女</p>
				<span>￥229</span>
				<span class="old_price">￥229</span>
			</a>
			</div>
			</li>
			<li>
			<div class="list_item">
			<a href="" class="list_img">
				<img src="../../assets/img/test_hot_product.jpg" height="300" width="300">
			
				<p>PISN 高贵冷淡 四色不对称开叉高领百搭针织打底衫加厚套头毛衣女</p>
				<span>￥229</span>
				<span class="old_price">￥229</span>
			</a>
			</div>
			</li>
			<li>
			<div class="list_item">
			<a href="" class="list_img">
				<img src="../../assets/img/test_hot_product.jpg" height="300" width="300">
			
				<p>PISN 高贵冷淡 四色不对称开叉高领百搭针织打底衫加厚套头毛衣女</p>
				<span>￥229</span>
				<span class="old_price">￥229</span>
			</a>
			</div>
			</li>
			<li>
			<div class="list_item">
			<a href="" class="list_img">
				<img src="../../assets/img/test_hot_product.jpg" height="300" width="300">
			
				<p>PISN 高贵冷淡 四色不对称开叉高领百搭针织打底衫加厚套头毛衣女</p>
				<span>￥229</span>
				<span class="old_price">￥229</span>
			</a>
			</div>
			</li>
			<li>
			<div class="list_item">
			<a href="" class="list_img">
				<img src="../../assets/img/test_hot_product.jpg" height="300" width="300">
			
				<p>PISN 高贵冷淡 四色不对称开叉高领百搭针织打底衫加厚套头毛衣女</p>
				<span>￥229</span>
				<span class="old_price">￥229</span>
			</a>
			</div>
			</li>
			<li>
			<div class="list_item">
			<a href="" class="list_img">
				<img src="../../assets/img/test_hot_product.jpg" height="300" width="300">
			
				<p>PISN 高贵冷淡 四色不对称开叉高领百搭针织打底衫加厚套头毛衣女</p>
				<span>￥229</span>
				<span class="old_price">￥229</span>
			</a>
			</div>
			</li>
		</ul>
	</div>
	</div>
</template>
<script>
	import headBar from '../../components/head.vue'
	import headList from '../../components/head_list.vue'
	export default{
		name:'home',
		components:{
			headBar,
			headList
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
	box-sizing: border-box;
}
.home_list ul .list_item{
	box-shadow: 0 0 2px #cccccc;
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
</style>