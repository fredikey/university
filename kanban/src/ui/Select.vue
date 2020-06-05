<template>
	<div class="select-relative-helper">
		<div class="select-container" @click="toggle">
			<span class="label">{{ label }}</span>
			<div class="select">
				{{ value }}
			</div>
		</div>
		<div :class="`select-dropdown ${visible ? 'select-dropdown_Active' : ''}`">
			<div class="select-dropdown-item" v-for="(item, index) in items" :key="index" @click="select(item)">
				{{ item }}
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from "vue";
	
	export default Vue.extend({
		inheritAttrs: false,
		props: {
			label: String,
			defaultValue: String,
			items: Array as () => string[],
		},
		data () {
			return {
				value: this.defaultValue,
				visible: false
			}
		},
		methods: {
			select (val) {
				this.value = val
				this.$emit('change', val)
				this.close()
			},
			close () {
				this.visible = false
			},
			toggle () {
				this.visible = !this.visible
			}
		}
	});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.select-relative-helper {
		position: relative;
	}
	.select-container {
		display: flex;
		flex-direction: column;
	}
	
	.select {
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
		cursor: pointer;
	}
	.select-dropdown {
		user-select: none;
		width: 200px;
		border: 1px solid $color-gray;
		border-radius: 6px;
		opacity: 0;
		visibility: hidden;
		position: absolute;
		top: 70px;
		background-color: $color-back;
		&_Active {
			opacity: 1;
			visibility: visible;
		}
	}
	.select-dropdown-item {
		font-size: 16px;
		color: $color-default;
		width: 100%;
		cursor: pointer;
		@include spacing(orange, right, padding);
		@include spacing(orange, left, padding);
		@include spacing(red, top, padding);
		@include spacing(red, bottom, padding);
		transition: .3s opacity;
		&:hover {
			opacity: .6;
		}
	}
	.label {
		@include text(medium);
		@include spacing(red, bottom);
	}
</style>
