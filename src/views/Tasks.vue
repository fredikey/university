<template>
  <div class="container">
    <h2 class="title">Все задания</h2>
	  <div v-if="allTasks.length !== 0">
		  <Task v-for="item in allTasks" :data="item" :key="item.id" />
	  </div>
	  <h4 v-else class="emptyList">Здесь пока еще нет задач</h4>
	  <AddTaskButton themeClassName="blue" @addTask="addTask" />
  </div>
</template>

<script>
export default {
  computed: {
    allTasks() {
      return this.$store.state.tasks
    }
  },
  methods: {
    addTask(title) {
      this.$store.commit('addTask', {
        title: title
      })
    }
  }
}
</script>

<style scoped>
.addButton {
  position: fixed;
  bottom: 50px;
}
</style>
