<template>
  <div class="container">
    <h2 class="title">Важное</h2>
	  <div v-if="importantTasks.length !== 0">
		  <Task v-for="item in importantTasks" :data="item" :key="item.id" />
	  </div>
	  <h4 v-else class="emptyList">Здесь пока еще нет задач</h4>
    <AddTaskButton themeClassName="yellow" @addTask="addTask" />
  </div>
</template>

<script>
export default {
  computed: {
    importantTasks() {
      return this.$store.getters.importantTasks
    }
  },
  methods: {
    addTask(title) {
      this.$store.commit('addTask', {
        title: title,
        isImportant: true
      })
    }
  }
}
</script>

<style scoped></style>
