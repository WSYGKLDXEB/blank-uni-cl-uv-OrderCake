import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import store from './store'

import uView from "uview-ui";

import TopNav from '@/components/TopNav.vue';
import HomeTitle from '@/components/title-custom.vue'
import CakeList from '@/components/cake-list/cake-list.vue'
import BackTop from '@/components/BackTop.vue'
import Tabbar from '@/components/Tabbar.vue'
import LeftPopup from '@/components/leftPopup.vue'
import Jump from '@/components/Jump.vue'
Vue.component('TopNav', TopNav)
Vue.component('HomeTitle', HomeTitle)
Vue.component('CakeList', CakeList)
Vue.component('BackTop', BackTop)
Vue.component('Tabbar', Tabbar)
Vue.component('LeftPopup', LeftPopup)
Vue.component('Jump', Jump)
Vue.use(uView);
Vue.config.productionTip = false
Vue.prototype.$store = store
App.mpType = 'app'
const app = new Vue({
	store,
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
