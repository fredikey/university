import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import {isMyDay} from '../utils'
function random(min ,max) {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

const renderTaskId = tasks => {
  return tasks.length + random(1, 1000)
}

export default new Vuex.Store({
  state: {
    tasks: [
      // {
      //   date: '20.01.2001',
      //   isImportant: false,
      //   title: 'Do homework',
      //   isMyDay: true,
      //   id: 1,
      //   isCompleted: false
      // },
      // {
      //   date: '20.01.2001',
      //   isImportant: true,
      //   title: 'Do homework2',
      //   isMyDay: false,
      //   id: 2,
      //   isCompleted: false
      // },
      // {
      //   date: '20.01.2001',
      //   isImportant: false,
      //   title: 'Do homework3',
      //   isMyDay: false,
      //   id: 3,
      //   isCompleted: true
      // },
      // {
      //   date: '20.01.2001',
      //   isImportant: true,
      //   title: 'Do homework3',
      //   isMyDay: true,
      //   id: 4,
      //   isCompleted: true
      // },
      // {
      //   date: '20.01.2001',
      //   isImportant: false,
      //   title: 'Do homework3',
      //   isMyDay: false,
      //   id: 5,
      //   isCompleted: false
      // },
      // {
      //   date: '20.01.2001',
      //   isImportant: false,
      //   title: 'Do homework3',
      //   isMyDay: false,
      //   id: 6,
      //   isCompleted: true
      // }
    ],
    editTask: null,
    editingMode: false,
	  isAuthorized: false
  },
  getters: {
    myDayTasks(state) {
      return state.tasks.filter(item => isMyDay(item.date))
    },
    importantTasks(state) {
      return state.tasks.filter(item => item.isImportant)
    }
  },
  mutations: {
    addTask(state, payload) {
      const defaultTask = {
        title: '',
        isImportant: false,
        date: null,
        isCompleted: false,
        id: renderTaskId(state.tasks)
      }

      state.tasks.push({
        ...defaultTask,
        ...payload
      })
	    localStorage.setItem('tasks', JSON.stringify(state.tasks))
	
    },
	  removeTask(state, payload) {
      const idx = state.tasks.findIndex(item => item.id === payload.id)
		  state.tasks.splice(idx, 1)
		  localStorage.setItem('tasks', JSON.stringify(state.tasks))
		
	  },
    toggleCompletedTask(state, payload) {
      const task = state.tasks.find(item => item.id === payload.id)
      console.log(task)
      task.isCompleted = !task.isCompleted
	    localStorage.setItem('tasks', JSON.stringify(state.tasks))
	
    },
    toggleImportantTask(state, payload) {
      const task = state.tasks.find(item => item.id === payload.id)
      task.isImportant = !task.isImportant
	    localStorage.setItem('tasks', JSON.stringify(state.tasks))
	
    },
    openEditSidebar(state, payload) {
      state.editingMode = true
      state.editTask = payload
    },
    closeEditSidebar(state) {
      state.editingMode = false
      state.editTask = null
    },
	  setTasks(state, payload) {
    	state.tasks = payload
	  }
  },
	actions: {
    loadData ({commit}) {
    	
      const temp = localStorage.getItem('tasks')
	    const tasks = JSON.parse(temp)
	    if (tasks === null) {
		    commit('setTasks', [])
	    } else {
		    const result = tasks.map(item => {
			    return {
				    ...item,
				    date: item.date ? new Date(Date.parse(item.date)) : null
			    }
		    })
		    commit('setTasks', result)
	    }
    },
		uploadData ({state}) {
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
		}
	}
})
