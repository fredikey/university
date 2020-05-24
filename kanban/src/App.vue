<template>
  <div class="container">
	  <header class="header">
		  <h1 class="title">Welcome to the most powerful task manager in the world !! (probably no)</h1>
			<ui-button
				@click="switchTheme"
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
export default Vue.extend({
  name: "App",
	data () {
  	return {
  		// can be 'dark' | 'light'
  		darkMode: true
	  }
	},
  components: {
	  Column,
	  AddTask
  },
	methods: {
  	switchTheme () {
  		this.darkMode = !this.darkMode
	  }
	}
});
</script>

<style lang="scss">
	@import "styles/normalize";
	.container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		background-color: $color-primary;
		padding-left: 50px;
		padding-right: 50px;
		padding-top: 20px;
	}
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.columns {
		display: flex;
	}
</style>
