<template>
	<view class='cart padding-tb-xs padding-left'>
		<view class="cart-item margin-bottom-xl" v-for="(item, i) in goodsList" :key="item.id">
			<view class=" margin-bottom-xs flex justify-between margin-right-xs" v-if="isSwap">
				<view class=""><text class="bg-red padding-lr-xs borderr-16 margin-right-xs">换购</text>已满足条件，可换购优惠商品
				</view>
				<view class="text-red">去换购<text class="cuIcon-right text-gray"></text></view>
			</view>
			<view class="item-header flex justify-start">
				<view class="header-left flex align-center margin-right">
					<text v-if="isCheck"
						:class="['iconfont icon-tucenggouxuan text-gray margin-right-xs', item.isCheck ? 'cl-yellow':'']"
						@click="checkGoods(i)"></text>
					<image :src='item.img' mode="widthFix" style='width:200rpx'></image>
				</view>
				<view class="header-right flex justify-between  " style="width: 58%;">
					<view class="margin-right-xl fs-24">
						<view class="fw-6">{{item.name}}</view>
						<view class="text-gray margin-tb-sm">{{item.french}}</view>
						<view class="fw-6">￥{{item.price}}</view>
					</view>
					<view class="flex align-center justify-center" style="flex-flow: column;">
						<view v-if="isCheck" class="iconfont icon-bianji bg-gray padding-sm cl-00" style="border-radius: 50%;"
							@click="showPopupDateil(item.id, i)"></view>
						<view class="fs-30 cl-00">{{weight}} × {{item.num}}</view>
					</view>
				</view>
			</view>
			<view class="item-body" v-if="isInfo">
				<view class=""><text
						class="borderr-16 bg-gray padding-lr margin-bottom-xs margin-right-xs">标配</text>5份标配餐具（免费）
				</view>
				<view class=""><text class="borderr-16 bg-gray padding-lr text-red margin-right-xs">促销</text>不使用活动优惠
				</view>
			</view>
		</view>
		<!-- 弹出层 -->
		<!-- <u-modal :show="isPopup" showCancelButton closeOnClickOverlay @cancel='isPopup = false' @close='isPopup = false'>
			
		</u-modal> -->
		<u-overlay :show="isPopup" @click="isPopup = false">
			<view class="bg-ff"
				style="width: 680rpx;position: fixed;top: 50%;left: 50%;transform: translate(-50%,-50%);" @click.stop>
				<text class="cuIcon-close text-gray" @click.stop="isPopup = false"
					style="position: absolute;top: 30rpx; right: 30rpx;"></text>
				<view class="padding">
					<view class="flex u-border-bottom padding-bottom-sm">
						<image :src="popupDateil.img" mode="widthFix" style="width: 200rpx;"></image>
						<view class="margin-left-xl">
							<view class="">{{popupDateil.name}}</view>
							<view class="margin-tb-xs text-gray">{{popupDateil.french}}</view>
							<!-- <view class="">￥{{popupDateil.list[popupActive].price}}</view> -->
						</view>
					</view>
					<view class="u-border-bottom margin-top-sm padding-bottom-sm flex justify-between"
						style="position: relative;">
						<view class="">规格</view>
						<view class="" @click.stop="isPicker = !isPicker">
							<text class="text-gray">{{popupDateil.list[popupActive].spec}}({{popupDateil.list[popupActive].weight}})-{{popupDateil.list[popupActive].edible ? popupDateil.list[popupActive].edible: '1人食'}}</text>
							<text :class="['text-gray margin-left',isPicker ? 'cuIcon-fold':'cuIcon-unfold']"></text>
						</view>
						<view v-show="isPicker" class="flex justify-center align-center"
							style="position: absolute;top: 60rpx;right: 0;width: 60%;background-color: #fff;flex-flow: column;border: 1rpx solid #444;z-index: 999;">
							<view class="fs-30 text-gray" @click="popupActive = i;isPicker = false;weight = item.spec +  item.weight"
								v-for="(item,i) in popupDateil.list" style="line-height: 70rpx;">{{item.spec}}
								({{item.weight}}) -
								{{item.edible ? item.edible: '1人食'}}
							</view>
						</view>
					</view>
					<view class="flex justify-between padding-tb-sm">
						<view class="">数量</view>
						<view class="">
							<u-number-box v-model="value" iconStyle='color: #111;' bgColor='#ffde4f' @change="valChange"></u-number-box>
						</view>
					</view>
				</view>
				<view class="flex">
					<button style="background: #888888;border:none;color: #fff;border-radius: 0;width: 50%;" @click="isPopup = false">取消</button>
					<button style="background: #ffde4f;border:none;color: #111;border-radius: 0;width: 50%;" @click="setCartGoodsNum({index,value});isPopup = false">确定</button>
				</view>
			</view>
		</u-overlay>
		<view v-if="isCheck" class="flex justify-between align-center padding-left"
			style="position: fixed;bottom: 100rpx;left: 0;width: 750rpx;background-color: #fff;">
			<view class="" @click="allCheck">
				<text
					:class="['iconfont icon-tucenggouxuan text-gray margin-right-xs', isAllCheck ? 'cl-yellow':'']"></text>
				<text>全选</text>
				<text class="margin-left">共计：{{totalPrice}}</text>
			</view>
			<view class="">
				<button style="background: #ffde4f;border:none;color: #fff;border-radius: 0;" @click="goOrder">立即结算</button>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapGetters,
		mapMutations
	} from 'vuex'
	import {
		GetGoodsDetail
	} from '@/util/api/api.js'
	export default {
		name: "cart",
		props:{
			isCheck: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				// 换购
				isSwap: false,
				isInfo: false,
				isPopup: false,
				isPicker: false,
				weight: '1磅(454g)',
				index: 0,
				popupDateil: {
					list: [
						{
							edible: '',
							weight: '',
							spec: ''
						}
					]
				},
				popupActive: 0,
				value: 1,
				// values: 0
			};
		},
		created() {
			// console.log(this.totalPrice);
			// console.log(this.isAllCheck);
			// this.value = JSON.parse(JSON.stringify(this.goodsList.num))
		},
		computed: {
			...mapState({
				goodsList: state => state.cartGoodsArr
			}),
			...mapGetters(['totalPrice', 'isAllCheck']),
			checkInfo() {
				return  
			}
		},
		methods: {
			...mapMutations(['checkGoods', 'allCheck', 'setCartGoodsNum']),
			async showPopupDateil(id, i) {
				this.isPopup = true
				// console.log(id);
				const where = JSON.stringify({
					id: String(id)
				})
				const {
					data: res
				} = await GetGoodsDetail(where)
				this.popupDateil = res.results[0]
				this.value = JSON.parse(JSON.stringify(this.goodsList[i].num))
				this.index = i
				// console.log(this.index);
				// console.log(this.goodsList[i].num);
			},
			valChange(obj) {
				// console.log(this.valueobj.value);
				// this.values = obj.value
				// console.log(this.values);
				// this.setCartGoodsNum(this.index, obj.value)
			},
			goOrder() {
				console.log(this.goodsList);
				if (this.goodsList.length == 0) {
					return uni.showToast({
						title:'一点都没有哦！',
						icon:'error'
					})
				}
				uni.navigateTo({
					url: '/pages/order/order'
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #fff;
	}
</style>
