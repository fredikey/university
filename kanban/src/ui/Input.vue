<template>
	<div :aria-labelledby="label" class="input-container">
		<span class="label">{{ label }}</span>
		<input
			class="input"
			v-bind="$attrs"
			v-bind:value="value"
			v-on="inputListeners"
		>
	</div>
</template>

<script lang="ts">
	import Vue from "vue";
	
	export default Vue.extend({
		inheritAttrs: false,
		props: {
			label: String,
			value: String
		},
		computed: {
			inputListeners: function () {
				// `Object.assign` merges objects together to form a new object
				return Object.assign({},
					// We add all the listeners from the parent
					this.$listeners,
					// Then we can add custom listeners or override the
					// behavior of some listeners.
					{
						// This ensures that the component works with v-model
						input: (event: any) => {
							this.$emit('input', event.target.value)
						}
					}
				)
			}
		}
	});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.input-container {
		display: flex;
		flex-direction: column;
	}
	
	.input {
		box-shadow: none;
		background-color: transparent;
		font-size: 16px;
		color: $color-default;
		
		border: 1px solid $color-gray;
		width: 200px;
		@include spacing(orange, right, padding);
		@include spacing(orange, left, padding);
		@include spacing(red, top, padding);
		@include spacing(red, bottom, padding);
		border-radius: 6px;
		transition: border .2s;
		&::placeholder {
			color: $color-gray;
			transition: .2s color;
		}
		&:focus {
			border-color: $color-default;
			&::placeholder {
				color: $color-default;
			}
		}
	}
	.label {
		@include text(medium);
		@include spacing(red, bottom);
	}
</style>
