<template>
	<view>
		<button type="default" @click="chaxun">查询</button>
		<button type="default" @click="fenlei">录入分类</button>
		<button type="default" @click="shangping">录入商品</button>
	</view>
</template>

<script>
	import {
		post,
		get
	} from '@/util/api/request.js'
	export default {
		data() {
			return {
				// 分类
				fenleiData: [],
			};
		},
		onLoad() {

		},
		methods: {
			async fenlei() {
				let batchObj
				uni.request({
					url: 'https://h5.mcake.com/api/5e90690f0e270d04?cityId=641',
					method: 'GET',
					header: {
						'access-token': '1168338e2a984ded12553ed7e66b7d8e',
						'version': 'v1.0'
					},
					success: (res) => {
						const {
							data
						} = res.data
						batchObj = {
							"requests": []
						}

						console.log(data);
						data.forEach(item => {
							batchObj.requests.push({
								"method": "POST",
								"path": "/1.1/classes/classify",
								"body": item
							})
						})
						// this.fenleiData = batchObj
						// console.log(this.fenleiData);
					}
				})
				const {
					data: res
				} = await post('/1.1/batch', batchObj)
				console.log(res);
			},
			shangping() {
				// let batchObj
				uni.request({
					url: 'https://h5.mcake.com/api/0434b49d1ac28f9d?cityId=641&page=1&bid=5',
					method: 'GET',
					header: {
						'access-token': '6b1f6b2c37a71055ff1a0fdd5ab4d609',
						'version': 'v1.0'
					},
					success: res => {
						const {
							list
						} = res.data.data
						const batchObj = {
							"requests": []
						}
				
						// console.log(res);
						list.forEach(item => {
							batchObj.requests.push({
								"method": "POST",
								"path": "/1.1/classes/goods",
								"body": item
							})
						})		
						console.log(batchObj);
						post('/1.1/batch', batchObj)
						// console.log(res);
					}
				})
				
				
			},
			async chaxun() {
				const {
					data: res
				} = await get('/1.1/classes/Post')
				console.log(res);
			}
		}

	}
</script>

<style lang="scss">

</style>
