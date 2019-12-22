<template>
  <div class="taskContainer">
    <span class="taskTitle">It's a task</span>
    <span class="taskDate">01.01.2020</span>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style scoped>
.taskContainer {
  display: flex;
  width: 500px;
  height: 50px;
  align-items: center;
  border: 1px solid #000000;
  border-radius: 20px;
  padding-left: 23px;
  margin-bottom: 15px;
}
.taskTitle {
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 30px;
  color: #000000;
  margin-right: 20px;
}
.taskDate {
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  color: #a09f9f;
  top: 2px;
  position: relative;
}
</style>
