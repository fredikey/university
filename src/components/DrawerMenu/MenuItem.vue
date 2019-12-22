<template>
  <router-link :to="this.path">{{ this.title }}</router-link>
</template>

<script>
export default {
  props: ['title', 'path'],
  data() {
    return {}
  }
}
</script>

<style scoped>
a {
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 20px;
}

a.router-link-exact-active {
  color: #2980b9;
}
</style>
