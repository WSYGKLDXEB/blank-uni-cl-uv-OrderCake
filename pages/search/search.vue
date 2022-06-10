<template>
	<view class="search padding-bottom">
		<!-- 顶部导航 -->
		<TopNav :isShowReturn='false'></TopNav>
		<input type="text" v-model="query" confirm-type="search" placeholder="请输入关键字" class="text-center margin-top-xl" />
		<view class="text-center text-gray margin-top margin-bottom-sm">
			<text>拿破仑</text>、
			<text>巧克力</text>、
			<text>芝士</text>、
			<text>鲜奶</text>、
			<text>坚果</text>、
			<text>小食</text>			
		</view>
		<button class="margin-bottom margin-lr-sm" style="background-color: #ffe32a;border:none;">搜索</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				query: ''
			};
		}
	}
</script>

<style lang="scss">
.search{
	background-color: #fff;
}
</style>
