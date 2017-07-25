<template>
	<div class="mine">
	<head-bar></head-bar>
	<head-list></head-list>
	</div>
</template>
<script>
	import headBar from '../../components/head.vue'
	import headList from '../../components/head_list.vue'
	export default{
		name:'mine',
		components:{
			headBar,
			headList
		}
	}
</script>

<style>
	
</style>