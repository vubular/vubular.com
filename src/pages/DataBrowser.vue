<template>
	<div>
		<i class="fa fa-info-circle"></i>
		You can <plain v-if="!updateProps">start</plain><plain v-else>stop</plain>
		updating properties by clicking here:
		<button @click="updateProps=!updateProps" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold ml-2 py-1 px-2 border border-gray-400 rounded shadow">
			<plain v-if="!updateProps">Show</plain>
			<plain v-else>Hide</plain>
			properties
		</button>

		<div v-show="updateProps" class="mb-8">
			<div class="grid grid-cols-12">
				<div class="col-span-3 p-4">
					<div class="max-w-sm w-full lg:max-w-full lg:flex">
						<div class="border rounded border-gray-500 lg:border-gray-400 bg-white p-4 flex flex-col justify-between leading-normal">
							<div class="mb-8">
								<p class="text-sm text-gray-600 flex items-center mb-2">
									<i class="fa fa-heading text-gray-500 mr-3"></i>
									Hero property
								</p>
								<p class="text-gray-700 text-base">Provide details of what is being browsed with a hero.</p>
							</div>
							<div>
								<label class="block text-gray-700 text-sm font-bold" for="title" style="margin-bottom: 5px;">
									Hide
								</label>
								<div @click="hideProp('hero')" class="bg-white shadow w-6 h-6 p-1 flex justify-center items-center mr-2 cursor-pointer">
									<i v-if="String(hero) && hero=='hide'" class="fa fa-check text-green-400"></i>
								</div>
								<div class="mb-2">
									<label class="block text-gray-700 text-sm font-bold" for="title" style="margin-bottom: 5px;">
										Icon
									</label>
									<input class="appearance-none border rounded py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Title" v-model="heroIcon">
								</div>
								<div class="mb-2">
									<label class="block text-gray-700 text-sm font-bold" for="title" style="margin-bottom: 5px;">
										Title
									</label>
									<input class="appearance-none border rounded py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Title" v-model="heroTitle">
								</div>
								<div>
									<label class="block text-gray-700 text-sm font-bold" for="textarea" style="margin-bottom: 5px;">
										Subtitle
									</label>
									<textarea class="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="textarea" type="text" placeholder="Textarea" v-model="heroSubtitle"></textarea>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-span-3 p-4">
					<div class="max-w-sm w-full lg:max-w-full lg:flex">
						<div class="border rounded border-gray-500 lg:border-gray-400 bg-white p-4 flex flex-col justify-between leading-normal">
							<div class="mb-8">
								<p class="text-sm text-gray-600 flex items-center mb-2">
									<i class="fa fa-sliders-h text-gray-500 mr-3"></i>
									Controls property
								</p>
								<p class="text-gray-700 text-base">Adapt controls to your context or hide them if there is no use.</p>
							</div>
							<div>
								<label class="block text-gray-700 text-sm font-bold" for="title" style="margin-bottom: 5px;">
									Hide
								</label>
								<div @click="hideProp('controls')" class="bg-white shadow w-6 h-6 p-1 flex justify-center items-center mr-2 cursor-pointer">
									<i v-if="String(controls) && controls=='hide'" class="fa fa-check text-green-400"></i>
								</div>
								<div class="mb-2">
									<label class="block text-gray-700 text-sm font-bold" for="title" style="margin-bottom: 5px;">
										Create
									</label>
									<input class="appearance-none border rounded py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Title" v-model="controlsCreate">
								</div>
								<div class="mb-2">
									<label class="block text-gray-700 text-sm font-bold" for="title" style="margin-bottom: 5px;">
										Archive
									</label>
									<input class="appearance-none border rounded py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Title" v-model="controlsArchive">
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-span-3 p-4">
					<div class="max-w-sm w-full lg:max-w-full lg:flex">
						<div class="border rounded border-gray-500 lg:border-gray-400 bg-white p-4 flex flex-col justify-between leading-normal">
							<div class="mb-8">
								<p class="text-sm text-gray-600 flex items-center mb-2">
									<i class="fa fa-ellipsis-h text-gray-500 mr-3"></i>
									Pagination property
								</p>
								<p class="text-gray-700 text-base">Pagination or not, that's the question.</p>
							</div>
							<div>
								<label class="block text-gray-700 text-sm font-bold" for="title" style="margin-bottom: 5px;">
									Hide
								</label>
								<div @click="hideProp('pagination')" class="bg-white shadow w-6 h-6 p-1 flex justify-center items-center mr-2 cursor-pointer">
									<i v-if="String(pagination) && pagination=='hide'" class="fa fa-check text-green-400"></i>
								</div>
								<div class="mb-2">
									<label class="block text-gray-700 text-sm font-bold" for="title" style="margin-bottom: 5px;">
										Per page
									</label>
									<input class="appearance-none border rounded py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Title" v-model="paginationPerPage">
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-span-3 p-4">
					<div class="max-w-sm w-full lg:max-w-full lg:flex">
						<div class="border rounded border-gray-500 lg:border-gray-400 bg-white p-4 flex flex-col justify-between leading-normal">
							<div class="mb-8">
								<p class="text-sm text-gray-600 flex items-center mb-2">
									<i class="fa fa-eye text-gray-500 mr-3"></i>
									View property
								</p>
								<p class="text-gray-700 text-base">See what you get, or get what you see. Show it as a table, grid or list.</p>
							</div>
							<div>
								<label class="block text-gray-700 text-sm font-bold" for="title" style="margin-bottom: 5px;">
									Compact
								</label>
								<div @click="viewToggle('compact')" class="bg-white shadow w-6 h-6 p-1 flex justify-center items-center mr-2 cursor-pointer">
									<i v-if="view.includes('compact')" class="fa fa-check text-green-400"></i>
								</div>
								<label class="block text-gray-700 text-sm font-bold" for="title" style="margin-bottom: 5px;">
									Docked
								</label>
								<div @click="viewToggle('docked')" class="bg-white shadow w-6 h-6 p-1 flex justify-center items-center mr-2 cursor-pointer">
									<i v-if="view.includes('docked')" class="fa fa-check text-green-400"></i>
								</div>
								<label class="block text-gray-700 text-sm font-bold" for="title" style="margin-bottom: 5px;">
									Bordered
								</label>
								<div @click="viewToggle('bordered')" class="bg-white shadow w-6 h-6 p-1 flex justify-center items-center mr-2 cursor-pointer">
									<i v-if="view.includes('bordered')" class="fa fa-check text-green-400"></i>
								</div>
								<label class="block text-gray-700 text-sm font-bold" for="title" style="margin-bottom: 5px;">
									View
								</label>
								<div class="inline-block relative w-full">
									<select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
										<option>Table</option>
										<option>Grid</option>
										<option>List</option>
									</select>
									<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 text-gray-700">
										<i class="fa fa-angle-down"></i>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div>

		</div>
		<hr>
		<vubular-data-browser-demo
				:fields="fields"
				:hero="hero"
				:view="view"
				:loading="false"
				:controls="controls"/>
		<hr>
		<vubular-data-browser-api/>
	</div>
