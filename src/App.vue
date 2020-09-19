<template>
	<div id="app">
		<navbar class="top-0 z-10" :pages="pages" :active="page" @page="switchPage"></navbar>
		<div class="m-20 w1024">
			<component v-bind:is="pageComponent"></component>
		</div>
		<foooter class="bottom-0 z-10" ></foooter>
	</div>
</template>
<script>
	import Navbar from './components/Navbar.vue'
	import Foooter from './components/Foooter.vue'

	import Layout from './pages/Layout.vue'
	import Elements from './pages/Elements.vue'
	import Form from './pages/Form.vue'
	import DataBrowser from './pages/DataBrowser.vue'
	import Invoicing from './pages/Invoicing.vue'

	export default {
		name: 'App',
		components: { Navbar, Layout, Elements, Form, DataBrowser, Invoicing, Foooter },
		data() {
			return {
				page: "Layout",
				pages: ["Layout", "Elements", "Form", "Data Browser", "Invoicing"]
			}
		},
		methods: {
			switchPage(page) {
				this.page = page;
			}
		},
		computed: {
			pageComponent() {
				return this.page.replace(" ", "");
			}
		}
	}
</script>
<style scoped>
	.w1024 { width: 1024px; margin-left: auto; margin-right: auto; }
</style>