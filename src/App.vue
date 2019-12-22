<template>
  <div class="app">
    <DrawerMenu />
    <router-view />
  </div>
</template>
<script>
import { DrawerMenu } from './components'

export default {
  components: {
    DrawerMenu
  }
}
</script>
<style>
body {
  margin: 0;
  padding: 0;
  font-family: Montserrat, sans-serif;
}
* {
  box-sizing: border-box;
}
.app {
  display: flex;
  height: 100vh;
  flex: 1;
}
/*	тут пишем глобальные стили */
</style>
