<script>
	import { mapMutations } from 'vuex'
	export default {
		onLaunch: function() {
			console.log('App Launch')
			try {
				const info = uni.getStorageSync('mcakeuser');
				if (info) {
					this.$store.commit('initInfo', info)
				}
			} catch (e) {
				throw new Error("获取用户信息失败");				
			}

		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}

	}
</script>

<style lang="scss">
	/*每个页面公共css */

	// 引入uView ui基础样式
	@import "uview-ui/index.scss";
	// // color UI 资源
	// @import "@/colorui/animation.css";
	@import '@/colorui/icon.css';
	@import '@/colorui/main.css';
	// // uview-ui样式
	// @import 'uview-ui/theme.scss';
	/* 引入字体图标 */
	@import '@/static/font/iconfont.css';

	page {
		background-color: #fff;
	}
</style>
