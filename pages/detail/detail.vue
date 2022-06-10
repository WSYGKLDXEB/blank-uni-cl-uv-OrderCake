<template>
	<view class="detail">
		<TopNav :isShowReturn='false' :isCart='false'></TopNav>
		<!-- 轮播 -->
		<swiper class="banner" indicator-active-color='#ffe32a' :indicator-dots="true" :autoplay="true">
			<swiper-item class="swiper-item" v-for="i in 2" :key="i">
				<!-- <view class="swiper-item" @click="goBannerDetail(item.id)"> -->
				<image :src="mcakeDetail.img" mode="widthFix"></image>
				<!-- </view> -->
			</swiper-item>
			<swiper-item>
				<!-- <view class="swiper-item" @click="goBannerDetail(item.id)"> -->
				<image src="/static/img/4.jpg" mode="widthFix"></image>
				<!-- </view> -->
			</swiper-item>
		</swiper>
		<view class="padding-lr-sm" style="margin-bottom: 120rpx;">
			<!-- 名字 -->
			<view class="detail_name text-center padding-sm">
				<view class="fs-50 padding-sm">{{mcakeDetail.name}}</view>
				<view class="fs-34">{{mcakeDetail.french}}</view>
			</view>
			<!-- 分量 -->
			<view class="detail_weight flex u-border-bottom align-center justify-between">
				<view
					:class="['flex columns align-center justify-between padding-xs', weightActive === i ? 'cl-11 bg-yl':'text-gray']"
					v-for="(item, i) in mcakeDetail.list" :key="i" @click="switchWeight(i)">
					<view class='fs-34'>{{item.spec}}</view>
					<view class='fs-34'>（{{item.weight}}）</view>
					<view class=''>{{item.edible}}</view>
				</view>
			</view>
			<!-- 价格 -->
			<view class="detail_price u-border-bottom padding-tb-sm fs-40 flex align-center"><text
					class="fs-24">￥</text>{{mcakeDetail.list[weightActive].price}}</view>
			<!-- 规格 -->
			<view class="detail_Specifications u-border-bottom padding-tb-sm text-gray">
				<view class="flex">
					<view class="text-red margin-right-sm"><text
							class="cuIcon-time margin-right-xs"></text>最早2022年06月04日配送</view>
					<view class="	"><text
							class="cuIcon-time margin-right-xs"></text>{{mcakeDetail.list[weightActive].ahead}}</view>
				</view>
				<view class="flex margin-top-sm">
					<view class="margin-right-sm"><text
							class="cuIcon-tag margin-right-xs"></text>约{{mcakeDetail.list[weightActive].size}}</view>
					<view class="	"><text
							class="iconfont icon-canju margin-right-xs"></text>含5套餐具
					</view>
				</view>
			</view>
			<!-- 标签 -->
			<view class="detail_tag flex u-border-bottom padding-tb-sm align-center">
				<text class="cuIcon-tag margin-right-xs text-gray"></text>
				<view class="margin-right-sm border borderr-16 padding-tb-mi padding-lr-sm ">拿破仑</view>
				<view class="	border borderr-16 padding-lr-sm padding-tb-mi padding-lr-sm">巧克力</view>
			</view>
			<!-- 警告 -->
			<view class="detail_error flex u-border-bottom padding-tb-sm align-center text-red">
				<text class="cuIcon-info margin-right-xs fs-40"></text>
				<view class="margin-right-sm">蛋糕若不及时食用，请放置0-10℃冷藏</view>
			</view>
			<!-- 介绍 -->
			<view class="detail_introduce u-border-bottom padding-tb-sm">
				<view class="zn">{{mcakeDetail.chineseBrief}}</view>
				<view class="en text-gray">La rencontre des fameuses pâtisseries : la forêt noir et les mille-feuilles,
					est un choque au niveaux goût en tant que texture, l'amertume douce de chocolat avec la croquante
					feuilletage, crémeux et fruité, parfumé au kirsch, une pure sensation de voyage à l'esprit au de là
					du pays du nord.</view>
				<view class="Promotion padding-top-sm flex align-center justify-between fs-28 text-gray">
					<text class="margin-right-xl">促销</text>
					<text class="text-red margin-right-xs">换购</text>
					买蛋糕可至购物车参加优惠换购
					<text class="">详情<text class="cuIcon-right"></text></text>
				</view>
			</view>
			<!-- 信息 -->
			<view class="detail_info ">
				<view class="info_nav fs-40 flex justify-between align-center u-border-bottom padding-lr">
					<text v-for="(item, i) in infoArr" :key="i" @click="switchInfo(i)"
						:class="['padding-tb padding-lr-xs', infoActive===i ? 'border-bottom':'']">{{item}}</text>
				</view>
				<view class="info_body">
					<view v-show='infoActive===0' class="padding-tb-sm u-border-bottom">
						<view class="flex justify-between align-center padding-bottom-xs text-gray">
							<text>Sweetness 甜味</text>
							<view class=""><text class="cuIcon-selection"></text><text class="cuIcon-selection"></text>
							</view>
						</view>
						<view class="flex justify-between align-center padding-bottom-xs">
							<text class="text-gray">Base 口味基底</text>
							<text class="">Whipping Cream</text>
						</view>
						<view class="flex justify-between align-center padding-bottom-xs">
							<text class="text-gray">Texture 口感</text>
							<text class="">酥脆浓郁</text>
						</view>
						<view class="flex justify-between align-center padding-bottom-xs">
							<text class="text-gray">Flavor 口味</text>
							<text class="">水果/巧克力</text>
						</view>

						<view class="flex row">
							<view class="margin-right-sm padding-bottom-xs" v-for="(item, i) in countryArr" :key="i">
								<image :src="item.icon" mode="widthFix" class="margin-right-xs" style="width: 40rpx;">
								</image>
								<text>{{item.title}}</text>
							</view>
						</view>
					</view>
					<view v-show='infoActive===1' class="margin-top">
						<view class="bg-f9 margin-bottom-xs padding-top-xs padding-lr padding-bottom-sm  text-gray"
							v-for="i in 5" :key="i">
							<view class="com_header flex" style="width: 720rpx;">
								<image src="/static/img/user.gif" mode="widthFix"
									style="width: 50rpx;border-radius: 50%;"></image>
								<text class="com_vip">v4</text>
								<view class="flex justify-between margin-left-sm" style="width: 580rpx;">
									<text>会员：165****2896</text>
									<text>2021-12-24 11:10:38</text>
								</view>
							</view>
							<view class="margin-top-xl">5磅很足分量</view>
						</view>
					</view>
					<view v-show='infoActive===2' class="">
						<image src="/static/img/wap.jpg" mode="widthFix" style="width: 750rpx;"></image>
					</view>
				</view>
			</view>

		</view>
		<view class="bot_but flex justify-between padding-lr-sm">
			<button style='color: #fff;width: 340rpx;background-color: #857a72;'>立即购买</button>
			<button style='color: #000;width: 340rpx;background-color: #ffe32a;' @click="addGoods">加入购物车</button>
		</view>
	</view>
