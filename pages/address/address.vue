<template>
	<view>
		<TopNav :isShowReturn='false' :isCart='false'></TopNav>
		<view class="flex" style="border: 10rpx solid #eee;">
			<u--input placeholder="请输入收货人姓名.手机号.地址关键词" border="surround" v-model="value" style='width: 80%;'></u--input>
			<u-button type="primary" text="确定"
				style='width: 20%;background-color: #ffcd20;border: none;box-shadow: 2rpx 2rpx 0rpx 1rpx rgba(0, 0, 0, .3);'>
			</u-button>
		</view>
		<view class="addressList padding-xs" v-for="(item,i) in addressArr" :key="i" @click="setAddress(i)">
			<view class="addressItem padding-top padding-bottom-xs"
				style="border: 1px solid #ddd;position: relative;overflow: hidden;">
				<view class="flex justify-between align-center padding-lr-sm">
					<view :class="['cuIcon-check text-white',item.isCheck ? 'bg-yl': 'bg-gray']"
						style="border-radius: 50%;"></view>
					<view class="" style="width: 80%;">
						<view class="fw-6 fs-34">{{item.name}} {{item.tel}}</view>
						<view class="u-line-1 margin-top-sm">{{item.detail}}</view>
					</view>
					<view class="iconfont icon-bianji bg-gray padding-sm cl-00" style="border-radius: 50%;"
						@click.stop="showEditPopup(item, i)"></view>
				</view>
				<view class="flex padding-tb-xs">
					<view class="text-center cl-00" style='width:50%;border-right: 1px solid #000;'
						@click.stop="setAddressDefault(i)">默认地址</view>
					<view class="text-center text-gray" style='width:50%;'><text class="cuIcon-delete margin-right-xs"
							@click.stop="delAddress(i)"></text>删除</view>
				</view>
				<!-- 默认角标 -->
				<view v-if="i == addressDefaultActive" class="text-center bg-yl padding-top-sm fs-24 fw-6"
					style="position: absolute;top: -14rpx;right: -36rpx;width: 100rpx;transform: rotate(45deg);padding-bottom: 5rpx;">
					默</view>
			</view>
		</view>
		<view class="flex justify-center align-center margin-top-xl" style="flex-flow: column;" @click.stop="showAddPopup">
			<view class="cl-ff bg-yl text-center fs-80"
				style="border-radius: 50%;width: 100rpx;height: 100rpx;line-height: 100rpx;">+</view>
			<view class="text-center cl-33 margin-top-sm fs-36" >新增地址</view>
		</view>
		<view class="flex justify-center align-center margin-top-xl" style="flex-flow: column;" @click.stop="showAddPopup">
			<view class="cl-ff bg-yl text-center fs-80"
				style="border-radius: 50%;width: 100rpx;height: 100rpx;line-height: 100rpx;">+</view>
			<view class="text-center cl-99 margin-top-sm fs-36">网点自提</view>
		</view>

		<u-overlay :show="isPopup" @click="isPopup = false">
			<view class="bg-ff"
				style="width: 680rpx;position: fixed;top: 50%;left: 50%;transform: translate(-50%,-50%);border-radius: 5rpx;"
				@click.stop>
				<view v-if="!isAddPopup" class="text-center fw-6 fs-40 margin-top-sm">编辑</view>
				<view v-else class="text-center fw-6 fs-40 margin-top-sm">添加</view>
				<view class="padding-sm">
					<view class="flex align-center justify-between">
						<view class="fs-30" style='width: 25%;'>姓名：</view>
						<u--input placeholder="请输入收件人姓名" border="surround" v-model="obj.name"></u--input>
					</view>
					<view class="flex align-center margin-tb-sm">
						<view class="fs-30" style='width: 25%;'>电话：</view>
						<u--input placeholder="请输入收件人电话" border="surround" v-model="obj.tel"></u--input>
					</view>
					<view class="flex align-center">
						<view class="fs-30" style='width: 25%;'>详细地址：</view>
						<u--input placeholder="请输入收件人地址" border="surround" v-model="obj.detail"></u--input>
					</view>
				</view>
				<view class="flex">
					<button style="background: #888888;border:none;color: #fff;border-radius: 0;width: 50%;"
						@click="isPopup = false">取消</button>
					<button v-if="!isAddPopup"
						style="background: #ffde4f;border:none;color: #111;border-radius: 0;width: 50%;"
						@click="editPopup">确定</button>
					<button v-else style="background: #ffde4f;border:none;color: #111;border-radius: 0;width: 50%;"
						@click="addPopup">添加</button>
				</view>
			</view>
		</u-overlay>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		data() {
			return {
				value: '',
				isPopup: false,
				// isEditPopup: false,
				isAddPopup: false,
				obj: {
					name: '',
					tel: 0,
					detail: '',
					isCheck: false
				},
				i: 0
			};
		},
		computed: {
			...mapState(['addressArr', 'addressDefaultActive'])
		},
		methods: {
			...mapMutations(['setAddress', 'delAddress', 'setAddressDefault', 'editAddress', 'addAddress']),
			showEditPopup(obj, i) {
				// console.log(obj);
				this.isPopup = true
				this.obj = obj
				console.log(this.obj);
				this.i = i
			},
			editPopup() {
				// const 
				const obj = JSON.parse(JSON.stringify(this.obj))
				obj.i = this.i
				// console.log(obj);
				this.editAddress(obj)
				this.isPopup = false
			},
			showAddPopup() {
				// console.log(obj);
				this.isPopup = true
				this.isAddPopup = true
				
			},
			addPopup() {
				const obj = JSON.parse(JSON.stringify(this.obj))				
				this.addAddress(obj)
				this.isPopup = false
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #fff;
	}
</style>
