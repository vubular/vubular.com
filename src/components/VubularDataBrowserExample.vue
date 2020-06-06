<template>
	<div>
		<div class="mb-8">
			<div class="grid grid-cols-12">
				<div class="col-span-4 p-4">
					<div class="block">
						<p class="subtitle">Toggle Hero</p>
						<label class="custom-label flex mr-1">
							  <div class="bg-white shadow w-6 h-6 p-1 flex justify-center items-center mr-2">
								<input type="checkbox" class="hidden" checked v-model="hideHero" true-value="visible" false-value="hidden">
								<svg class="hidden w-4 h-4 text-green-600 pointer-events-none" viewBox="0 0 172 172"><g fill="none" stroke-width="none" stroke-miterlimit="10" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode:normal"><path d="M0 172V0h172v172z"/><path d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z" fill="currentColor" stroke-width="1"/></g></svg>
							  </div>
							<span class="select-none">
								{{ hideHero }}
							</span>
						</label>
					</div>
					<div v-if="hideHero!='hidden'" class="">
						<div class="mb-2">
							<label class="block text-gray-700 text-sm font-bold" for="title" style="margin-bottom: 5px;">
								Title
							</label>
							<input class="appearance-none border rounded py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Title" v-model="heroDetails.title">
						</div>
						<div class="">
							<label class="block text-gray-700 text-sm font-bold" for="textarea" style="margin-bottom: 5px;">
								Subtitle
							</label>
							<textarea class="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="textarea" type="text" placeholder="Textarea" v-model="heroDetails.subtitle"></textarea>
						</div>
					</div>
				</div>
				<div class="col-span-5 border-2 p-4 rounded-lg">
					<p class="subtitle">Toggle Controls</p>
					<section>
						<div class="">
							<label class="custom-label flex float-left mr-1">
								  <div class="bg-white shadow w-6 h-6 p-1 flex justify-center items-center mr-2">
									<input type="checkbox" class="hidden" checked v-model="toggleAllControls" value="create::">
									<svg class="hidden w-4 h-4 text-green-600 pointer-events-none" viewBox="0 0 172 172"><g fill="none" stroke-width="none" stroke-miterlimit="10" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode:normal"><path d="M0 172V0h172v172z"/><path d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z" fill="currentColor" stroke-width="1"/></g></svg>
								  </div>
								  <span class="select-none">
										<span class="fas fa-sliders-h"></span>
										<span v-if="toggleAllControls"> controls Off(hide)</span>
										<span v-else> controls On</span>
								  </span>
							</label>
						</div>
						<br>
						<p class="mt-2 text-gray-600">props:</p>
						<hr class="p-0 m-0">
						<div class="mt-4">

							<label class="custom-label flex float-left mr-1">
								  <div class="bg-white shadow w-6 h-6 p-1 flex justify-center items-center mr-2">
									<input type="checkbox" class="hidden" checked v-model="checkboxGroup" value="create::">
									<svg class="hidden w-4 h-4 text-green-600 pointer-events-none" viewBox="0 0 172 172"><g fill="none" stroke-width="none" stroke-miterlimit="10" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode:normal"><path d="M0 172V0h172v172z"/><path d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z" fill="currentColor" stroke-width="1"/></g></svg>
								  </div>
								  <span class="select-none"> Create</span>
							</label>

							<label class="custom-label flex float-left mr-1">
								  <div class="bg-white shadow w-6 h-6 p-1 flex justify-center items-center mr-2">
									<input type="checkbox" class="hidden" checked v-model="checkboxGroup" value="archive::">
									<svg class="hidden w-4 h-4 text-green-600 pointer-events-none" viewBox="0 0 172 172"><g fill="none" stroke-width="none" stroke-miterlimit="10" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode:normal"><path d="M0 172V0h172v172z"/><path d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z" fill="currentColor" stroke-width="1"/></g></svg>
								  </div>
								  <span class="select-none"> Archive</span>
							</label>

							<label class="custom-label flex float-left cursor-not-allowed opacity-50">
								  <div class="bg-white shadow w-6 h-6 p-1 flex justify-center items-center mr-2">
									<input type="checkbox" class="hidden" checked v-model="checkboxGroup" disabled value="search">
									<svg class="hidden w-4 h-4 text-green-600 pointer-events-none" viewBox="0 0 172 172"><g fill="none" stroke-width="none" stroke-miterlimit="10" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode:normal"><path d="M0 172V0h172v172z"/><path d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z" fill="currentColor" stroke-width="1"/></g></svg>
								  </div>
								  <span class="select-none"> Search</span>
							</label>
						</div>
						<br>
						<br>

						<p>
							<b>controls:</b>
							"{{ toggleControls }}"
						</p>
					</section>
				</div>

				<div class="col-span-3 p-4">
					<p class="subtitle">Pagination</p>
					<p class="has-text-grey-light">default(pagination::)</p>
					<input type="text" class="input" v-model="pagination" disabled>

					<div class="flex items-center mr-4 mb-4 float-left">
						<input id="radio1" type="radio" name="radio" class="hidden" value="pagination:1" v-model="pagination" />
						<label for="radio1" class="flex items-center cursor-pointer">
							<span class="w-4 h-4 inline-block mr-1 border border-grey"></span>
						1</label>
					</div>

					<div class="flex items-center mr-4 mb-4 float-left">
						<input id="radio2" type="radio" name="radio" class="hidden" value="pagination:2" v-model="pagination" />
						<label for="radio2" class="flex items-center cursor-pointer">
							<span class="w-4 h-4 inline-block mr-1 border border-grey"></span>
						2</label>
					</div>

					<div class="flex items-center mr-4 mb-4 float-left">
						<input id="radio3" type="radio" name="radio" class="hidden" value="pagination::" v-model="pagination" />
						<label for="radio3" class="flex items-center cursor-pointer">
							<span class="w-4 h-4 inline-block mr-1 border border-grey"></span>
						24</label>
					</div>

					<div class="flex items-center mr-4 mb-4 float-left">
						<input id="radio4" type="radio" name="radio" class="hidden" value="pagination:50" v-model="pagination" />
						<label for="radio4" class="flex items-center cursor-pointer">
							<span class="w-4 h-4 inline-block mr-1 border border-grey"></span>
						50</label>
					</div>

					<div class="flex items-center mr-4 mb-4 float-left">
						<input id="radio5" type="radio" name="radio" class="hidden" value="pagination:100" v-model="pagination" />
						<label for="radio5" class="flex items-center cursor-pointer">
							<span class="w-4 h-4 inline-block mr-1 border border-grey"></span>
						100</label>
					</div>

					<div class="flex items-center mr-4 mb-4 float-left">
						<input id="radio6" type="radio" name="radio" class="hidden" value="pagination:200" v-model="pagination" />
						<label for="radio6" class="flex items-center cursor-pointer">
							<span class="w-4 h-4 inline-block mr-1 border border-grey"></span>
						200</label>
					</div>

					<div class="flex items-center mr-4 mb-4 float-left">
						<input id="radio7" type="radio" name="radio" class="hidden" value="pagination:1000" v-model="pagination" />
						<label for="radio7" class="flex items-center cursor-pointer">
							<span class="w-4 h-4 inline-block mr-1 border border-grey"></span>
						1000</label>
					</div>

					<div class="flex items-center mr-4 mb-4 float-left">
						<input id="radio8" type="radio" name="radio" class="hidden" value="" v-model="pagination" />
						<label for="radio8" class="flex items-center cursor-pointer">
							<span class="w-4 h-4 inline-block mr-1 border border-grey"></span>
						off</label>
					</div>

				</div>

			</div>
		</div>
		<hr>
		<vubular-data-browser-demo
				:fields="fields"
				:hero="hero"
				:loading="false"
				controls="create:/create"/>
		<hr>
		<vubular-data-browser-api/>
	</div>
