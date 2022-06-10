<template>
	<view>
		<TopNav></TopNav>
		<!-- <rich-text :nodes="bannerDetail.html"></rich-text> -->
		<web-view :src="bannerDetail"></web-view>
	</view>
</template>

<script>
	import { GetHomeBannerDetail } from '@/util/api/api.js';
	export default {
		data() {
			return {
				bid: 0,
				bannerDetail: '',
				styleLike: '',
				html: ''
			};
		},
		onLoad(params) {
			this.bid = params.id			
			this.getBannerDetail()
		},
		methods: {
			async getBannerDetail() {
				const { data: res } = await GetHomeBannerDetail()
				// console.log(res);
				res.results.forEach(item => {					
					if (item.code === Number(this.bid)) {
						this.bannerDetail = item.link
					}
				})
				console.log(this.bannerDetail);
			}
		}
	}
</script>

<style lang="scss">

</style>
