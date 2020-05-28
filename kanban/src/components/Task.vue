<template>
	<div class="task">
		<h4 class="task-title">Task {{ data.id }}</h4>
		<p class="task-description">
			{{ data.description }}
		</p>
	</div>
</template>

<script lang="ts">
	import Vue from "vue";
	import {ITask} from '@/lib/types'
	
	export default Vue.extend({
		name: "Task",
		props: {
			msg: String,
			data: {
				type: Object as () => ITask
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
		@include spacing(orange, right);
		@include spacing(red, top, padding);
		@include spacing(red, bottom, padding);
		@include spacing(orange, left, padding);
		@include spacing(orange, right, padding);
		background-color: #34495e;
		border-radius: 10px;
	}
	.task-title {
		@include text(h4);
	}
	.task-description {
		@include text(big);
		color: $color-gray;
	}
</style>
