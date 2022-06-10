<template>
	<view>
		<TopNav :isShowReturn='false' :isCart='false'></TopNav>
		<view class="flex justify-between padding-sm align-center u-border-top">
			<view class="" style="width: 90%;" @click="goAddress">
				<view class="fw-6 fs-34">{{address.name}} {{address.tel}}</view>
				<view class="u-line-1 margin-top-sm">{{address.detail}}</view>
			</view>
			<text class="cuIcon-right"></text>
		</view>
		<view class="margin-tb-xs ">
			<view class="fs-32 fw-6 margin-left-sm"><text class="cuIcon-time margin-right-xs fw-4"></text>配送时间<text
					class="cuIcon-info margin-left-xs cl-66 fw-4"></text></view>
			<view class="flex margin-tb-xs padding-lr-sm justify-between">
				<view class="" style="width: 49%;border-right: 1px solid #efefef;border-bottom: 1px solid #eee;">
					<view class="padding-tb" @click="isCalendar = true">
						<text class="iconfont padding icon-dingdan fs-28 cl-dd bg-gray  bg-aa margin-right-xs"
							style=""></text>
						{{date ? date:'请选择配送日期'}}
						<text class="cuIcon-unfold margin-left-xs"></text>
					</view>
					<u-calendar :show="isCalendar" mode='single' closeOnClickOverlay @close='isCalendar = false' @confirm='confirm'></u-calendar>
				</view>
				<view class="" style="width: 49%;border-right: 1px solid #efefef;border-bottom: 1px solid #eee;">
					<view class="padding-tb" @click="isCalendar = true">
						<text class="cuIcon-time fs-28 text-white bg-gray padding bg-yl margin-right-xs"
							style=""></text>
						{{date ? date:'请选择配送日期'}}
						<text class="cuIcon-unfold margin-left-xs"></text>
					</view>
					<u-calendar :show="isCalendar" mode='single' closeOnClickOverlay @close='isCalendar = false' @confirm='confirm'></u-calendar>
				</view>
			</view>
		</view>
		<CartList></CartList>
		<view class="flex justify-between align-center padding-left"
			style="position: fixed;bottom: 0;left: 0;width: 750rpx;background-color: #fff;">
			<view class="text-red fs-40 fw-7"><text class="fs-14">￥</text>{{totalPrice}}</view>
			<view class="">
				<button style="background: #ffde4f;border:none;color: #fff;border-radius: 0;"
					@click="submit">提交订单</button>
			</view>
		</view>
	</view>
</template>

<script>
	import CartList from '@/components/cart-list.vue'
	import {
		mapGetters,
		mapMutations,
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				isCalendar: false,
				date: 0
			};
		},
		computed: {
			...mapGetters(['totalPrice']),
			...mapState(['address'])
		},
		methods: {
			...mapMutations(['closeGoodsCart']),
			submit() {
				uni.showToast({
					title: '提交成功！',
					icon: 'none'
				})
				this.closeGoodsCart()
				setTimeout(() => {
					uni.navigateTo({
						url: '/pages/cart/cart'
					})
				}, 200)
			},
			goAddress() {
				uni.navigateTo({
					url:'/pages/address/address'
				})
			},
			confirm(e) {
				console.log(e);
				this.date = e[0]
				this.isCalendar = false
			}
		},
		components: {
			CartList
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #fff;
	}
</style>
