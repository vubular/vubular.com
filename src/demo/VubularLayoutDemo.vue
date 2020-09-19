<template>
	<div class="app-container">
		<vubular-layout
			:brand="brand"
			:account="account"
			:preferences="preferences"
			:navigation="navigation">
			<template #support>
				<div style="padding:40px;font-weight:200">
					<h2> Your support forms, contacts and details... </h2>
				</div>
			</template>

			<template #notifications>
				<div style="padding:40px;font-weight:200">
					<h2> Load and deploy your notifications here... </h2>
				</div>
			</template>

			<template #launcher>
				<div style="padding:40px;font-weight:200">
					<h2> Launcher items... </h2>
				</div>
			</template>
		</vubular-layout>
	</div>
</template>
<script>
	export default {
		name: "VubularDataBrowserDemo",
		props: ["brand", "account", "preferences", "navigation"]
	}
</script>
<style scoped>
	.app-container {
		width: 100%;
		height: 600px;
		position: relative;
		border: 10px solid #ddd;
		border-radius:5px;
	}
	.app-container:before {
		 content: ""; position: absolute; top: -61px; left: -10px; width: 102%; border-width: 40px; border-style: solid; border-color:#ddd;
		 border-radius:5px;
	}
	.app-container:after {
		 content: "localhost:8080"; position: absolute; top: -45px; left: 5px; width: 99%; border-width: 5px; border-style: solid; border-color:#fff; border-radius: 10px; background: #fff;
	}
	>>> .sidebar { position: absolute !important; }
</style>