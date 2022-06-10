const BASE_URL = 'https://f0wy8dpx.lc-cn-n1-shared.com'
// const BASE_URL = 'https://f0wy8dpx.lc-cn-n1-shared.com'
export const myRequest = (options) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: BASE_URL + options.url,
			method: options.method || 'GET',
			data: options.data || {},
			header: {
				"X-LC-Id": "F0WY8DPxLqSXXyXHUxVcfiNm-gzGzoHsz",
				"X-LC-Key": "0loi988kcjM2UgbpTBlUvtFJ",
				"Content-Type": "application/json"
			},
			success: (res) => {
				// if (res.statusCode !== 200 || res.statusCode !== 201) {
				// 	uni.showToast({
				// 		icon: 'error',
				// 		title: '获取数据失败！'
				// 	})
				// }
				resolve(res)
			},
			fail: (err) => {
				uni.showToast({
					icon: 'error',
					title: '请求接口失败！'
				})
				reject(err)
			}
		})
	})
}

export const get = (url, data) => myRequest({
	url: url,
	method: 'GET',
	data: data
})

export const post = (url, data) => myRequest({
	url: url,
	method: 'POST',
	data: data
})