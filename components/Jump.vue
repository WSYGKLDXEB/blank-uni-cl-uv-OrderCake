<template>
	<view>
		<u-overlay :show="isPopup" @click="isPopup = false">
			<view class="bg-ff padding-top" style="position: fixed;width: 80%;top: 50%;left: 50%;transform: translate(-50%,-50%);border-radius: 16rpx;overflow: hidden;">
				<view class="text-center fw-6 fs-32">温馨提示</view>
				<view class="text-center padding-tb-sm">你需要先登录才能继续您的操作</view>
				<view class="flex">
					<button class='fs-28' style="background: #888888;border:none;color: #fff;border-radius: 0;width: 50%;" @click="isPopup = false">以后再说</button>
					<button class='fs-28' style="background: #ffde4f;border:none;color: #111;border-radius: 0;width: 50%;" @click="goLogin">立即登录</button>
				</view>
			</view>
		</u-overlay>
	</view>
</template>

<script>
	export default {
		name:"Jump",
		props: {
			isPopup: {
				type:Boolean,
				default: false
			}
		},
		data() {
			return {
				
			};
		},
		methods: {
			goLogin() {
				uni.navigateTo({
					url: '/pages/user/login'
				})
			},
		}
	}
</script>

<style lang="scss">

</style>