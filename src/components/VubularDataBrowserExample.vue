<template>
    <div>
        <div>
        	<div class="text-center py-4 lg:px-4">
        		<a class="w-full p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex hover:text-indigo-100" role="alert" tag="div" href="//github.com/vubular">
        			<span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">New</span>
        			<span class="font-semibold mr-2 text-left flex-auto">Check out other components from Vubular github page.</span>
        			<svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
        		</a>
        	</div>
            <hr>

            <div class=" mb-8">
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
        </div>
        <!-- Vubular Data Browser #Component -->
        <div>
            <vubular-data-browser :data="fetchItems" fields="fields" :hero="toggleHero" :controls="toggleControls" :isLoading="false">
                <template v-slot:thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>GUID</th>
                        <th>Gender</th>
                    </tr>
                </template>
                <template v-slot:item="{ item }">
                    <tr>
                        <td>{{ item.fields._id }}</td>
                        <td>{{ item.fields.name }}</td>
                        <td>{{ item.fields.guid }}</td>
                        <td>{{ item.fields.gender }}</td>
                    </tr>
                </template>
            </vubular-data-browser>
        </div>

        <hr>

        <!-- #API -->
        <p class="text-indigo-700 text-2xl mb-4">#API</p>

        <p class="underline mb-2">Props</p>


        <table class="w-full text-left table-collapse">
        	<thead>
        		<tr>
        			<th class="text-sm font-semibold text-gray-700 p-2 bg-gray-100">Name</th> 
        			<th class="text-sm font-semibold text-gray-700 p-2 bg-gray-100">Description</th>
        			<th class="text-sm font-semibold text-gray-700 p-2 bg-gray-100">Type</th>
        			<th class="text-sm font-semibold text-gray-700 p-2 bg-gray-100">Values</th>
        			<th class="text-sm font-semibold text-gray-700 p-2 bg-gray-100">Default</th>
        		</tr>
        	</thead> 
        	<tbody class="align-baseline">
        		<tr>
        			<td class="p-2 border-t border-gray-300 font-mono text-xs text-purple-700 whitespace-no-wrap">hero</td> 
        			<td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-pre">Define your Hero computed property with icon, title and subtitle</td>
        			<td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-pre">Object, String</td>
        			<td class="p-2 border-t border-gray-300 font-mono text-xs">––</td>
        			<td class="p-2 border-t border-gray-300 font-mono text-xs">––</td>
        		</tr> 
        		<tr>
        			<td class="p-2 border-t border-gray-300 font-mono text-xs text-purple-700 whitespace-no-wrap">controls</td> 
        			<td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-pre">Choose what to be seen or not, like</td>
        			<td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-pre">String</td>
        			<td class="p-2 border-t border-gray-300 font-mono text-xs">
        				<span class="bg-red-200 m-1 p-1 font-mono text-xs rounded inline-block float-left">create::</span> 
        				<span class="bg-red-200 m-1 p-1 font-mono text-xs rounded inline-block float-left">archive::</span> 
        				<span class="bg-red-200 m-1 p-1 font-mono text-xs rounded inline-block float-left">pagination::</span>
        			</td>
        			<td class="p-2 border-t border-gray-300 font-mono text-xs">"create::,search,archive::,pagination::"</td>
        		</tr>
        		<tr>
        			<td class="p-2 border-t border-gray-300 font-mono text-xs text-purple-700 whitespace-no-wrap">view</td> 
        			<td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-pre">Table view</td>
        			<td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-pre">String</td>
        			<td class="p-2 border-t border-gray-300 font-mono text-xs">
        				<span class="bg-red-200 m-1 p-1 font-mono text-xs rounded inline-block float-left">table</span> 
        				<span class="bg-red-200 m-1 p-1 font-mono text-xs rounded inline-block float-left">list</span>
        				<span class="bg-red-200 m-1 p-1 font-mono text-xs rounded inline-block float-left">grid</span> 
        			</td>
        			<td class="p-2 border-t border-gray-300 font-mono text-xs">"table"</td>
        		</tr>
        		<tr>
        			<td class="p-2 border-t border-gray-300 font-mono text-xs text-purple-700 whitespace-no-wrap">data</td> 
        			<td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-pre">
        				Data return as object or array, <span class="font-mono text-xs text-red-500 rounded inline-block">required: true</span>
        			</td>
        			<td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-pre">Array, Object</td>
        			<td class="p-2 border-t border-gray-300 font-mono text-xs">––</td>
        			<td class="p-2 border-t border-gray-300 font-mono text-xs">[]</td>
        		</tr>
        		<tr>
        			<td class="p-2 border-t border-gray-300 font-mono text-xs text-purple-700 whitespace-no-wrap">fields</td> 
        			<td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-pre">Set fields as string, to be fetch from #API</td>
        			<td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-pre">String</td>
        			<td class="p-2 border-t border-gray-300 font-mono text-xs">––</td>
        			<td class="p-2 border-t border-gray-300 font-mono text-xs">"+,id,name,created_at,updated_at"</td>
        		</tr>
        		<tr>
        			<td class="p-2 border-t border-gray-300 font-mono text-xs text-purple-700 whitespace-no-wrap">isLoading</td> 
        			<td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-pre">Loading UI (circle) while fetching data.</td>
        			<td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-pre">Boolean</td>
        			<td class="p-2 border-t border-gray-300 font-mono text-xs">
        				<span class="bg-red-200 m-1 p-1 font-mono text-xs rounded inline-block float-left">true</span>
        				<span class="bg-red-200 m-1 p-1 font-mono text-xs rounded inline-block float-left">false</span> 
        			</td>
        			<td class="p-2 border-t border-gray-300 font-mono text-xs">
        				<span class="bg-red-200 m-1 p-1 font-mono text-xs rounded inline-block float-left">true</span>
        			</td>
        		</tr>
        		<tr>
        			<td class="p-2 border-t border-gray-300 font-mono text-xs text-purple-700 whitespace-no-wrap">total</td> 
        			<td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-pre">How many pages of pagination to be visible</td>
        			<td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-pre">Number</td>
        			<td class="p-2 border-t border-gray-300 font-mono text-xs">––</td>
        			<td class="p-2 border-t border-gray-300 font-mono text-xs">––</td>
        		</tr>
        		<tr>
        			<td class="p-2 border-t border-gray-300 font-mono text-xs text-purple-700 whitespace-no-wrap">label</td> 
        			<td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-pre">Label</td>
        			<td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-pre">String</td>
        			<td class="p-2 border-t border-gray-300 font-mono text-xs">––</td>
        			<td class="p-2 border-t border-gray-300 font-mono text-xs">"Item"</td>
        		</tr>
    		</tbody>
    	</table>


    </div>
