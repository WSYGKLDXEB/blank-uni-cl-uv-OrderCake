// 页面路径：store/index.js 
import Vue from 'vue'
import Vuex from 'vuex'
// import condition from './condition.js'
import {
	PostSgin
} from '@/util/api/api.js'
Vue.use(Vuex); //vue的插件机制

//Vuex.Store 构造器选项
const store = new Vuex.Store({
	state: { //存放状态
		leftPopup: false,
		navActive: 0,
		// 查询条件
		condition: {
			// 商品id
			bcid: 1
		},
		userInfo: null,
		cartGoodsArr: [{
				id: 10331,
				twoId: 10265,
				name: "蓝莓轻乳拿破仑",
				french: "Napoléon aux myrtilles",
				price: "198.00",
				num: 1,
				isCheck: false,
				img: '/static/img/2.jpg'
			},
			{
				id: 17016,
				twoId: 17015,
				name: "精选高纤奶酪",
				french: "Fromage riche en fibres",
				price: "18.80",
				num: 1,
				isCheck: true,
				img: '/static/img/4.jpg'
			},
		],
		address: {
			name: '青稞',
			tel: '11321321',
			detail: '江西省 九江市 都昌县 汪墩乡',
			isCheck: true
		},
		addressDefaultActive: 0,
		addressArr: [{
				name: '青稞',
				tel: '11321321',
				detail: '江西省 九江市 都昌县 汪墩乡',
				isCheck: true
			},
			{
				name: '任逍遥',
				tel: '875132144',
				detail: '江西省 九江市 廉溪区 花果园小区',
				isCheck: false
			},
			{
				name: '空白',
				tel: '1232454',
				detail: '江西省 九江市 都昌县 阳峰乡',
				isCheck: false
			}
		]
	},
	getters: {
		totalPrice(state) {
			let s = 0
			state.cartGoodsArr.forEach(item => {
				if (item.isCheck) {
					s += Number(item.price) * item.num
				}
			})
			return s.toFixed(2)
		},
		isAllCheck(state) {
			return state.cartGoodsArr.every(item => item.isCheck)
		}
	},
	mutations: {
		setLeftPopup(state) {
			state.leftPopup = !state.leftPopup
		},
		setNavACtive(state, i) {
			state.navActive = i
		},
		setCondition(state, obj) {
			state.condition = obj
			// console.log(obj);			
		},
		initInfo(state, info) {
			state.userInfo = info
			console.log(state.userInfo);

		},
		checkGoods(state, i) {
			state.cartGoodsArr[i].isCheck = !state.cartGoodsArr[i].isCheck
		},
		allCheck(state) {
			if (state.cartGoodsArr.every(item => item.isCheck)) {
				state.cartGoodsArr.forEach(item => item.isCheck = false)
			} else {
				state.cartGoodsArr.forEach(item => item.isCheck = true)
			}

		},
		setCartGoodsNum(state,obj) {
			// console.log(i, val);
			state.cartGoodsArr[obj.index].num = obj.value
		},
		addGoodsCart(state, obj) {
			// function cs(i) {
			// 	return i === obj.id
			// }
			// console.log(state.cartGoodsArr.some();
			// if (state.cartGoodsArr.some(item => item.id == obj.id)){
			// 	state.cartGoodsArr.forEach(item => {
			// 		if (item.id == obj.id) {
			// 			item.num++
			// 		}
			// 	})
			// } else{
			state.cartGoodsArr.push(obj)
			// }

		},
		closeGoodsCart(state) {
			state.cartGoodsArr = []
		},
		setAddress(state, i) {
			state.addressArr.forEach(item => item.isCheck = false)
			state.addressArr[i].isCheck = true
			state.address = state.addressArr[i]

			uni.navigateBack({
				delta: 1
			})
		},
		setAddressDefault(state, i) {
			state.addressDefaultActive = i
		},
		delAddress(state, i) {
			uni.showModal({
				title: '删除',
				content: '该操作将永久删除地址！',
				success: (res) => {
					console.log(res);
					if (res.confirm) {
						if (state.addressArr[i].isCheck) {
							return uni.showToast({
								title: '地址已被选择！',
								icon: 'error'
							})
						}
						state.addressArr.splice(i, 1)
					}
					if (res.cancel) {
						uni.showToast({
							title: '取消操作！',
							icon: 'none'
						})
					}
				}

			})
			// state.addressArr.splice(i, 1)
		},
		editAddress(state,obj) {
			// const bl = JSON.parse(JSON.stringify(state.addressArr[i].isCheck))
			// obj.isCheck = bl
			console.log(obj);
			setTimeout(() => {
				state.addressArr[obj.i] = {
					name: obj.name,
					tel: obj.tel,
					detail: obj.detail
				}
				uni.showToast({
					title: '更改地址成功！',
					icon:'success'
				})
			},200)
			
		},
		addAddress(state,obj) {
			state.addressArr.push(obj)
		}
	},
	actions: {
		async userLogin(context, info) {
			const {
				data: res
			} = await PostSgin(info)
			console.log(res);
			const {
				code
			} = res
			if (code) {
				let title = code === 211 ? '用户不存在' : '密码错误'
				return uni.showToast({
					title,
					icon: "error"
				})
			}
			context.commit('initInfo', res)
			uni.setStorage({
				key: 'mcakeuser',
				data: res
			})
			uni.navigateBack({
				delta: 1
			})
		}
	},
	modules: {
		// condition
	}
})
export default store
