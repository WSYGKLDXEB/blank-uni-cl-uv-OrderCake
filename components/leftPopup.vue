<template>
	<view>
		<!-- 菜单 -->
		<u-popup :show="leftPopup" mode="left" closeOnClickOverlay @close='setLeftPopup'>
			<view class="popup-cont">
				<!-- <u-collapse accordion :value='1'>
					<u-collapse-item :title="items.bname" v-for="(items, i) in classifyList" :key="items.id">
						<view class="" v-if="i == 0">
							<view
								:class="['padding-tb-sm margin-top  u-border-top fs-30',listShow? 'cuIcon-fold':'cuIcon-unfold  u-border-bottom' ]"
								@click="listShow = !listShow">
								口味筛选
							</view>
							<u-cell-group v-show="listShow">
								<u-cell v-for="item in items.list" icon="" :title="item.tname" isLink></u-cell>
							</u-cell-group>
							<view :class="['fs-30', sceneShow? 'cuIcon-fold padding-tb-sm':'cuIcon-unfold padding-top-sm']"
								@click="sceneShow = !sceneShow" style="">
								场景筛选
							</view>
							<u-cell-group v-show="sceneShow">
								<u-cell v-for="item in items.scene" icon="" :title="item.tname" isLink></u-cell>
							</u-cell-group>
						</view>
							
					</u-collapse-item>
				</u-collapse> -->
				<view :class="['padding-left padding-sm u-border-top fs-34', i == 3? 'u-border-bottom':'']"
					v-for="(items, i) in classifyList" @click="goClassifyFather(i, items.bid)">
					{{items.bname}} <text class="fs-24 text-center margin-left-sm"
						style="background-color: #ffe32a; padding: 10rpx;border-radius: 50%;line-height: 26rpx;">{{items.num}}</text>
					<view class="" v-if="i == 0">
						<view :class="['padding-tb-sm margin-top  u-border-top fs-30',listShow? '':'u-border-bottom' ]"
							@click="listShow = !listShow">
							口味筛选<text :class="['margin-left',listShow? 'cuIcon-fold':'cuIcon-unfold']"></text>
						</view>
						<u-cell-group v-show="listShow">
							<u-cell v-for="(item, index) in items.list" icon="" :title="item.tname" isLink @click="goClassify('list',item.bid, item.tid)">
								<text slot="icon" :class="['cl-yl iconfont',listIcon[index]]"></text>
							</u-cell>
						</u-cell-group>
						<view :class="['fs-30', sceneShow? 'padding-tb-sm':'padding-top-sm']"
							@click="sceneShow = !sceneShow" style="">
							场景筛选<text :class="['margin-left',listShow? 'cuIcon-fold':'cuIcon-unfold']"></text>
						</view>
						<u-cell-group v-show="sceneShow">
							<u-cell v-for="(item, index) in items.scene" icon="" :title="item.tname" isLink @click="goClassify('scene',item.bid, item.tid)">
								<text slot="icon" :class="['cl-yl iconfont',sceneIcon[index]]"></text>
							</u-cell>
						</u-cell-group>
					</view>

					<view class="" v-if='i !== 0'>
						<u-cell-group v-show="sceneShow">
							<u-cell v-for="item in items.list" icon="" :title="item.tname" isLink></u-cell>
						</u-cell-group>
					</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import {
		GetShopClassify
	} from '@/util/api/api.js'
	
	import {
		mapMutations,
		mapState
	} from 'vuex'
	export default {
		name: "leftPopup",
		data() {
			return {
				// 分类列表
				classifyList: [],
				// 分类菜单隐藏项
				listShow: false,
				sceneShow: false,
				listIcon: [
					'icon-napolundangao',
					'icon-naiyou',
					'icon-huabanfuben',
					'icon-zhishidangao',
					'icon-qiaokeli',
					'icon-kafei',
					'icon-shuiguo'				
				],
				sceneIcon: [
					'icon-shengridangao',
					'icon-juhui',
					'icon-qingrenjie',
					'icon-ertong',
					'icon--changbei',
					'icon-xiawucha'					
				]
			};
		},
		computed: {
			...mapState(['leftPopup'])
		},
		created() {
			this.getClassify()
			// console.log(this.setLeftPopup());
		},
		methods: {
			...mapMutations(['setLeftPopup', 'setCondition']),
			async getClassify() {
				const {
					data: res
				} = await GetShopClassify()
				console.log(res);
				this.classifyList = res.results
			},			
			goClassify(name, bcid, id) {		
				console.log(bcid,id);
				// const obj = {
				// 	bcid: bcid,
				// 	fid: id
				// }
				// console.log(obj);
				if (name == 'list'){
					this.setCondition({
						bcid: bcid,
						fid: id
					})
				} else {
					this.setCondition({
						bcid: bcid,
						sid: id
					})
				}
				uni.navigateTo({
					url: '/pages/classify/classify'
				})
				this.setLeftPopup()
			},
			goClassifyFather(index,bcid) {
				if (index !== 0) {
					this.setCondition({
						bcid: bcid					
					})
					uni.navigateTo({
						url: '/pages/classify/classify?index=' + index
					})
					this.setLeftPopup()
				}
				
			}
		}
	}
</script>

<style lang="scss">
	// 弹出菜单
	.popup-cont {
		width: 400rpx !important;
		margin-top: 120rpx;
	}
</style>
