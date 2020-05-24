<template>
	<div class="addTask">
		<ui-input label="Enter task here..." placeholder="text" :value="this.inputValue" />
		<ui-button
			primary
			class="button"
			title="Add"
		/>
	</div>
</template>

<script lang="ts">
	import Vue from "vue";
	
	export default Vue.extend({
		name: "AddTask",
		data () {
			return {
				inputValue: ''
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
