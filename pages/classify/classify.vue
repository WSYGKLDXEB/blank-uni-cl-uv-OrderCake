<template>
	<view class="classify">
		<!-- 导航 -->
		<!-- <TopNav></TopNav> -->
		<!-- 粘性布局 -->
		<u-sticky bgColor="#fff" offset-top="0" customNavHeight='0'>
			<!-- 导航 -->
			<TopNav></TopNav>
			<!-- 分类导航 -->
			<u-subsection bgColor='' inactiveColor='#c5c5c5' activeColor="#f9ae3d" :list="classList" :current="current"
				@change="sectionChange"></u-subsection>
		</u-sticky>
		<!-- 商品列表 -->
		<CakeList :listData='goodsList'></CakeList>

		<u-transition :show="showToast" mode="fade">
			<!-- 没有更多了 -->
			<view class="showToast text-center"><text class="margin-right text-grey">————</text>ε=ε=ε=(~￣▽￣)~<text
					class="margin-left text-grey">————</text></view>
		</u-transition>

		<!-- 菜单 -->
		<LeftPopup></LeftPopup>
		<!-- 一键回顶 -->
		<!-- <BackTop :nowScroll='scrollTop'></BackTop> -->
		<BackTop :nowScroll='scrollTop'></BackTop>
		<!-- tab导航 -->
		<Tabbar></Tabbar>
	</view>
</template>

<script>
	import {
		GetQueryGoods
	} from '@/util/api/api.js'

import { mapState, mapMutations } from 'vuex'
	export default {
		data() {
			return {
				// 滚动条的位置
				scrollTop: 0,
				classList: ['蛋糕', '面包', '小食', '配件'],
				current: 0,
				// 分页
				page: 0,
				// 商品数据
				goodsList: [],
				// // 查询条件
				// condition: {
				// 	// 商品id
				// 	bcid: 1					
				// },
				// 商品id
				// bcid: 1,
				// 每页显示数据
				num: 8,
				// 是否加载中
				onReach: false,
				// 是否刷新中
				onRefresh: false,
				// 是否发起请求
				ifGetGoods: true,
				// 数据是否加载完
				showToast: false
			}
		},
		onLoad(params) {
			this.setNavACtive(1)
			this.getGoods()
			if (params) {
				this.current = params.index
			}
		},
		// 滚动条
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		// 下拉刷新
		onPullDownRefresh() {
			if (this.showToast) {
				uni.stopPullDownRefresh()
				uni.showToast({
					title: '一点都没有了！\\nε=ε=ε=(~￣▽￣)~',
					icon: 'none'
				})
			} else {
				if (this.ifGetGoods) {
					console.log(4646545464);
					this.onRefresh = true
					this.page++
					this.getGoods()
				}
			}
			// console.log(this.ifGetGoods);

		},
		// 上划加载
		onReachBottom() {
			if (!this.showToast) {
				if (this.ifGetGoods) {
					this.onReach = true
					this.page++
					this.getGoods()
				}
			}

		},
		computed: {
			// // 查询条件
			...mapState(['condition'])
		},
		methods: {
			...mapMutations(['setCondition','setNavACtive']),
			sectionChange(index) {
				this.ifGetGoods = true
				this.showToast = false
				this.current = index;
				this.goodsList = []
				// console.log(index);
				if (index === 0) {
					// this.condition.bcid = 1
					this.setCondition({bcid: 1})
					this.page = 0
					this.getGoods()					
				} else if (index === 1) {
					// this.condition.bcid = 11
					this.setCondition({bcid: 11})
					this.page = 0
					this.getGoods()					
				} else if (index === 2) {
					// this.condition.bcid = 6
					this.setCondition({bcid: 6})
					this.page = 0
					this.getGoods()					
				} else {
					// this.bcid = 5
					// this.condition.bcid = 5
					this.setCondition({bcid: 5})
					this.page = 0
					this.getGoods()					
				}
			},
			async getGoods() {
				console.log(16151616);
				const where = JSON.stringify(this.condition)
				// console.log(JSON.Stringify(this.condition));
				const {
					data: res
				} = await GetQueryGoods(where, this.num, this.num * this.page)
				let total = res.results[0].total
				console.log(res);
				this.ifGetGoods = total < (this.page) * this.num ? false : true
				
				if (this.onReach) {
					this.goodsList = [...this.goodsList, ...res.results]
					this.onReach = false
					this.showToast = total == this.goodsList.length
				} else if (this.onRefresh) {
					setTimeout(() => {
						this.goodsList = [...res.results, ...this.goodsList]
						this.onRefresh = false
						uni.stopPullDownRefresh()
						// console.log('total',total);
						// console.log('this.goodsList.length',this.goodsList.length);	
						this.showToast = total == this.goodsList.length
						// console.log(total == this.goodsList.length);
					}, 300)
				} else {
					this.goodsList = res.results
				}

			}
		}
	}
</script>

<style lang="scss">
	.classify{
		margin-bottom: 100rpx;
	}
	.showToast {
		height: 80rpx;
		line-height: 80rpx;
	}
</style>
