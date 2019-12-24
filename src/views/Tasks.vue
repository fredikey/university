<template>
  <div class="container">
    <h2 class="title">Все задания</h2>
    <Task v-for="item in allTasks" :data="item" :key="item.id" />
  </div>
</template>

<script>
export default {
  computed: {
    allTasks() {
      return this.$store.state.tasks
    }
  }
}
</script>

<style scoped></style>
