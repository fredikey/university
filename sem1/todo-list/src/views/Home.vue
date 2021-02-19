<template>
  <div class="container">
    <h2 class="title">Мой день</h2>
	  <div v-if="myDayTasks.length !== 0">
		  <Task v-for="item in myDayTasks" :data="item" :key="item.id" />
	  </div>
	  <h4 v-else class="emptyList">Здесь пока еще нет задач</h4>
    <AddTaskButton @addTask="addTask" themeClassName="purple" />
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
  },
  methods: {
    addTask(title) {
      this.$store.commit('addTask', {
        title: title,
        date: new Date()
      })
    }
  }
}
</script>
