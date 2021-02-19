<template>
  <div class="app">
    <DrawerMenu/>
    <router-view />
    <SidebarMenu/>
  </div>
</template>
<script>
import { DrawerMenu, SidebarMenu } from './components'

export default {
  components: {
    DrawerMenu,
    SidebarMenu
  },
	created() {
  	this.$store.dispatch('loadData')
	}
}
</script>
<style>
body {
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
}
* {
  box-sizing: border-box;
  outline: none;
}
.app {
  display: flex;
  min-height: 100vh;
	height: 100%;
  flex: 1;
}
/*	тут пишем глобальные стили */
.container {
  margin-top: 60px;
  margin-left: 90px;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.title {
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 37px;
  letter-spacing: 0.1em;
  margin-bottom: 60px;
  color: #333;
}
.emptyList {
	font-style: normal;
	font-weight: 300;
	font-size: 24px;
	color: #a09f9f;
}
</style>
