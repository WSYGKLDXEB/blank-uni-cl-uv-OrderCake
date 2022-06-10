<template>
	<view>
		<TopNav :isShowReturn='false' :isCart='false'></TopNav>
		<view class="content">
			<view class="logo">
				<image src="/static/logo.png" mode="heightFix"></image>
			</view>
			<view class="uni-form-item uni-column">
				<input v-model="user.username" type="tel" class="uni-input" name="" placeholder="请输入用户" />
			</view>
			<view class="uni-form-item uni-column">
				<input v-model="user.password" type="password" class="uni-input" name="" placeholder="请输入密码" />
			</view>
			<button type="primary" @click="sign">登陆</button>
			<view class="links">
				<view @tap="gotoForgetPassword">忘记密码？</view>
				<view>|</view>
				<view class="link-highlight" @tap="gotoRegistration">注册账号</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { PostSgin } from '@/util/api/api.js'
	import { mapActions } from 'vuex'
	export default {
		data() {
			return {
				user: {
					username:'',
					password:''
				}
			}
		},
		onLoad() {

		},
		methods: {
			...mapActions(['userLogin']),
			async sign() {
				if (!this.user.username) {
					uni.showToast({
						title:'请输入用户名！',
						icon:"error"
					})
				} else if(!this.user.password){
					uni.showToast({
						title:'请输入密码！',
						icon:"error"
					})
				} else {
						this.userLogin(this.user)
						// uni.navigateTo({
						// 	url: 'user'
						// })
					}				
			},
			gotoRegistration: function() {
				uni.navigateTo({
					url: 'registration'
				});
			},
			gotoForgetPassword: function() {
				uni.navigateTo({
					url: 'forget-password'
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	$color-primary: #b49950;
	page{
		background-color: #fff;
	}
	.content {
		padding: 100rpx;
	}

	.logo {
		margin-top: 200rpx;
		margin-bottom: 40rpx;
		text-align: center;

		image {
			height: 60rpx;
			// width: 200rpx;
			margin: 0 0 60rpx;
		}
	}

	.uni-form-item {
		margin-bottom: 40rpx;
		padding: 0;
		border-bottom: 1px solid #e3e3e3;

		.uni-input {
			font-size: 30rpx;
			padding: 5px 0;
			height: 50rpx;
		}
	}

	button[type="primary"] {
		background-color: $color-primary;
		border-radius: 0;
		font-size: 34rpx;
		margin-top: 60rpx;
	}

	.links {
		text-align: center;
		margin-top: 40rpx;
		font-size: 26rpx;
		color: #999;

		view {
			display: inline-block;
			vertical-align: top;
			margin: 0 10rpx;
		}

		.link-highlight {
			color: $color-primary
		}
	}
</style>
