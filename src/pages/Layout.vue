<template>
	<div>
		<hr>
		<vubular-layout-demo :navigation="navigation" :brand="brand" :account="account"/>
		<hr>
		<vubular-layout-api/>
	</div>
</template>
<script>
	import VubularLayoutDemo from "../demo/VubularLayoutDemo.vue";
	import VubularLayoutApi from "../api/VubularLayoutApi.vue";
	export default {
		name: "Layout",
		components: { VubularLayoutDemo, VubularLayoutApi },
		data() {
			return {
				navigation: [
					{
						label: "Home",
						icon: "fa fa-home",
						clickFunction() {}
					},
					{
						label: "Iconless",
						clickFunction() {}
					},
					{
						label: "Static"
					},
					{
						label: "SubNav",
						icon: "fa fa-level-down-alt",
						clickFunction() {},
						navigation: [
							{
								label: "Favorite",
								icon: "fa fa-star"
							},
							{
								label: "Love",
								icon: "fa fa-heart"
							}
						]
					},
				],
				brand: {
					name: "Google",
					logo: "//logo.clearbit.com/google.com",
					path: "/home"
				},
				account: {
					name: "John",
					lastname: "Doe"
				}
			}
		}
	}
</script>