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
        			<td class="p-2 border-t border-gray-300 font-mono text-xs text-purple-700 whitespace-no-wrap">brand</td>
        			<td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-pre">Provide your brand name, logo and url</td>
        			<td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-pre">Object</td>
        			<td class="p-2 border-t border-gray-300 font-mono text-xs">––</td>
        			<td class="p-2 border-t border-gray-300 font-mono text-xs">––</td>
        		</tr>
        		<tr>
        			<td class="p-2 border-t border-gray-300 font-mono text-xs text-purple-700 whitespace-no-wrap">account</td>
        			<td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-pre">Pass down currently logged in user</td>
        			<td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-pre">Object</td>
        			<td class="p-2 border-t border-gray-300 font-mono text-xs">––</td>
        			<td class="p-2 border-t border-gray-300 font-mono text-xs">––</td>
        		</tr>
        		<tr>
        			<td class="p-2 border-t border-gray-300 font-mono text-xs text-purple-700 whitespace-no-wrap">preferences</td>
        			<td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-pre">User preferences like, theme, language, date format</td>
        			<td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-pre">Object</td>
        			<td class="p-2 border-t border-gray-300 font-mono text-xs">––</td>
        			<td class="p-2 border-t border-gray-300 font-mono text-xs">––</td>
        		</tr>
        		<tr>
        			<td class="p-2 border-t border-gray-300 font-mono text-xs text-purple-700 whitespace-no-wrap">navigation</td>
        			<td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-pre">
        				An array of navigation or nested navigation containing objects with label, icon, path and navigation.
        			</td>
        			<td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-pre">Array</td>
        			<td class="p-2 border-t border-gray-300 font-mono text-xs">––</td>
        			<td class="p-2 border-t border-gray-300 font-mono text-xs">––</td>
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