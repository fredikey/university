<template>
  <div :class="`taskContainer ${themeClassName}`">
    <div class="checked" @click="toggleCompletedTask">
      <svg
        v-show="this.data.isCompleted"
        style="transform: scale(1.2)"
        width="13"
        height="12"
        viewBox="0 0 13 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M11.708 1L5.15401 10.515L1.20803 5" stroke="black" />
      </svg>
    </div>
    <div class="textContainer">
      <span
        class="taskTitle"
        :style="this.data.isCompleted ? 'text-decoration: line-through;' : ''"
        >{{ this.data.title }}</span
      >
      <span class="taskDate">{{ this.data.date }}</span>
    </div>
    <svg
      @click="toggleImportantTask"
      class="star"
      width="25"
      height="22"
      viewBox="0 0 25 22"
      style="transform: scale(1.3)"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 0L15.3064 8.2918H24.3882L17.0409 13.4164L19.8473 21.7082L12.5 16.5836L5.15268 21.7082L7.95911 13.4164L0.611794 8.2918H9.69357L12.5 0Z"
        :stroke="this.data.isImportant ? 'none' : '#333'"
        :fill="this.data.isImportant ? '#333' : 'none'"
        stroke-width="1.5"
      />
    </svg>
  </div>
</template>

<script>
const renderThemeClassName = item => {
  if (item.isImportant) {
    return 'yellow'
  } else if (item.isMyDay) {
    return 'purple'
  }
  return 'blue'
}

export default {
  props: ['data'],
  data() {
    return {}
  },
  methods: {
    toggleCompletedTask() {
      this.$store.commit('toggleCompletedTask', { id: this.data.id })
    },
    toggleImportantTask() {
      this.$store.commit('toggleImportantTask', { id: this.data.id })
    }
  },
  computed: {
    themeClassName() {
      return renderThemeClassName(this.data)
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
  position: relative;
}
.taskTitle {
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
  display: block;
  margin-bottom: -2px;
}
.taskDate {
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  color: #9d9d9d;
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
}
.star {
  position: absolute;
  right: 50px;
  cursor: pointer;
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
