<template>
	<div @drop="onDrop" @dragover="onDragOver" class="column">
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
	import {SET_TASK_STATUS} from '@/store/constants'
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
		},
		methods: {
			onDragOver (evt: DragEvent) {
				evt.preventDefault()
			},
			onDrop (evt: DragEvent) {
				const id = evt.dataTransfer?.getData("task/id");
				if (id) {
					const resId = JSON.parse(id) as number
					this.$store.dispatch(SET_TASK_STATUS, {id: resId, status: this.status})
				}
			}
		}
	});
</script>

<style scoped lang="scss">
	.column {
		width: 350px;
		border-right: 1px solid $color-default;
		max-height: 65vh;
		@include mediumTablet {
			max-height: 60vh;
		}
		&:first-of-type {
			margin-left: 0;
			@include spacing(yellow, right, padding);
			@include spacing(yellow, right);
			
		}
		&:nth-of-type(2) {
			@include spacing(yellow, right, padding);
		}
		
		&:last-of-type {
			@include spacing(yellow, left);
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
	
	.column-title {
		@include spacing(orange, bottom);
		@include text(h2);
	}
</style>
