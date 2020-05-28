<template>
	<div class="column">
		<h3 class="title">
			{{ title }}
		</h3>
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
		width: 350px;
		margin-right: 10px;
		margin-left: 10px;
		border-right: 1px solid $color-default;
		height: 500px;
		
		&:first-of-type {
			margin-left: 0;
		}
		&:last-of-type {
			margin-right: 0;
			border-right: none;
		}
	}
	
	.title {
		margin-bottom: 20px;
	}
</style>
