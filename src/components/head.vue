<template>
	<section class="header">
		<div class="logo">
			<span>豆瓣集市</span>
		</div>
		<div class="search_button">
			<span @click='show_search'><i class="fa fa-search fa-2x" aria-hidden="true"></i></span>
		</div>
		<div class="search" v-show='isShow'>
		<div class="search_area">
			<input type="text" name="search" class="ipt_search">
			<span @click='submit'><i class="fa fa-search fa-lg"></i></span>
		</div>
			<div class="search_cover" @click='show_search'></div>
		</div>
	</section>
</template>

<script>
	export default{
		name:'head',
		data(){
			return{
				isShow:false
			}
		},
		methods:{
			show_search(){
				this.isShow=!this.isShow;
			},
			submit(){
				let searchName=document.querySelector('.ipt_search').value;
				alert(searchName);
			}
		}
	}
</script>

<style>
.header{
	position: relative;
	background-color: #68cb78;
	width: 100%;
	height:1.2rem;
}
.logo{
	height: 100%;
	color: #ffffff;
	font-weight: 600;
	font-size: 0.8rem;
	font-family: sans-serif;
	margin: 0 0.13rem;
}
.search_button{
	position: absolute;
	right: 0.5rem;
	top: 50%;
	margin-top: -0.3rem;
}
.search_button span{
	color: #FFF;

}
.search{
	position: absolute;
	top: 0;
	width: 100%;
	height: 1.2rem;
	background-color: #68cb78;
	z-index: 10;
}
.search_area{
	position: relative;
	width: 6rem;
	height: 0.6rem;
	border: 1px solid #fff;
	border-radius: 0.6rem;
	margin: 0 auto;
	top: 50%;
	margin-top: -0.3rem;
}
.search_area input{
	display: block;
	position: absolute;
	height: 0.6rem;
	margin-left: 0.3rem;
	width: 4.9rem;
	border: none;
	background-color: #68cb78;
}.search_area span{
	position: absolute;
	right: 0.3rem;
	top: 0.08rem;
	color:#fff;
}
.search_cover{
		position: fixed;
		top: 1.2rem;
    	z-index: 10;
    	width: 100%;
    	height: 100%;
    	background-color: rgba(0,0,0,0.5);
}
</style>