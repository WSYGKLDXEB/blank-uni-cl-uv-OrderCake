<template>
	<u-transition :show="show" mode="fade" duration='400'>
		<view @click="backTop" class="backTop" :style="{
		background:bgc,
		bottom: bottom + 'px'
	}">
			<u-icon :name="name" :color="color" :size="size"></u-icon>
		</view>
	</u-transition>
</template>

<script>
	export default {
		name: "BackTop",
		props: {
			name: {
				type: String,
				default: 'arrow-up'
			},
			color: {
				type: String,
				default: '#ccc'
			},
			size: {
				type: Number,
				default: 30
			},
			bgc: {
				type: String,
				default: '#eee'
			},
			speed: {
				type: Number,
				default: 16
			},
			offset: {
				type: Number,
				default: 300
			},
			nowScroll: {
				type: Number,
				default: 0
			},
			bottom: {
				type:Number,
				default: 74
			}
		},
		data() {
			return {
				show: false
				// nowScroll: 0
				// speed: 16,
				// offset: 300
			};
		},
		mounted() {

		},
		watch: {
			nowScroll(newV, oldV) {
				// console.log('new',newV);
				// console.log('old',oldV);
				if (newV > this.offset) {
					this.show = true
				} else {
					this.show = false
				}

			}
		},
		methods: {
			backTop() {
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 200
				});
			}
		}
	}
</script>

<style lang="scss">
	.backTop {
		position: fixed;
		right: 30px;
		// bottom: 80px;
		width: 90rpx;
		height: 90rpx;
		line-height: 90rpx;
		border-radius: 50%;
		// border: 1px solid pink;
		box-shadow: 1rpx 1rpx 8rpx 1rpx rgba(0, 0, 0, .3);
	}

	.u-icon {
		margin-top: 16rpx;
		align-items: center;
	}

	.u-icon--right {
		justify-content: center;
	}
</style>
