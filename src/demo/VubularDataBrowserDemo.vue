<template>
	<vubular-data-browser
		:data="data"
		:fields="fields"
		:hero="hero"
		:controls="controls"
		:isLoading="loading">
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
</template>
<script>
	import data from "../data.js";
	export default {
		name: "VubularDataBrowserDemo",
		props: ["fields", "hero", "controls", "loading"],
		computed: {
			data() {
				return data.default;
			}
		}
	}
</script>