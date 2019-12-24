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
  font-family: 'Montserrat', sans-serif;
}
* {
  box-sizing: border-box;
  outline: none;
}
.app {
  display: flex;
  height: 100vh;
  flex: 1;
}
/*	тут пишем глобальные стили */
.container {
  margin-top: 60px;
  margin-left: 90px;
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
</style>
