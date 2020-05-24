<template>
	<div class="task">
		Task
	</div>
</template>

<script lang="ts">
	import Vue from "vue";
	
	export default Vue.extend({
		name: "Task",
		props: {
			msg: String
		}
	});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.task {
	
	}
</style>