</template>
<script>
	import { Plain } from "@vubular/elements";
	import VubularDataBrowserDemo from "../demo/VubularDataBrowserDemo.vue";
	import VubularDataBrowserApi from "../api/VubularDataBrowserApi.vue";
	export default {
		name: "DataBrowserPage",
		components: { Plain, VubularDataBrowserDemo, VubularDataBrowserApi },
		data() {
			return {
				fields: "index,name,gender",
				updateProps: false,

				hero: null,
				heroIcon: "fa fa-list",
				heroTitle: "Browse Data",
				heroSubtitle: "Analyze sort and observe in multiple views",

				controls: null,
				controlsCreate: "create:/create-route",
				controlsArchive: "archive:/archive-route",

				view: "table",

				pagination: null,
				paginationPerPage: 10,

			}
		},
		beforeMount() {
			this.setHero();
			this.setControls();
		},
		methods: {
			hideProp(prop) {
				if(this[prop]=="hide") {
					switch(prop) {
						case "hero": this.setHero(); break;
						case "controls": this.setControls(); break;
					}
				} else {
					this[prop] = "hide";
				}
			},
			setHero() {
				this.hero = {
					icon: this.heroIcon,
					title: this.heroTitle,
					subtitle: this.heroSubtitle
				}
			},
			setControls() {
				this.controls = "pagination:"+this.paginationPerPage+", " + this.controlsCreate.concat(",", this.controlsArchive);
			},
			viewToggle(string) {
				if(this.view.includes(string)) {
					this.view = this.view.replace(string, "");
				} else {
					this.view = this.view.concat(string);
				}
			}
		},
		computed: {
			returnData() {
				return this.item;
			}
		},
		watch: {
			heroIcon() { if(this.hero!="hide") { this.setHero(); } },
			heroTitle() { if(this.hero!="hide") { this.setHero(); } },
			heroSubtitle() { if(this.hero!="hide") { this.setHero(); } },
			controlsCreate() { if(this.controls!="hide") { this.setControls(); } },
			controlsArchive() { if(this.controls!="hide") { this.setControls(); } },
			paginationPerPage() { if(this.controls!="hide") { this.setControls(); } },
		}
	}
</script>