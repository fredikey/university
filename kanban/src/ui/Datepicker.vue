<template>
	<div class="datepicker-container">
		<span class="datepicker-label">{{ label }}</span>
		<Datepicker
			class="datepicker"
			input-class="datepicker-input"
			v-bind="$attrs"
			v-bind:value="value"
			v-on="inputListeners"
		/>
	</div>
</template>

<script lang="ts">
	import Vue from "vue";
	import Datepicker from 'vuejs-datepicker';
	
	export default Vue.extend({
		inheritAttrs: false,
		components: {
			Datepicker
		},
		props: {
			label: String,
			value: Number
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
						input: (val: Date) => {
							this.$emit('input', val.getTime())
						}
					}
				)
			}
		}
	});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
	.datepicker-container {
		display: flex;
		flex-direction: column;
	}
	.datepicker {
		color: #333;
	}
	.datepicker-input {
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
	
	
	
	.datepicker-label {
		@include text(medium);
		@include spacing(red, bottom);
	}
</style>
