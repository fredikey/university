import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      {
        date: '20.01.2001',
        isImportant: false,
        title: 'Do homework',
        isMyDay: true,
        id: 1,
        isCompleted: false
      },
      {
        date: '20.01.2001',
        isImportant: true,
        title: 'Do homework2',
        isMyDay: false,
        id: 2,
        isCompleted: false
      },
      {
        date: '20.01.2001',
        isImportant: false,
        title: 'Do homework3',
        isMyDay: false,
        id: 3,
        isCompleted: true
      },
      {
        date: '20.01.2001',
        isImportant: true,
        title: 'Do homework3',
        isMyDay: true,
        id: 4,
        isCompleted: true
      },
      {
        date: '20.01.2001',
        isImportant: false,
        title: 'Do homework3',
        isMyDay: false,
        id: 5,
        isCompleted: false
      },
      {
        date: '20.01.2001',
        isImportant: false,
        title: 'Do homework3',
        isMyDay: false,
        id: 6,
        isCompleted: true
      }
    ]
  },
  getters: {
    myDayTasks(state) {
      return state.tasks.filter(item => item.isMyDay)
    },
    importantTasks(state) {
      return state.tasks.filter(item => item.isImportant)
    }
  },
  mutations: {
    addTask(state, payload) {
      state.tasks.push(payload)
    },
    toggleCompletedTask(state, payload) {
      const task = state.tasks.find(item => item.id === payload.id)
      console.log(task)
      task.isCompleted = !task.isCompleted
    },
    toggleImportantTask(state, payload) {
      const task = state.tasks.find(item => item.id === payload.id)
      task.isImportant = !task.isImportant
    }
  }
})
