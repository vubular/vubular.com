<template>
	<div>
		<!-- Nav -->
		<div class="shadow" :class="{ 'shadow': !view.atTopOfPage }">
			<nav class="flex items-center justify-between bg-white flex-wrap h-16 px-6">
				<a href="#" class="flex items-center flex-shrink-0 text-white mr-6 cursor-pointer border-none">
					<img src="@/assets/images/logo.png" class="fill-current w-10 ml-16">
              		<p class="text-indigo-800 ml-4 text-xl font-light">VUBULAR</p>
				</a>
				<div class="block lg:hidden">
					<button class="flex items-center px-3 py-2 border rounded border-teal-400 hover:text-white hover:border-white">
						<svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
					</button>
				</div>
				<div class="w-full block flex-grow lg:flex lg:items-right md:items-right sm:items-right lg:w-auto">
					<a href="#"><i class="fab fa-github"></i></a>
				</div>
			</nav>
		</div>
		<!-- End - Nav -->
	</div>
</template>
<script>
	export default {
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