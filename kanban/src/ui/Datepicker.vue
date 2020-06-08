<template>
	<div role="button" :aria-labelledby="label" class="datepicker-container">
		<span  class="datepicker-label">{{ label }}</span>
		<Datepicker
			v-bind="$attrs"
			v-model="resVal"
			v-on="inputListeners"
			type="datetime"
			placeholder="Select datetime"
		/>
	</div>
</template>

<script lang="ts">
	import Vue from "vue";
	import Datepicker from 'vue2-datepicker';
	
	export default Vue.extend({
		inheritAttrs: false,
		components: {
			Datepicker
		},
		data () {
			return {
				resVal: new Date(this.value)
			}
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
							this.$emit('input', val ? val.getTime() : undefined)
						}
					}
				)
			}
		}
	});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
	$default-color: #555;
	$primary-color: #1284e7;
	
	@import '~vue2-datepicker/scss/index.scss';
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