</template>

<script>
import VubularDataBrowserDemo from "../demo/VubularDataBrowserDemo.vue";
import VubularDataBrowserApi from "../api/VubularDataBrowserApi.vue";
export default {
	name: 'VubularDataBrowserExample',
	components: { VubularDataBrowserDemo, VubularDataBrowserApi },
	data() {
		return {
			fields: "index,name,gender",
			hideHero: 'hidden',
			checkboxCustom: 'Show',
			// controls: "create::,archive::,pagination::",
			checkboxGroup: ['search'],
			pagination: 'pagination::',
			togglePagination: true,
			toggleAllControls: true,
			heroDetails: {
				title: 'Your Title',
				subtitle: 'Your longer subtitle details'
			}
		}
	},
	computed: {
		returnData() {
			return this.item;
		},
		hideControls() { return (this.toggleAllControls == true) ? 'hide' : this.toggleControls; },
		toggleControls() {
			let controls = this.checkboxGroup.concat(this.pagination);
			let a = controls.toString();
			return (this.toggleAllControls == true) ? 'hide' : a;
		},
		toggleHero() {
			return (this.hideHero == 'hidden') ? 'hide' : this.hero;
		},
		hero() {
			return {
				icon: 'fas fa-list',
				title: this.heroDetails.title,
				subtitle: this.heroDetails.subtitle
			}
		},
		test() {
			return this.checkboxGroup.concat(this.pagination);
		}
	}
}
</script>
<style scoped>
	.px50 { padding-left: 50px; padding-right: 50px; }
	.px5 { padding-left: 5px; padding-right: 5px; }
	.custom-label input:checked + svg {
		display: block !important;
	}

	input[type="radio"] + label span {
		transition: background .2s,
		  transform .2s;
	}

	input[type="radio"]:checked + label span {
	  background-color: #1F9D55;
	  box-shadow: 0px 0px 0px 2px white inset;
	}

	input[type="radio"]:checked + label{
	   color: #1F9D55;
	}
</style>