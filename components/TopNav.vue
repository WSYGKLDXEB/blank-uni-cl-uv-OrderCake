<template>
	<view class="topnav">
		<!-- 顶部导航 -->
		<view class="cu-bar bg-white" @click="goHome">
			<view class="action">
				<view class="" v-if="isShowReturn">
					<text class="cuIcon-locationfill text-gray margin-right-sm"></text> 江西
				</view>
				<view v-if='!isShowReturn' class="cuIcon-back text-gray fs-40" @click.stop="returns"></view>
			</view>
			<!-- #ifdef APP-PLUS-->
			<view class="app_img">
				<image src="/static/logo.png" mode=""></image>
			</view>
			<!-- #endif -->
			
			<!-- #ifndef APP-PLUS-->
			<view class="content text-bold">
				<image src="/static/logo.png" mode="heightFix"></image>
			</view>
			<!-- #endif -->
			<view class="action text-grey">
				<text v-if="isCart" class="cuIcon-search fs-40" @click.stop="goSearch"></text>
				<text v-if="!isCart" class="cuIcon-cart fs-40" @click.stop="goCart"></text>
				<u-line direction="col" length='15' color='' margin='0 20rpx'></u-line>
				<text class="cuIcon-sort fs-50" @click.stop="setLeftPopup"></text>
				<!-- <u-icon name="list" size="28" color='#8799a3'></u-icon> -->

			</view>
			<!-- <Jump :isPopup='isPopup'></Jump> -->
			<u-overlay :show="isPopup" @click.stop="isPopup = false">
				<view class="bg-ff padding-top"
					style="position: fixed;width: 80%;top: 50%;left: 50%;transform: translate(-50%,-50%);border-radius: 16rpx;overflow: hidden;">
					<view class="text-center fw-6 fs-32">温馨提示</view>
					<view class="text-center padding-tb-sm">你需要先登录才能继续您的操作</view>
					<view class="flex">
						<button class='fs-28'
							style="background: #888888;border:none;color: #fff;border-radius: 0;width: 50%;"
							@click.stop="isPopup = false">以后再说</button>
						<button class='fs-28'
							style="background: #ffde4f;border:none;color: #111;border-radius: 0;width: 50%;"
							@click.stop="goLogin">立即登录</button>
					</view>
				</view>
			</u-overlay>
		</view>


	</view>

</template>

<script>
	import {
		mapMutations,
		mapState
	} from 'vuex'
	export default {
		name: "nav",
		props: {
			isShowReturn: {
				type: Boolean,
				default: true
			},
			isCart: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				// isShowReturn: false
				isPopup: false
			};
		},
		computed: {
			...mapState({
				userInfo: state => state.userInfo
			})
		},
		methods: {
			...mapMutations(['setLeftPopup']),
			goHome() {
				console.log(555);
				uni.navigateTo({
					url: '/pages/home/home',
					success() {
						console.log('去主页咯！！！');
					}
				})
			},
			goSearch() {
				uni.navigateTo({
					url: '/pages/search/search',
				})
			},
			goCart() {
				console.log(this.userInfo);
				if (this.userInfo) {
					uni.navigateTo({
						url: '/pages/cart/cart',
					})
				} else {
					this.isPopup = true
				}

			},
			goLogin() {
				uni.navigateTo({
					url: '/pages/user/login'
				})
			},
			returns() {
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style lang="scss">
	/* #ifdef APP-PLUS */
	.topnav {
		width: 750rpx;
		// margin-top: 20rpx;
		padding-top: 20rpx;
	}
	.app_img{
		// display: none;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		image {
			width: 192rpx !important;
			height: 30rpx !important;
		}
	}
	/* #endif */
	.topnav {
		z-index: 9999 !important;
	}

	.content.text-bold {
		image {
			width: 192rpx !important;
			height: 30rpx !important;
		}
	}

	.cu-bar.bg-white {
		padding: 34rpx 0 !important;
	}
</style>
