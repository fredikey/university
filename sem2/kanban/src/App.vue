<template>
  <main class="container">
	  <EditModal v-if="editModalVisible"/>
	  <header class="header">
		  <h1 class="title">Welcome to the most powerful task manager in the world !! (probably not)</h1>
			<ui-button
				:aria-labelledby="`Switch to ${ darkMode ? 'Light' : 'Dark' } Mode`"
				@click="toggleTheme"
				:title="`Switch to ${ darkMode ? 'Light' : 'Dark' } Mode`"
			/>
	  </header>
	  <AddTask />
	  <div role="contentinfo" class="columns">
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
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import {Column, AddTask, EditModal} from "@/components";
import {TOGGLE_DARK_MODE} from '@/store/constants'
export default Vue.extend({
  name: "App",
	computed: {
    darkMode () {
    	return this.$store.state.darkMode
    },
		editModalVisible () {
    	return this.$store.state.editModalVisible
		}
	},
  components: {
	  Column,
	  AddTask,
	  EditModal
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
		margin-bottom: 50px;
		justify-content: center;
	}
</style>
