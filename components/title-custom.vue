<template>
	<view class="titleCustom padding flex justify-between align-center">
		<view class="flex justify-end align-center" style="padding: 20rpx 0;">
			<text class="iconfont icon-canju fs-60 cl-bb"></text><text class="cl-bb margin-left-sm fs-60 rotate" >/</text>
			<view class="margin-left fs-50 fw-5 ">				
				<view class="cl-55">
					<text class="cl-11">{{titleLe}}</text>
					<text >{{titleRi}}</text>
				</view>
				<view class="fs-24 cl-bb fw-4">{{enTitle}}</view>
			</view>
		</view>
		<text class="fs-24 cl-bb">{{riTitle}}<text v-show="showMore" class="margin-left-xs cuIcon-right cl-bb" @click="goClassify"></text></text>
	</view>
</template>

<script>
	export default {
		name: "title-custom",
		props: {
			titleLe: String,
			titleRi: String,
			enTitle: String,
			riTitle: String,
			moreURL: String,
			showMore: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {

			};
		},
		methods: {
			goClassify() {
				uni.navigateTo({
					url: '/pages/classify/classify'
				})
			}
		}
	}
</script>

<style lang="scss">
	.titleCustom {
		background-color: #fff;
	}
	.fs-50.fw-5{
		font-family: '方正舒体';
	}
	.fs-60.cl-bb{
		// padding-left: 0;
	}
	.rotate{
		transform: rotate(30deg);
	}
	.cuIcon-right.cl-bb{
		
	}
</style>
