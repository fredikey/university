<template>
  <div class="container">
	  <header class="header">
		  <h1 class="title">Welcome to the most powerful task manager in the world !! (probably no)</h1>
			<button class="button">Switch to Light Mode</button>
	  </header>
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
import Column from "./components/Column.vue";

export default Vue.extend({
  name: "App",
  components: {
	  Column
  }
});
</script>

<style lang="scss">
	$color-primary: #2c3e50;
	$color-default: #fff;
	*,
	*::after,
	*::before{
		box-sizing: border-box;
		outline: none;
	}
	h1,h2,h3,h4,h6,h6 {
		padding: 0;
		margin: 0;
	}
	body {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: $color-default;
		padding: 0;
		margin: 0;
		width: 100%;
		height: 100vh;
	}
	button {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		box-shadow: none;
		border: none;
		background-color: transparent;
		color: $color-default;
		cursor: pointer;
		transition: .15s opacity;
		&:hover {
			opacity: .6;
		}
	}
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
	.button {
		border: 1px solid $color-default;
		padding: 5px 10px;
		font-size: 16px;
	}
	.columns {
		display: flex;
	}
</style>