</template>

<script>
export default {
    name: 'VubularDataBrowserExample',
    mounted() {
        this.fetchItems = this.item;
    },
    data() {
        return {
            fetchItems: [],
            fields: "index,name,gender",
            item: [
                  {
                    "_id": "5ebfe49106f50a957197205a",
                    "index": 0,
                    "guid": "c963ee25-746e-4d1b-b1e4-bdce5621f780",
                    "isActive": true,
                    "balance": "$3,659.66",
                    "picture": "http://placehold.it/32x32",
                    "age": 21,
                    "eyeColor": "green",
                    "name": "Lowe Lloyd",
                    "gender": "male"
                  },
                  {
                    "_id": "5ebfe491ed608a5efbe4946c",
                    "index": 1,
                    "guid": "a67d333c-9420-4656-b311-9ceef717fbaa",
                    "isActive": true,
                    "balance": "$2,174.50",
                    "picture": "http://placehold.it/32x32",
                    "age": 23,
                    "eyeColor": "brown",
                    "name": "Kristy Schmidt",
                    "gender": "female"
                  },
                  {
                    "_id": "5ebfe49174fefbfcaf413211",
                    "index": 2,
                    "guid": "ab030775-4058-4b77-a333-6cf3ff2fdaca",
                    "isActive": true,
                    "balance": "$2,986.51",
                    "picture": "http://placehold.it/32x32",
                    "age": 34,
                    "eyeColor": "brown",
                    "name": "Schroeder Anthony",
                    "gender": "male"
                  },
                  {
                    "_id": "5ebfe49123800a1aa0f16f9e",
                    "index": 3,
                    "guid": "73807203-c331-4232-aba3-9fd3696169a9",
                    "isActive": true,
                    "balance": "$1,502.87",
                    "picture": "http://placehold.it/32x32",
                    "age": 36,
                    "eyeColor": "brown",
                    "name": "Florence West",
                    "gender": "female"
                  },
                  {
                    "_id": "5ebfe49118d97cdeeb90254b",
                    "index": 4,
                    "guid": "43973f24-e831-4eeb-9bc5-b36c6f4a5e69",
                    "isActive": true,
                    "balance": "$3,985.15",
                    "picture": "http://placehold.it/32x32",
                    "age": 36,
                    "eyeColor": "blue",
                    "name": "Dodson Duffy",
                    "gender": "male"
                  },
                  {
                    "_id": "5ebfe491bbf476f9c2895814",
                    "index": 5,
                    "guid": "80857b3c-aaf6-4fbb-ae7d-1691d242c001",
                    "isActive": true,
                    "balance": "$2,931.31",
                    "picture": "http://placehold.it/32x32",
                    "age": 21,
                    "eyeColor": "blue",
                    "name": "Amie Hill",
                    "gender": "female"
                  },
                  {
                    "_id": "5ebfe491cb586f93a34a380d",
                    "index": 6,
                    "guid": "e26ebebd-de21-43d4-a1c4-36f36e970ef0",
                    "isActive": true,
                    "balance": "$1,029.99",
                    "picture": "http://placehold.it/32x32",
                    "age": 22,
                    "eyeColor": "brown",
                    "name": "Candy Conner",
                    "gender": "female"
                  },
                  {
                    "_id": "5ebfe491727229ab0417416a",
                    "index": 7,
                    "guid": "8f1ce199-8df4-442a-9c19-d4f2b239b31e",
                    "isActive": false,
                    "balance": "$3,309.03",
                    "picture": "http://placehold.it/32x32",
                    "age": 27,
                    "eyeColor": "blue",
                    "name": "Erin Wynn",
                    "gender": "female"
                  },
                  {
                    "_id": "5ebfe491f2f1bf3f95fbd651",
                    "index": 8,
                    "guid": "7ebfd1a2-8eeb-457b-be24-d1330aef8c57",
                    "isActive": true,
                    "balance": "$1,278.97",
                    "picture": "http://placehold.it/32x32",
                    "age": 40,
                    "eyeColor": "green",
                    "name": "Margo Price",
                    "gender": "female"
                  },
                  {
                    "_id": "5ebfe491ec967c3e5b2d6a26",
                    "index": 9,
                    "guid": "55c6407e-ec26-4017-b549-449db5b6b8bf",
                    "isActive": true,
                    "balance": "$1,128.64",
                    "picture": "http://placehold.it/32x32",
                    "age": 38,
                    "eyeColor": "blue",
                    "name": "Cortez Mclean",
                    "gender": "male"
                  },
                  {
                    "_id": "5ebfe4915eadfa30a4277fae",
                    "index": 10,
                    "guid": "f8ae3bf6-2eeb-46bc-920f-3ff36131c9da",
                    "isActive": false,
                    "balance": "$3,075.02",
                    "picture": "http://placehold.it/32x32",
                    "age": 40,
                    "eyeColor": "brown",
                    "name": "Kennedy Combs",
                    "gender": "male"
                  },
                  {
                    "_id": "5ebfe4911412c8fa178f6236",
                    "index": 11,
                    "guid": "e8ea0299-1bc3-4c0b-9ed4-a08042945c18",
                    "isActive": true,
                    "balance": "$2,389.66",
                    "picture": "http://placehold.it/32x32",
                    "age": 26,
                    "eyeColor": "blue",
                    "name": "Day Camacho",
                    "gender": "male"
                  },
                  {
                    "_id": "5ebfe491306e842a4264dd60",
                    "index": 12,
                    "guid": "b3685dfb-5951-448e-8707-c6e57b9ffa21",
                    "isActive": false,
                    "balance": "$2,532.24",
                    "picture": "http://placehold.it/32x32",
                    "age": 26,
                    "eyeColor": "green",
                    "name": "Lottie Hampton",
                    "gender": "female"
                  },
                  {
                    "_id": "5ebfe491292bf2306b7edc08",
                    "index": 13,
                    "guid": "dd439894-cc69-43ac-a298-b9764b47e2e2",
                    "isActive": true,
                    "balance": "$2,482.14",
                    "picture": "http://placehold.it/32x32",
                    "age": 34,
                    "eyeColor": "brown",
                    "name": "Kirkland Mooney",
                    "gender": "male"
                  },
                  {
                    "_id": "5ebfe4910dcad736f708140a",
                    "index": 14,
                    "guid": "0deb78cc-8a24-4a35-8a2d-0b9e3ce5513d",
                    "isActive": true,
                    "balance": "$3,721.17",
                    "picture": "http://placehold.it/32x32",
                    "age": 37,
                    "eyeColor": "brown",
                    "name": "April Butler",
                    "gender": "female"
                  },
                  {
                    "_id": "5ebfe4917dcaf538e6753ff3",
                    "index": 15,
                    "guid": "ff3878db-8242-4ccb-87d3-d22e1558dd01",
                    "isActive": true,
                    "balance": "$1,650.72",
                    "picture": "http://placehold.it/32x32",
                    "age": 20,
                    "eyeColor": "brown",
                    "name": "Horton Nunez",
                    "gender": "male"
                  },
                  {
                    "_id": "5ebfe4910d18c83b26a4e2ab",
                    "index": 16,
                    "guid": "fc42256a-30af-43f1-baf5-3a0f10b5a336",
                    "isActive": true,
                    "balance": "$1,855.86",
                    "picture": "http://placehold.it/32x32",
                    "age": 20,
                    "eyeColor": "green",
                    "name": "Haley Chase",
                    "gender": "female"
                  },
                  {
                    "_id": "5ebfe49138d7697bd84330e0",
                    "index": 17,
                    "guid": "05ff8ce0-1977-4003-ac33-a709e58d5350",
                    "isActive": false,
                    "balance": "$3,487.21",
                    "picture": "http://placehold.it/32x32",
                    "age": 25,
                    "eyeColor": "blue",
                    "name": "Bruce Roach",
                    "gender": "male"
                  },
                  {
                    "_id": "5ebfe491705ed2beb6eace92",
                    "index": 18,
                    "guid": "e0936d23-1fb1-46a4-9f0c-4e0dfb2da4a2",
                    "isActive": false,
                    "balance": "$1,215.21",
                    "picture": "http://placehold.it/32x32",
                    "age": 32,
                    "eyeColor": "green",
                    "name": "Pickett Waller",
                    "gender": "male"
                  },
                  {
                    "_id": "5ebfe4914654c5572d655aef",
                    "index": 19,
                    "guid": "ffb7d338-9e1e-4f4b-8434-fe4e8d18212e",
                    "isActive": true,
                    "balance": "$3,018.62",
                    "picture": "http://placehold.it/32x32",
                    "age": 33,
                    "eyeColor": "green",
                    "name": "Natalie Kennedy",
                    "gender": "female"
                  },
                  {
                    "_id": "5ebfe491aec6d5aec5bd4fe1",
                    "index": 20,
                    "guid": "bfb0c84a-612f-4e44-a7ce-c219dd08ebd6",
                    "isActive": false,
                    "balance": "$3,941.64",
                    "picture": "http://placehold.it/32x32",
                    "age": 35,
                    "eyeColor": "blue",
                    "name": "Hardin Joyner",
                    "gender": "male"
                  },
                  {
                    "_id": "5ebfe49175748ba2c839ff9f",
                    "index": 21,
                    "guid": "34b2ea91-d3d0-45ab-b231-96e08b1998d1",
                    "isActive": true,
                    "balance": "$2,199.29",
                    "picture": "http://placehold.it/32x32",
                    "age": 27,
                    "eyeColor": "blue",
                    "name": "Katheryn Rowe",
                    "gender": "female"
                  },
                  {
                    "_id": "5ebfe4916ad66b771251d478",
                    "index": 22,
                    "guid": "29d218ef-7c8b-44f7-8a05-7a7c0e81b4f1",
                    "isActive": true,
                    "balance": "$2,807.51",
                    "picture": "http://placehold.it/32x32",
                    "age": 21,
                    "eyeColor": "blue",
                    "name": "Sherry Cannon",
                    "gender": "female"
                  },
                  {
                    "_id": "5ebfe491ca8655ccd2e9f6c4",
                    "index": 23,
                    "guid": "93877e5f-924e-4f0e-806c-4291c9b2ef59",
                    "isActive": false,
                    "balance": "$3,766.49",
                    "picture": "http://placehold.it/32x32",
                    "age": 36,
                    "eyeColor": "green",
                    "name": "Bradshaw Gamble",
                    "gender": "male"
                  },
                  {
                    "_id": "5ebfe4918fa6493749a62db7",
                    "index": 24,
                    "guid": "647b1bcc-f4bb-4712-aaf2-6851a3e4d96a",
                    "isActive": false,
                    "balance": "$1,189.69",
                    "picture": "http://placehold.it/32x32",
                    "age": 37,
                    "eyeColor": "brown",
                    "name": "Jillian Bolton",
                    "gender": "female"
                  },
                  {
                    "_id": "5ebfe4918c0c11a443a2f1e2",
                    "index": 25,
                    "guid": "e511d653-74de-4bc6-9489-500faad43d35",
                    "isActive": true,
                    "balance": "$2,931.28",
                    "picture": "http://placehold.it/32x32",
                    "age": 39,
                    "eyeColor": "blue",
                    "name": "Morales Bradford",
                    "gender": "male"
                  },
                  {
                    "_id": "5ebfe491d8fef3e913c8dc87",
                    "index": 26,
                    "guid": "c88e2487-fc9b-40d7-b960-b911f051dd65",
                    "isActive": false,
                    "balance": "$1,979.96",
                    "picture": "http://placehold.it/32x32",
                    "age": 40,
                    "eyeColor": "green",
                    "name": "Hansen Fields",
                    "gender": "male"
                  },
                  {
                    "_id": "5ebfe49183cc59ff6e37a5b3",
                    "index": 27,
                    "guid": "4d5cbd38-bef2-471a-996c-15ef68f26d2b",
                    "isActive": true,
                    "balance": "$2,689.36",
                    "picture": "http://placehold.it/32x32",
                    "age": 37,
                    "eyeColor": "brown",
                    "name": "Toni Justice",
                    "gender": "female"
                  },
                  {
                    "_id": "5ebfe49181e8614709d476e6",
                    "index": 28,
                    "guid": "f3494382-11c7-49af-abbc-bb21a8a519ee",
                    "isActive": false,
                    "balance": "$3,531.70",
                    "picture": "http://placehold.it/32x32",
                    "age": 24,
                    "eyeColor": "brown",
                    "name": "Lizzie Thornton",
                    "gender": "female"
                  },
                  {
                    "_id": "5ebfe491a5850ee6d9ad57d6",
                    "index": 29,
                    "guid": "77563336-1273-444c-abbc-624ad2c42feb",
                    "isActive": true,
                    "balance": "$1,647.70",
                    "picture": "http://placehold.it/32x32",
                    "age": 38,
                    "eyeColor": "green",
                    "name": "Washington Harvey",
                    "gender": "male"
                  },
                  {
                    "_id": "5ebfe4918d13c093597b8ea0",
                    "index": 30,
                    "guid": "a0484820-5fe9-4914-b38a-d697f424d3c8",
                    "isActive": false,
                    "balance": "$2,080.85",
                    "picture": "http://placehold.it/32x32",
                    "age": 26,
                    "eyeColor": "blue",
                    "name": "Atkinson Hopper",
                    "gender": "male"
                  },
                  {
                    "_id": "5ebfe491018f1c5e3efa4052",
                    "index": 31,
                    "guid": "345418ec-0d8b-47de-96fb-05af7d324f12",
                    "isActive": false,
                    "balance": "$2,838.03",
                    "picture": "http://placehold.it/32x32",
                    "age": 23,
                    "eyeColor": "green",
                    "name": "Barber Burt",
                    "gender": "male"
                  },
                  {
                    "_id": "5ebfe491100a691b5522aee2",
                    "index": 32,
                    "guid": "c87b63db-21a2-4543-a794-0e6a569a6a13",
                    "isActive": false,
                    "balance": "$1,371.79",
                    "picture": "http://placehold.it/32x32",
                    "age": 34,
                    "eyeColor": "green",
                    "name": "Cathleen Wilcox",
                    "gender": "female"
                  },
                  {
                    "_id": "5ebfe491c430696be8bf5ddb",
                    "index": 33,
                    "guid": "00630af3-71a6-4188-babe-4a4d25ebbbad",
                    "isActive": false,
                    "balance": "$1,379.52",
                    "picture": "http://placehold.it/32x32",
                    "age": 21,
                    "eyeColor": "green",
                    "name": "Tonia Saunders",
                    "gender": "female"
                  },
                  {
                    "_id": "5ebfe4916618c9464623d55d",
                    "index": 34,
                    "guid": "dbeed24d-9b96-4463-93e4-6c09d2b29aad",
                    "isActive": false,
                    "balance": "$1,213.72",
                    "picture": "http://placehold.it/32x32",
                    "age": 39,
                    "eyeColor": "blue",
                    "name": "Jana Wagner",
                    "gender": "female"
                  },
                  {
                    "_id": "5ebfe4913f5e0e13fa1a4035",
                    "index": 35,
                    "guid": "142cd2bf-d2ba-4050-aa1e-1cecff2bf260",
                    "isActive": false,
                    "balance": "$2,957.33",
                    "picture": "http://placehold.it/32x32",
                    "age": 28,
                    "eyeColor": "brown",
                    "name": "Hart Fitzpatrick",
                    "gender": "male"
                  },
                  {
                    "_id": "5ebfe4916af03367900ea0d0",
                    "index": 36,
                    "guid": "8ddafd9e-13e1-4fb2-8e98-50cdf8c63e30",
                    "isActive": false,
                    "balance": "$1,209.00",
                    "picture": "http://placehold.it/32x32",
                    "age": 33,
                    "eyeColor": "blue",
                    "name": "Tamara Haney",
                    "gender": "female"
                  },
                  {
                    "_id": "5ebfe491ae87d269773a7c90",
                    "index": 37,
                    "guid": "9ec58dc8-8255-4a94-a601-81704721759e",
                    "isActive": false,
                    "balance": "$1,940.57",
                    "picture": "http://placehold.it/32x32",
                    "age": 28,
                    "eyeColor": "brown",
                    "name": "Adela Mccray",
                    "gender": "female"
                  },
                  {
                    "_id": "5ebfe491b5083a4f41e3e679",
                    "index": 38,
                    "guid": "5559500e-2fb2-4366-a774-a21402627e3f",
                    "isActive": true,
                    "balance": "$2,686.15",
                    "picture": "http://placehold.it/32x32",
                    "age": 26,
                    "eyeColor": "green",
                    "name": "Pruitt Armstrong",
                    "gender": "male"
                  },
                  {
                    "_id": "5ebfe49105e9fb444d64fe56",
                    "index": 39,
                    "guid": "d2b86f5f-8756-4e91-ad6d-f56156dd7659",
                    "isActive": true,
                    "balance": "$1,066.94",
                    "picture": "http://placehold.it/32x32",
                    "age": 26,
                    "eyeColor": "brown",
                    "name": "Theresa Carson",
                    "gender": "female"
                  }
                ],
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