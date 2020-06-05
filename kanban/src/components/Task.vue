<template>
	<div class="task" draggable="true" @dragstart="onDragStart">
		<div class="task-head">
			<h4 class="task-title">
				Task {{ data.id + 1 }}
				<span v-if="isProcess || isReady" class="task-title-user">
					({{ data.user }})
				</span>
			</h4>
			<span class="task-date" v-if="isProcess || isReady">
				{{ date }}
			</span>
		</div>
		<p class="task-description">
			{{ data.description }}
		</p>
		<div :class="`task-actions-container ${isReady ? 'task-actions-container_Date' : ''}`">
			<span class="task-date" v-if="isReady">
				Wasted: {{ wastedTime }}
			</span>
			<div class="task-actions">
				<ui-button
					title="edit"
				/>
				<ui-button
					v-if="!isReady"
					primary
					:title="isProcess ? 'ready' : 'start'"
					@click="ready"
				/>
				<ui-button
					v-else
					primary
					title="delete"
					@click="deleteTask"
				/>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from "vue";
	import {IProcessTask, IReadyTask, ITask} from '@/lib/types'
	import {DELETE_TASK, SET_TASK_STATUS} from '@/store/constants'
	import {formatDate, dateDiff} from '@/lib/utils'
	
	export default Vue.extend({
		name: "Task",
		props: {
			msg: String,
			data: Object as () => ITask
		},
		computed: {
			date () {
				return formatDate((this.data as IProcessTask).createdAt)
			},
			wastedTime () {
				return dateDiff((this.data as IReadyTask).createdAt, (this.data as IReadyTask).finishedAt)
			},
			isProcess () {
				return (this.data as IProcessTask).status === 'process'
			},
			isReady () {
				return (this.data as IReadyTask).status === 'ready'
			}
		},
		methods: {
			ready () {
				console.log(this.data.status)
				if (this.data.status === 'backlog') {
					this.$store.dispatch(SET_TASK_STATUS, {id: this.data.id, status: 'process'})
				} else {
					this.$store.dispatch(SET_TASK_STATUS, {id: this.data.id, status: 'ready'})
				}
			},
			deleteTask () {
				this.$store.dispatch(DELETE_TASK, {id: this.data.id})
			},
			onDragStart (evt: DragEvent) {
				evt.dataTransfer?.setData("task/id", JSON.stringify(this.data.id));
			}
		}
	});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.task {
		display: flex;
		flex-direction: column;
		@include spacing(orange, top);
		@include spacing(orange, bottom);
		@include spacing(red, top, padding);
		@include spacing(orange, bottom, padding);
		@include spacing(orange, left, padding);
		@include spacing(orange, right, padding);
		background-color: $color-back;
		border-radius: 10px;
	}
	.task-head {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.task-date {
		color: $color-always-white;
		@include text(small);
	}
	.task-title {
		@include text(h4);
		color: $color-always-white;
	}
	.task-title-user {
		@include text(h6);
	}
	.task-description {
		@include text(big);
		color: $color-always-gray;
	}
	.task-actions {
		display: flex;
		align-items: center;
	}
	.task-actions-container {
		display: flex;
		align-items: flex-end;
		width: 100%;
		justify-content: flex-end;
		
		&_Date {
			justify-content: space-between;
		}
	}
</style>
