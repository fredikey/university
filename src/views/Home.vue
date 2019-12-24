<template>
  <div class="container">
    <h2 class="title">Мой день</h2>
    <Task v-for="item in myDayTasks" :data="item" :key="item.id" />
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    myDayTasks() {
      return this.$store.getters.myDayTasks
    }
  }
}
</script>
