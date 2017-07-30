<template>
	<div>
		<head-bar></head-bar>
		<head-list></head-list>
		<div class="sort_list">
			<ul>
				<li v-for='item in listName'><router-link :to="item.url" :class="item.color">{{item.text}}</router-link></li>
			</ul>
		</div>
	</div>

</template>
<script>
	import headBar from '../../components/head.vue'
	import headList from '../../components/head_list.vue'
	export default{
		name:'sort',
		components:{
			headBar,
			headList
		},
		data(){
			return{
				listName:[{
					text:'饮食',url:"/sort/diet",color: 'red'
				},{
					text:'服装',url:'/sort/clothing',color: 'blue'
				},{
					text:'配饰',url:'/sort/decorations',color: 'purple'
				},{
					text:'包袋',url:'/sort/bag',color: 'sky'
				},{
					text:'鞋靴',url:'/sort/shoes',color: 'yellow'
				},{
					text:'美容护肤',url:'/sort/skinCare',color: 'pink'
				},{
					text:'家居',url:'/sort/furniture',color: 'grass'
				},{
					text:'时间',url:'/sort/clock',color: 'green'
				},{
					text:'3C数码',url:'/sort/3C',color: 'red'
				}]
			}
		}
	}
</script>

<style>
.sort_list {
	width: 100%;
}
.sort_list ul{
	width: 100%;
}
.sort_list ul li{
	display: inline-block;
	box-sizing: border-box;
	width: 33.33%;
	height: 1.8rem;
	margin-bottom: 0.13rem;
	padding: 0.13rem;
	text-align: center;
}
.sort_list ul li a{
	display: block;
	color: #000;
	font-size: 18px;
	line-height: 1.8rem;
	background-color: #F2FF00;
	border-radius: 10px;
}
.sort_list ul li .red{
		background-color: #ffb2bb;
	}
.sort_list ul li .blue{
		background-color: #89b7ec;
	}
.sort_list ul li .purple{
		background-color: #c2a0e0;
	}
.sort_list ul li .sky{
		background-color: #b2e6ff;
	}
.sort_list ul li .yellow{
		background-color: #e6e7a4;
	}
.sort_list ul li .pink{
		background-color: #e0a0d1;
	}
.sort_list ul li .grass{
		background-color: #b2ffc5;
	}
.sort_list ul li .green{
		background-color: #ffb2bb;
	}
</style>