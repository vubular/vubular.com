<template>
	<nav class="flex items-center justify-between flex-wrap bg-gray-700 p-6">
		<div class="flex items-center flex-shrink-0 text-white mr-6">
			<img src="@/assets/images/logo.png" class="fill-current w-10 ml-16">
		</div>
		<div class="block lg:hidden">
			<button class="flex items-center px-3 py-2 border rounded border-gray-400 hover:text-white hover:border-white">
				<svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
			</button>
		</div>
		<div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
			<div class="flex-1 lg:flex-grow mt-6">
				<a v-for="(page, p) in pages"
					:key="p" href="#"
					class="block mt-4 lg:inline-block lg:mt-0 hover:text-white text-lg m-6"
					:class="{'text-white': active==page, 'text-gray-500': active!=page}"
					@click.prevent="$emit('page', page)">
					{{page}}
				</a>
			</div>
			<div>
				<a href="https://github.com/vubular"
					class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-900 hover:bg-white mt-4 lg:mt-0">
					<i class="fab fa-github"></i>
					Github
				</a>
			</div>
		</div>
	</nav>
</template>
<script>
	export default {
		name: "Navbar",
		props: ["pages", "active"],
		data () {
			return {
				isOpen: false,
				isOpenEnv: false,
				view: {
					atTopOfPage: true
				},
				activeClass: 'active'
			}
		},
		created() {
			const handleEscape = (e) => {
				if(e.key === 'Esc' || e.key === 'Escape') {
					this.isOpen = false;
				}
			}
			document.addEventListener('keydown', handleEscape)

			this.$once('hook:beforeDestroy', () => {
				document.removeEventListener('keydown', handleEscape)
			})
		},
		beforeMount () {
			window.addEventListener('scroll', this.handleScroll);
		},
		methods: {
			handleScroll(){
				if(window.pageYOffset>0){
					if(this.view.atTopOfPage) this.view.atTopOfPage = false
				}else{
					if(!this.view.atTopOfPage) this.view.atTopOfPage = true
				}
		}
	}
}
</script>
<style scoped>
.is-active { border-bottom-width: 1px; border-color: #662D91; color: #662D91; margin-top: 1px; }
</style>