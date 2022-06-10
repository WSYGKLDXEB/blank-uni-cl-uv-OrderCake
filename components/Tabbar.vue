<template>
	<view class="tabbar flex justify-between align-center text-gray">
		<view :class="['text-center',i === navActive? 'cl-11':'']"
		 v-for="(item, i) in tabArr" :key="i" @click="switchTab(i, item.path)">
			{{item.name}}
		</view>		
		<text class="tab-active" :style="{
			left: 187.5 * navActive + 'rpx'
			}"></text>
	</view>
</template>

<script>
	import { mapState, mapMutations } from  'vuex'
	export default {
		name:"Tabbar",
		data() {
			return {
				tabArr: [
					{
						name: '首页',
						path: '/pages/home/home',
						bcid: ''
					},
					{
						name: '分类',
						path: '/pages/classify/classify',
						bcid: ''
					},
					{
						name: '购物车',
						path: '/pages/cart/cart',
						bcid: ''
					},
					{
						name: '我的',
						path: '/pages/user/user',
						bcid: ''
					}
				]
				// tabId: 0
			};
		},
		computed: {
			...mapState(['navActive'])
		},
		methods: {
			...mapMutations(['setNavACtive']),
			switchTab(id, path) {
				// this.tabId = id
				this.setNavACtive(id)
				console.log(id);
				uni.navigateTo({
					url: path
				})				
			}
		}
	}
</script>

<style lang="scss">
.tabbar{
	// padding: 0 60rpx;
	position: fixed;
	left: 0;
	bottom: 0;
	width: 750rpx;
	height: 100rpx;
	// border-top: 4rpx solid #bbb;
	box-shadow: 0 -1px 2px 0 rgba(0, 0, 0,.1 );
	// border: 1rpx solid pink;
	background-color: rgba(255,255,255,.98);
	view{
		width: 187.5rpx;
		border-right: 4rpx solid #ddd;
		transition: all .3s; 
	}
	view:nth-of-type(4){
		border-right: none;
	}
}
.tab-active{
	position: absolute;
	bottom: 0;
	// left: 0;
	width: 187.5rpx;
	height: 4rpx;
	background-color: #f9ae3d;
	transition: all .3s;
}
</style>