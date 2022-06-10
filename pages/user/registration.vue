<template>
	<view class="">
		<TopNav :isShowReturn='false' :isCart='false'></TopNav>
		<view class="content">
			<view class="logo">
				<image src="/static/logo.png" mode="heightFix"></image>
			</view>
			<view class="uni-form-item uni-column">
				<input type="tel" v-model="user.username" class="uni-input" name="" placeholder="请输入用户名" />
			</view>
			<view class="uni-form-item uni-column">
				<input type="password" v-model="user.password" class="uni-input" name="" placeholder="请输入密码" />
			</view>
			<view class="uni-form-item uni-column column-with-btn">
				<input type="text" class="uni-input" name="" placeholder="请输入图片验证码" v-model="captchaImg" />
				<image src="/static/img/captcha.jpg" mode="" class="img-captcha"></image>
			</view>
			<button type="primary" @click="register">注册</button>
			<view class="links">已有账号？<view class="link-highlight" @tap="gotoLogin">点此登陆</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { PostRegister } from '@/util/api/api.js'
	export default {
		data() {
			return {
				user: {
					username: '',
					password: ''
				},
				captchaImg: ''
			}
		},
		onLoad() {

		},
		methods: {		
			async register() {
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
				} else if(!this.captchaImg){
					uni.showToast({
						title:'请输入验证码！',
						icon:"error"
					})
				} else if(this.captchaImg.toLowerCase() !== 'yfx5') {
					uni.showToast({
						title:'验证码错误！',
						icon:"error"
					})
				} else {
					console.log('登陆');
					const { data: res } = await PostRegister(this.user)
					console.log(res);
					if (res.code === 202) {
						return uni.showToast({
							title:'用户已存在！',
							icon:'error'
						})
					}
					uni.navigateBack({
						delta: 1
					})
				}
			},
			gotoLogin: function() {
				uni.navigateTo({
					url: 'login'
				})
			}
		},
		computed: {
			
		}
	}
</script>

<style lang="scss" scoped>
	$color-primary: #b49950;
page{
	background-color: #fff;
}
	.content {
		padding: 60rpx 100rpx 100rpx;
	}

	.logo {
		text-align: center;
		margin-top: 140rpx;
		margin-bottom: 40rpx;
		image {
			height: 60rpx;
			// width: 200rpx;
			margin: 0 0 40rpx;
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
			line-height: 50rpx;
		}
	}

	.column-with-btn {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		button {
			font-size: 24rpx;
			margin: 0;
			width: 180rpx;
			text-align: center;

			&:after {
				border: none
			}

			&.active {
				background-color: $color-primary;
				color: $uni-text-color-inverse;
			}
		}
	}

	.img-captcha {
		width: 150rpx;
		height: 60rpx;
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
