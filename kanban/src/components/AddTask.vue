<template>
	<div class="addTask" aria-labelledby="Add task">
		<ui-input
			@keydown.enter="submit"
			label="Enter task here..."
			placeholder="text"
			v-model="inputValue"
		/>
		<ui-button
			primary
			class="button"
			title="Add"
			@click="submit"
		/>
	</div>
</template>

<script lang="ts">
	import Vue from "vue";
	import {ADD_TASK} from '@/store/constants'
	
	export default Vue.extend({
		name: "AddTask",
		data () {
			return {
				inputValue: ''
			}
		},
		methods: {
			submit () {
				const val = this.inputValue.trim()
				if (val !== '') {
					this.$store.dispatch(ADD_TASK, val)
					this.inputValue = ''
				}
			}
		}
	});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.addTask {
		margin-top: 10px;
		margin-bottom: 10px;
		display: flex;
		align-items: flex-end;
	}
	.button {
		margin-left: 20px;
	}
</style>
