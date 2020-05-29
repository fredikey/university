<template>
	<div class="column">
		<h2 class="column-title">
			{{ title }}
			({{ tasks.length }})
		</h2>
		<div class="column-scrollable">
			<Task v-for="item in tasks" :key="item.id" :data="item"/>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from "vue";
	import Task from './Task.vue'
	import {TaskStatus, ITask} from '@/lib/types'
	export default Vue.extend({
		name: "Column",
		props: {
			title: String,
			status: String as () => TaskStatus
		},
		components: {
			Task
		},
		computed: {
			tasks() {
				return this.$store.getters.tasksByStatus(this.status) as ITask[]
			}
		}
	});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.column {
		width: 350px;
		@include spacing(yellow, left);
		@include spacing(yellow, right);
		border-right: 1px solid $color-default;
		height: 650px;
		
		&:first-of-type {
			margin-left: 0;
		}
		&:last-of-type {
			margin-right: 0;
			border-right: none;
		}
	}
	.column-scrollable {
		height: 100%;
		overflow-y: auto;
		&::-webkit-scrollbar {
			display: none;
		}
	}
	
	.title {
		@include spacing(green, bottom);
		@include text(h2);
	}
</style>
