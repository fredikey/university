<template>
  <div class="container">
    <h2 class="title">Важное</h2>
    <Task v-for="item in importantTasks" :data="item" :key="item.id" />
  </div>
</template>

<script>
export default {
  computed: {
    importantTasks() {
      return this.$store.getters.importantTasks
    }
  }
}
</script>

<style scoped></style>
