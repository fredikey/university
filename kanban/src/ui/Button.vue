<template>
	<button
		:class="`button ${primary ? 'button_Primary' : ''}`"
		v-bind="$attrs"
		v-on="this.$listeners"
	>
		{{ title }}
	</button>
</template>

<script lang="ts">
	import Vue from "vue";
	
	export default Vue.extend({
		name: "Input",
		inheritAttrs: false,
		props: {
			title: String,
			primary: Boolean
		}
	});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.button {
		border: 1px solid $color-default;
		padding: 5px 10px;
		font-size: 16px;
		&_Primary {
			background-color: $color-default;
			color: $color-primary;
		}
	}
</style>
