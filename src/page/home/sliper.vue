<template>
	<div class='banner'>
		<swiper :options="swiperOption" ref="mySwiper">
			<swiper-slide><a href="/home"><img src="https://img3.doubanio.com/img/files/file-1485236684-0.jpg"></a></swiper-slide>
			<swiper-slide><a href="/home"><img src="https://img3.doubanio.com/img/files/file-1485236684-0.jpg"></a></swiper-slide>
			<swiper-slide><a href="/home"><img src="https://img3.doubanio.com/img/files/file-1485236684-0.jpg"></a></swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default{
	name: 'carrousel',
	components:{
		swiper,
		swiperSlide
	},
	data(){
		return{
			swiperOption:{
				loop:true,//无限轮播
				autoplay:3000,//切换时间
				pagination:'.swiper-pagination',//分页器
				paginationClickable:true,//点击切换banner
				observer:true,//监视器
				observerParents:true
			}
		}
	}
}
</script>

<style>
.banner{
	margin-bottom: 0.27rem;
}
.banner .swiper-slide{
	width: 100%;
	height: 3rem;
}
.banner .swiper-slide a img{
	width: 100%;
	height: 100%;
}
</style>