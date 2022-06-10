<template>
	<view class="">
		<TopNav :isShowReturn='false' :isCart='false'></TopNav>
		<view class="content">
			<view class="logo">
				<image src="/static/logo.png" mode="heightFix"></image>
			</view>
			<view v-if="!changeSuccess">
				<view class="uni-form-item uni-column">
					<input v-model="user.username" type="tel" class="uni-input" name="" placeholder="请输入用户名" />
				</view>							
				<view class="uni-form-item uni-column">
					<input v-model="user.password" type="password" class="uni-input" name="" placeholder="请输入新密码" />
				</view>
				<view class="uni-form-item uni-column column-with-btn">
					<input type="text" class="uni-input" name="" placeholder="请输入图片验证码" v-model="captchaImg" />
					<image src="/static/img/captcha.jpg" mode="" class="img-captcha"></image>
				</view>	
				<button type="primary" @tap="edit">提交</button>
			</view>
			<view v-if="changeSuccess">
				<view class="text-reset">重置成功，新密码已生效！</view>
				<button type="primary" @tap="gotoLogin">立即登陆</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user: {
					username: '',
					password: ''
				},
				captchaImg: '',		
				changeSuccess: false
			}
		},
		onLoad() {

		},
		methods: {
			edit() {
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
					this.changeSuccess = !this.changeSuccess
				}
			},
			gotoLogin: function() {
				uni.navigateTo({
					url: 'login'
				})
			}
		},
		computed: {
			disableCodeBtn: function() {
				return this.codeBtn.waitingCode || this.captchaImg.length < 4;
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
		margin-top: 60rpx;
		padding: 100rpx;
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

	.text-reset {
		text-align: center;
		margin-bottom: 100rpx;
		font-size: 36rpx;
	}
</style>
