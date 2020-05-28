<template>
  <div class="container">
	  <header class="header">
		  <h1 class="title">Welcome to the most powerful task manager in the world !! (probably no)</h1>
			<ui-button
				@click="toggleTheme"
				:title="`Switch to ${ darkMode ? 'Light' : 'Dark' } Mode`"
			/>
	  </header>
	  <AddTask />
	  <div class="columns">
		  <Column
			  title="BackLog"
			  status="backlog"
		  />
		  <Column
			  title="In process"
			  status="process"
		  />
		  <Column
			  title="Ready"
			  status="ready"
		  />
	  </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Column, AddTask} from "@/components";
import {TOGGLE_DARK_MODE} from '@/store/constants'
export default Vue.extend({
  name: "App",
	computed: {
    darkMode () {
    	return this.$store.state.darkMode
    }
	},
  components: {
	  Column,
	  AddTask
  },
	methods: {
  	toggleTheme () {
		  this.$store.dispatch(TOGGLE_DARK_MODE)
	  }
	}
});
</script>

<style lang="scss">
	@import "styles/index";
	
	.container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		background-color: $color-primary;
		padding-left: 50px;
		padding-right: 50px;
		padding-top: 20px;
		transition: .2s;
	}
	.title {
		@include text(h1);
	}
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.columns {
		display: flex;
		width: 100%;
		margin-top: 50px;
		justify-content: center;
	}
</style>
