<template>
	<div class="details_banner">
		<swiper :options="swiperOption" ref="mySwiper">
			<swiper-slide><img src="http://p1.bpimg.com/587986/cefa54f9c5d03776.jpg"></swiper-slide>
			<swiper-slide><img src="http://p1.bpimg.com/587986/cefa54f9c5d03776.jpg"></swiper-slide>
			<swiper-slide><img src="http://p1.bpimg.com/587986/cefa54f9c5d03776.jpg"></swiper-slide>
			<swiper-slide><img src="http://p1.bpimg.com/587986/cefa54f9c5d03776.jpg"></swiper-slide>
			<div class="swiper-pagination" slot='pagination'></div>	
		</swiper>
	</div>
</template>

<style type="text/css">
	.details_banner .swiper-slide{
		width: 100%;
		height: 8.5rem;
	}
	.details_banner .swiper-slide img{
		width: 100%;
		height: 100%;
	}
</style>

<script type="text/javascript">
	import {swiper,swiperSlide} from 'vue-awesome-swiper'
	export default{
		name:'details_swiper',
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