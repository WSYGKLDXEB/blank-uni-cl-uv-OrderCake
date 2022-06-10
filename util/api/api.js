import { myRequest, get, post } from './request'

// 获取商品分类
// export const GetShopClassify = () => myRequest({
// 	url: 'classifiy'
// })
export const GetShopClassify = () => get('/1.1/classes/classify')
// 获取首页轮播
export const GetHomeBanner = () => get('/1.1/classes/banner')
// 获取首页轮播详情页
export const GetHomeBannerDetail = () => get('/1.1/classes/bannerDetail')
// 获取商品
export const GetGoods = () => get('/1.1/classes/goods')
// 查询商品
export const GetQueryGoods = (where, limit, skip) => get(`/1.1/classes/goods?where=${where}&limit=${limit}&skip=${skip}`)
// 商品详情
export const GetGoodsDetail = (where) => get(`/1.1/classes/goods?where=${where}`)
// 注册
export const PostRegister = (info) => post('/1.1/users', info)
// 登陆
export const PostSgin = (info) => post('/1.1/login', info)