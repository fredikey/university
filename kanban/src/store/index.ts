import Vue from "vue";
import Vuex, {Store} from "vuex";
import {
	ADD_TASK, CLOSE_EDIT_MODAL,
	DELETE_TASK,
	INIT_DARK_MODE,
	LOAD_TASKS, OPEN_EDIT_MODAL,
	SAVE_TASKS,
	SET_TASK_STATUS,
	TOGGLE_DARK_MODE,
	EDIT_TASK
} from '@/store/constants'
import {getDefaultDarkModeValue} from '@/lib/darkMode'
import {IBackLogTask, IProcessTask, IReadyTask, ITask, TaskStatus} from '@/lib/types'
Vue.use(Vuex);

interface IState {
	darkMode: boolean,
	tasks: ITask[]
	editModalVisible: boolean
	editModalData?: ITask
}
const htmlElement = document.querySelector('body') as HTMLBodyElement
export type GlobalStore = Store<IState>

const store: GlobalStore = new Vuex.Store<IState>({
	state: {
		darkMode: true,
		tasks: [],
		editModalVisible: false,
		editModalData: undefined
	},
	getters: {
		tasksByStatus (state) {
			return (status: TaskStatus) => {
				return state.tasks.filter(item => item.status === status)
			}
		}
	},
	mutations: {
		setDarkMode (state, payload: boolean) {
			state.darkMode = payload
			if (payload) {
				htmlElement.setAttribute('dark', 'true')
			} else {
				htmlElement.removeAttribute('dark')
			}
			localStorage.setItem('dark', JSON.stringify(payload))
		},
		addTask (state, payload: string) {
			const task: IBackLogTask = {
				id: state.tasks.length + 1,
				status: 'backlog',
				description: payload
			}
			state.tasks.push(task)
		},
		deleteTask (state, {id}: {id: number}) {
			const idx = state.tasks.findIndex(item => item.id === id)
			if (idx !== -1) {
				state.tasks.splice(idx, 1)
			}
		},
		setTaskStatus (state, {id, status}: {id: number, status: TaskStatus}) {
			const task = state.tasks.find(item => item.id === id)
			console.log(task)
			if (task !== undefined) {
				const oldStatus = task.status;
				task.status = status
				
				if (status === oldStatus) {
					return
				}
				
				switch (status) {
					case 'process': {
						// const newTask = task as IProcessTask
						task.createdAt = Date.now()
						task.user = 'Anton'
					}
					case 'ready': {
						const newTask = task as IReadyTask
						newTask.finishedAt = Date.now()
						if (oldStatus === 'backlog') {
							newTask.createdAt = Date.now()
							newTask.user = 'Anton'
						}
					}
				}
			}
		},
		setTasks (state, payload: ITask[]) {
			state.tasks = payload
		},
		setModalVisible (state, payload: boolean) {
			state.editModalVisible = payload
		},
		setModalData (state, payload: ITask) {
			state.editModalData = payload
		},
		editTask (state, payload: ITask) {
			const task: ITask = state.tasks.find(item => item.id === payload.id)
			task.description = payload.description
			task.status = payload.status
			task.createdAt = payload.createdAt
			task.user = payload.user
			task.finishedAt = payload.finishedAt
		}
	},
	actions: {
		[INIT_DARK_MODE] ({commit}) {
			const value = getDefaultDarkModeValue()
			commit('setDarkMode', value)
		},
		[TOGGLE_DARK_MODE] ({state, commit}) {
			commit('setDarkMode', !state.darkMode)
		},
		[ADD_TASK] ({dispatch, commit}, payload: string) {
			commit('addTask', payload)
			dispatch(SAVE_TASKS)
		},
		[LOAD_TASKS] ({commit}) {
			const tasks = localStorage.getItem('tasks')
			if (tasks !== null) {
				commit('setTasks', JSON.parse(tasks))
			}
		},
		[SAVE_TASKS] ({state}) {
			localStorage.setItem('tasks', JSON.stringify(state.tasks))
		},
		[SET_TASK_STATUS] ({commit, dispatch}, payload: {id: number, status: TaskStatus}) {
			commit('setTaskStatus', payload)
			dispatch(SAVE_TASKS)
		},
		[DELETE_TASK] ({commit, dispatch}, payload: {id: number}) {
			commit('deleteTask', payload)
			dispatch(SAVE_TASKS)
		},
		[OPEN_EDIT_MODAL] ({commit}, payload: ITask) {
			commit('setModalVisible', true)
			commit('setModalData', payload)
		},
		[CLOSE_EDIT_MODAL] ({commit}) {
			commit('setModalVisible', false)
		},
		[EDIT_TASK] ({commit, dispatch}, payload: ITask) {
			commit('editTask', payload)
			dispatch(SAVE_TASKS)
		}
	}
});

export default store
