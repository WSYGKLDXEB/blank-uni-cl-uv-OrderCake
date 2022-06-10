<template>
	<view class="user">
		<TopNav></TopNav>
		<view class="mask"></view>
		<view class="user_info">
			<view class="info_portrait" @click="handleUser">
				<image src="/static/maomi.gif" mode=""></image>
			</view>
			<view class="info_name fs-30">{{username}}</view>
			<view class="info_set">
				<text class="iconfont icon-jiantou_zuoyouqiehuan"></text><text>切换账号</text>
			</view>
		</view>
		<view class="flex_box">
			<view class="box_item" v-for="(item, i) in flexBoxArr" :key="i">
				<view :class="['iconfont','fs-60','cl-aa', item.icon]"></view>
				<view class="fs-28">{{item.name}}</view>
			</view>
		</view>
		<!-- <u-button type="primary" text="确定"></u-button> -->
		<!-- <u-tag text="标签" type="error" plain plainFill></u-tag> -->
		<!-- tab导航 -->
		<Tabbar></Tabbar>
	</view>
</template>

<script>
	import { mapMutations } from 'vuex'
	export default {
		data() {
			return {
				// username: '青稞',
				flexBoxArr: [					
					{
						icon: 'icon-dingdan',
						name: '订单'
					},
					{
						icon: 'icon-dingdan-daifukuan',
						name: '待付款'
					},
					{
						icon: 'icon-xiazai',
						name: '待收货'
					},
					{
						icon: 'icon-huiyuan',
						name: '会员等级'
					},
					{
						icon: 'icon-jifen',
						name: '积分'
					},
					{
						icon: 'icon-balance',
						name: '余额'
					},
					{
						icon: 'icon-hongbao',
						name: '红包/优惠卷'
					},
					{
						icon: 'icon-yinhangqia',
						name: '现金卡'
					}					
				],
				
				
			}
		},
		onLoad() {
			this.setNavACtive(3)			
		},
		computed: {
			username() {
				const userInfo = this.$store.state.userInfo							
				console.log(this.$store.state.userInfo);
				if(userInfo) {
					return userInfo.username
				} else {
					return '青稞'
				}
				
			},
		},
		methods: {
			...mapMutations(['setNavACtive']),
			handleUser() {
				uni.navigateTo({
					url: 'login'
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #fff;
	}
.user{
	// height: 100%;
	// background-color: #f6f6f6;
	// 背景配色
	.mask{
		height: 500rpx;
		background-color: #f8f8f8;
	}
	// 用户信息
	.user_info{		
		// margin-top: -100rpx;
		margin-top: -380rpx;
		// background: #fff;
		text-align: center;
		.info_portrait{
			// padding: 4rpx;
			// width: 200rpx;
			// height: 200rpx;
			// border: 1rpx solid pink;
			image{
				width: 200rpx;
				height: 200rpx;
				border-radius: 50%;
				box-shadow: 5rpx 5rpx 50rpx 2rpx rgba(0,0,0, .15);
			}
		}
		.info_name{
			
		}
	}
	
	
	// 功能盒子
	.flex_box{
		padding-top: 200rpx;
		margin: -180rpx 20rpx;
		display: flex;
		flex-flow: wrap;
		background-color: #fff;
		.box_item{
			box-sizing: border-box;
			padding: 10rpx;
			width: 25%;
			display: flex;
			flex-flow: column nowrap; 
			align-items: center;
			border-right:1rpx solid #ddd ;
			&:nth-of-type(n){
				border-bottom: 1rpx solid #efefef;
			}
			&:nth-of-type(n+5){
				border-bottom: 1rpx solid #ddd;
			}
			&:nth-of-type(4) {
				border-right: none;
			}
			&:last-of-type{
				border-right: none;
			}
		}
	}
}
</style>