</template>

<script>
	import {
		GetGoodsDetail
	} from '@/util/api/api.js'
	import {
		mapMutations
	} from 'vuex'
	export default {
		data() {
			return {
				mcakeDetail: {},
				weightArr: [{
						weight: '1',
						weights: '454g',
						Number: '2-3'
					},
					{
						weight: '2',
						weights: '908g',
						Number: '4-7'
					},
					{
						weight: '3',
						weights: '1.36kg',
						Number: '8-12'
					},

					{
						weight: '5',
						weights: '2.27kg',
						Number: '12-20'
					},
				],
				infoArr: [
					'基本信息',
					'商品点评',
					'商品详情'
				],
				countryArr: [{
						icon: '/static/img/huaguo.jpg',
						title: '法国奶油'
					},
					{
						icon: '/static/img/xinxilan.jpg',
						title: '新西兰黄油'
					},
					{
						icon: '/static/img/huaguo.jpg',
						title: '法国果茸'
					},
					{
						icon: '/static/img/helan.jpg',
						title: '荷兰樱桃力娇酒'
					},
					{
						icon: '/static/img/hanguo.jpg',
						title: '韩国幼砂糖'
					},
					{
						icon: '/static/img/xinjiabo.jpg',
						title: '新加坡黑巧克力'
					},
					{
						icon: '/static/img/malaixiya.jpg',
						title: '马来西亚可可粉'
					}
				],
				weightActive: 0,
				infoActive: 0,
			};
		},
		async onLoad(params) {
			// console.log(params);
			const where = JSON.stringify({
				id: params.id
			})
			const {
				data: res
			} = await GetGoodsDetail(where)
			console.log(res);
			uni.getStorage({
				key: 'mcakeDetail',
				success: (res) => {
					// console.log(res);
					this.mcakeDetail = res.data
					console.log(this.mcakeDetail);
				}
			})
		},
		methods: {
			...mapMutations(['addGoodsCart']),
			switchWeight(id) {
				this.weightActive = id
			},
			switchInfo(id) {
				this.infoActive = id
			},
			addGoods() {
				const obj = {
					id: Number(this.mcakeDetail.id),
					twoId: this.mcakeDetail.twoId,
					name: this.mcakeDetail.name,
					french: this.mcakeDetail.french,
					price: this.mcakeDetail.price,
					num: 1,
					isCheck: false,
					img: '/static/img/2.jpg'
				}
				this.addGoodsCart(obj)
				
				setTimeout(() => {
					uni.showToast({
						title: '添加成功！',
						icon: "none"
					}, 200)
				})
				uni.navigateTo({
					url:'../cart/cart'
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #fff;
		// margin-bottom: 120rpx;
	}

	.detail {
		// margin-bottom: 180rpx;
	}

	// 轮播
	.banner {
		width: 750rpx;
		height: 750rpx;

		// height: auto;
		.swiper-item {
			width: 100%;
			height: 100%;
		}

		image {
			// padding: 1px;
			width: 750rpx;
			height: 750rpx;
		}
	}

	// 分量
	.detail_weight {

		// width: 750rpx;
		view {
			transition: all .1;
		}
	}

	// 评论
	.com_header {
		position: relative;
	
	.com_vip {
			position: absolute;
			top: 24rpx;
			left: 30rpx;
			padding: 8rpx;
			color: #aaa;
			background-color: #ffe32a;
			border-radius: 50%;
		}
	}

	.bot_but {
		position: fixed;
		bottom: 0;
		padding-top: 15rpx;
		padding-bottom: 15rpx;
		background-color: #fff;

		button:nth-of-type(1) {
			margin-right: 30rpx;
		}
	}
</style>
