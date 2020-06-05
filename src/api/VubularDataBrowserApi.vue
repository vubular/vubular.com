<template>
	<div>
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
		name: "VubularDataBrowserApi"
	}
</script>