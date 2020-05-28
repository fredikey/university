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
		@include spacing(orange, right, padding);
		@include spacing(orange, left, padding);
		@include spacing(red, top, padding);
		@include spacing(red, bottom, padding);
		@include text(big);
		min-width: 70px;
		&_Primary {
			@include text(big, accent);
			background-color: $color-default;
			color: $color-primary;
		}
	}
</style>
