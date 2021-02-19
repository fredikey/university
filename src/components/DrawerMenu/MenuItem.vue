<template>
  <div class="menuItemContainer" @click.passive="onClick">
    <router-link :to="this.path">{{ this.title }}</router-link>
    <div class="horizontalLine" />
  </div>
</template>

<script>
export default {
  props: ['title', 'path', 'menuThemeClassName'],
  data() {
    return {}
  },
  methods: {
    onClick() {
      this.$router.push(this.path)
      this.$emit('onClickLink', this.menuThemeClassName)
	    if (this.path === '/statistics') {
	    	this.$store.commit('closeEditSidebar')
	    }
    }
  }
}
</script>

<style scoped>
a {
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 30px;
  letter-spacing: 0.1em;
  color: #ffffff;
  text-decoration: none;
}

a.router-link-exact-active {
  color: #333;
}
a.router-link-exact-active ~ .horizontalLine {
  background-color: #333;
}
.horizontalLine {
  width: 1px;
  height: 50px;
  background-color: #fff;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
}

.menuItemContainer {
  margin-bottom: 30px;
  cursor: pointer;
  height: 50px;
  width: 250px;
  position: relative;
  border-bottom: 2px solid #d987ff;
  padding-left: 18px;
  display: flex;
  align-items: center;
  z-index: 1;
}
.menuItemContainer:last-child {
  margin-bottom: 0;
}
.verticalLine {
}
</style>
