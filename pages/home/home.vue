<template>
	<view class="home">
		<!-- 顶部导航 -->
		<TopNav></TopNav>
		<!-- 轮播 -->
		<swiper class="banner" indicator-active-color='#ffe32a' :indicator-dots="true" :autoplay="true">
			<swiper-item class="swiper-item" @click="goBannerDetail(item.id)" v-for="item in banner" :key="item.id">
				<!-- <view class="swiper-item" @click="goBannerDetail(item.id)"> -->
				<image :src='item.img_url' mode=""></image>
				<!-- </view> -->
			</swiper-item>
		</swiper>

		<!-- 本季推荐 -->
		<!-- 小标题 -->
		<HomeTitle titleLe='本季' titleRi='推荐' enTitle='Sensonal Recommend' riTitle='Seasonal' :showMore='false'>
		</HomeTitle>
		<scroll-view scroll-x="true">
			<view class="scroll-view">
				<image src="/static/img/recommend4.jpg" mode="heightFix" @click="goDateil(17617)"></image>
				<image src="/static/img/recommend7.jpg" mode="heightFix" @click="goDateil(10263)"></image>
				<image src="/static/img/recommend6.jpg" mode="heightFix" @click="goDateil(10255)"></image>
			</view>
		</scroll-view>
		<!-- 法式经典 -->
		<HomeTitle titleLe='法式' titleRi='经典' enTitle='French Classics' riTitle='French'></HomeTitle>
		<image class="French" src="/static/img/french.jpg" mode="widthFix" @click="goDateil(10523)"></image>
		<CakeList :listData='french'></CakeList>

		<!-- 节日庆典 -->
		<HomeTitle titleLe='节日' titleRi='庆典' enTitle='Festival celebration' riTitle='Festival'></HomeTitle>
		<image class="French" src="/static/img/festival.jpg" mode="widthFix" @click="goDateil(15441)"></image>
		<CakeList :listData='festival'></CakeList>

		<!-- 儿童系列 -->
		<HomeTitle titleLe='儿童' titleRi='系列' enTitle='Children Series' riTitle='Children'></HomeTitle>
		<image class="French" src="/static/img/children.jpg" mode="widthFix" @click="goDateil(13573)"></image>
		<CakeList :listData='children'></CakeList>

		<!-- 底部结尾 -->
		<view class="home_footer margin-top-lg text-center">
			<view class="footer_logo flex align-center">
				<image src="../../static/logo2.png" mode="widthFix"></image>
				<view class="margin-top-xl">1</view>
			</view>
			<view class="footer_pingtai flex justify-center margin-top-xl">
				<u-icon name="github-circle-fill" color="#fff" size="50"></u-icon>
				<u-icon class='margin-left margin-right' name="weixin-circle-fill" color="#fff" size="50"></u-icon>
				<u-icon name="weibo-circle-fill" color="#fff" size="50"></u-icon>
			</view>
			<view class="footer_info cl-aa margin-top">Copyright © 2012-2022 空白 版权所有</view>
		</view>
		
		<!-- 菜单 -->
		<LeftPopup></LeftPopup>
		<!-- 一键到顶 -->
		<BackTop :nowScroll='scrollTop'></BackTop>
		<!-- <u-back-top :scroll-top="scrollTop" icon="arrow-up" bottom='50'></u-back-top> -->

		<!-- tab导航 -->
		<Tabbar></Tabbar>
	</view>
</template>

<script>
	// import BackTop from '@/components/BackTop.vue'
	import {
		GetShopClassify,
		GetHomeBanner,
		GetHomeBannerDetail,
		GetGoods
	} from '@/util/api/api.js'
	import { mapState } from 'vuex'
	export default {
		data() {
			return {
				// 滚动条的位置
				scrollTop: 0,
				// 轮播
				banner: [],				
				// 法式经典
				french: [],
				// 节日庆典
				festival: [],
				// 儿童系列
				children: [],
				// ----------------
				
			}
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		onLoad() {
			// this.getClassify()
			this.getBanner()
			this.getGoods()
		},
		computed: {
			...mapState(['leftPopup'])
		},
		methods: {			
			async getBanner() {
				const {
					data: res
				} = await GetHomeBanner()
				// console.log(res);
				this.banner = res.results
			},
			async getGoods() {
				const {
					data: res
				} = await GetGoods()
				// console.log(res);
				// this.goodsList = res.results

				for (let i = 0; i < 4; i++) {
					this.children.push(res.results[Math.floor(Math.random() * res.results.length)])
					this.festival.push(res.results[Math.floor(Math.random() * res.results.length)])
					this.french.push(res.results[Math.floor(Math.random() * res.results.length)])
				}
				// console.log(Math.floor(Math.random() * res.results.length));
			},		
			goDateil(id) {
				uni.navigateTo({
					url: '/pages/detail/detail?id=' + id
				})
			},
			// 跳转到轮播详情页
			goBannerDetail(id) {
				uni.navigateTo({
					url: '/pages/home/banner-detail?id=' + id
				})
			}
		},
		components: {
			// BackTop
		}
	}
</script>

<style lang="scss">
	.home{
		margin-bottom: 100rpx;
	}

	// 轮播
	.banner {
		width: 750rpx;
		height: 792rpx;

		// height: auto;
		.swiper-item {
			width: 100%;
			height: 100%;
		}

		image {
			// padding: 1px;
			width: 750rpx;
			// height: auto;
		}
	}

	.scroll-view {
		white-space: nowrap;
		height: 290rpx;

		image {
			height: 290rpx;
		}
	}

	.French {
		width: 750rpx;
	}

	.home_footer {
		padding: 100rpx 20rpx 50rpx;
		background-color: #000;
		height: 800rpx;

		// flex-flow: column;
		.footer_logo {
			// padding-top: 100rpx;
			flex-flow: column;

			image {
				width: 320rpx;
			}

			view {
				display: block;
				width: 320rpx;
				height: 320rpx;
				background-color: #eee;
			}
		}
	}
</style>
