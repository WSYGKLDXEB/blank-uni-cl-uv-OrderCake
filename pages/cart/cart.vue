<template>
	<view>
		<TopNav></TopNav>
		<!-- tab导航 -->
		<CartList :isCheck="true"></CartList>
		<u-overlay :show="isPopup" @click="isPopup = false">
			<view class="bg-ff padding-top" style="position: fixed;width: 80%;top: 50%;left: 50%;transform: translate(-50%,-50%);border-radius: 16rpx;overflow: hidden;">
				<view class="text-center fw-6 fs-32">温馨提示</view>
				<view class="text-center padding-tb-sm">你需要先登录才能继续您的操作</view>
				<view class="flex">
					<button class='fs-28' style="background: #888888;border:none;color: #fff;border-radius: 0;width: 50%;" @click="navBack">以后再说</button>
					<button class='fs-28' style="background: #ffde4f;border:none;color: #111;border-radius: 0;width: 50%;" @click="goLogin">立即登录</button>
				</view>
			</view>
		</u-overlay>
		<Tabbar></Tabbar>
	</view>
</template>

<script>
	import { mapMutations,mapState } from 'vuex'
	import CartList from '@/components/cart-list.vue'
	export default {
		data() {
			return {
				isPopup:false
			};
		},
		onLoad() {
			this.setNavACtive(2)
			if (!this.userInfo) {						
				this.isPopup = true
			}
		},
		computed: {
			...mapState({
				userInfo: state => state.userInfo
			})
		},
		methods: {
			...mapMutations(['setNavACtive']),
			goLogin() {
				uni.navigateTo({
					url: '/pages/user/login'
				})
			},
			navBack() {
				this.isPopup = false
				uni.navigateBack({
					delta: 1
				})
			}
		},
		components: {
			CartList
		}
	}
</script>

<style lang="scss">
page{
	background-color: #fff;
}
</style>
