<template>
  <div :class="`taskContainer ${this.themeClassName}`">
    <div class="checked" @click="addTask">
      +
    </div>
    <div class="textContainer">
      <input
        v-model="title"
        class="taskTitle"
        placeholder="Добавить задание..."
        @keyup.enter="addTask"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ['themeClassName'],
  data() {
    return {
      title: ''
    }
  },
  methods: {
    addTask() {
      if (this.title.trim() !== '') {
        this.$emit('addTask', this.title.trim())
        this.title = ''
      }
    }
  }
}
</script>

<style scoped>
.taskContainer {
  display: flex;
  width: 500px;
  height: 60px;
  align-items: center;
  border-radius: 20px;
  padding-left: 20px;
  margin-bottom: 15px;
  position: fixed;
  bottom: 10px;
	background-color: #FFF;
}
.taskTitle {
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  color: #333;
  border: none;
  flex: 1;
  width: 400px;
}
.taskTitle::placeholder {
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  color: #a09f9f;
}
.textContainer {
  flex-direction: column;
}
.checked {
  width: 30px;
  height: 30px;
  border-radius: 100%;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 25px;
  color: #333;
}
.purple {
  border: 2px solid #bf54f1;
}
.purple .checked {
  background: rgba(228, 170, 255, 0.52);
  border: 2px solid #bf54f1;
}
.yellow {
  border: 2px solid #ffdf34;
}
.yellow .checked {
  background: rgba(255, 223, 52, 0.4);
  border: 2px solid #ffdf34;
}
.blue {
  border: 2px solid #7d8aff;
}
.blue .checked {
  background: rgba(125, 138, 255, 0.4);
  border: 2px solid #7d8aff;
}
</style>
