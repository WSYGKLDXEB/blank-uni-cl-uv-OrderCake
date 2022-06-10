<template>
	<view class="cake-list">
		<view @click="goDetail(item)" class="cake-list-item"v-for="item in listData" :key="item.objectId">
			<view class="item-img">
				<image :src="item.img" mode="widthFix"></image>
			</view>
			<view class="item-info flex justify-between align-center">
				<view class="info-left">
					<view class="left-title fs-30 fw-7 u-line-1">{{item.name}}<text></text></view>
					<view class="left-alt fs-26 u-line-1">{{item.french}}</view>
					<view class="left-price fs-26 fw-7"><text>￥</text>{{item.price}}</view>
				</view>
				<view class="info-right margin-right text-center" hover-class="cart-active" hover-stay-time="100">
					<text class="iconfont icon-shiwu-gouwuche"></text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"cake",
		props: ['listData'],
		data() {
			return {
				
			};
		},
		methods: {
			goDetail(item) {
				uni.setStorage({
					key: 'mcakeDetail',
					data: item,
					success() {
						uni.navigateTo({
							url: '/pages/detail/detail?id=' + item.id
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss">
.cake-list{	
	padding: 14rpx 14rpx 0;
	width: 100%;
	display: flex;
	flex-flow: wrap;
	justify-content: space-between;
	box-sizing: border-box;
	background-color: #fff;
	.cake-list-item{
		margin-bottom: 24rpx;
		width: 49%;
		// border: 1px solid pink;
		.item-img{
			height: 350rpx;
			// background-color: #f5f5f5;
			image{
				width: 100%;
			}
		}
		.item-info{
			margin-top: 24rpx;
			.left-title{
				font-family: '宋体';
			}
			.left-alt{
				width: 240rpx;
				margin: 10rpx 0 16rpx;
				// font-family: '宋体';
				font-family: '方正舒体';
			}
		}
		.info-right{
			width: 60rpx;
			height: 60rpx;
			line-height: 60rpx;
			border-radius: 50%;
			background-color: yellow;
			box-shadow: 3rpx 3rpx 10rpx 1rpx rgba(0,0,0,.3);
			// box-shadow: 3rpx 3rpx 10rpx 1rpx rgba(255, 255, 0,.6)
		}
	}
	.cart-active{
		box-shadow: 0 0 10rpx 1rpx rgba(0,0,0,.3);
		transform: translate(3rpx,3rpx);
	}
}
</style>