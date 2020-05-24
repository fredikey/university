<template>
	<div class="column">
		{{ title }}
		<Task />
	</div>
</template>

<script lang="ts">
	import Vue from "vue";
	import Task from './Task.vue'
	import {TaskType} from '@/lib/types'
	export default Vue.extend({
		name: "Column",
		components: {
			Task
		},
		props: {
			title: String,
			status: {
				type: String as () => TaskType
			}
		}
	});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.column {
	
	}
</style>
