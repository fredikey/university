import Vue from "vue";
import Vuex, {Store} from "vuex";
import {INIT_DARK_MODE, TOGGLE_DARK_MODE} from '@/store/constants'
import {getDefaultDarkModeValue} from '@/lib/darkMode'
import {ITask, TaskStatus} from '@/lib/types'
Vue.use(Vuex);

interface IState {
	darkMode: boolean,
	tasks: ITask[]
}
const htmlElement = document.querySelector('body') as HTMLBodyElement
export type GlobalStore = Store<IState>

const store: GlobalStore = new Vuex.Store<IState>({
	state: {
		darkMode: true,
		tasks: [
			{
				id: 0,
				description: 'descr',
				createdAt: Date.now(),
				user: 'Oleg',
				status: 'backlog'
			}
		]
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
		}
	},
	actions: {
		[INIT_DARK_MODE] ({commit}) {
			const value = getDefaultDarkModeValue()
			commit('setDarkMode', value)
		},
		[TOGGLE_DARK_MODE] ({state, commit}) {
			commit('setDarkMode', !state.darkMode)
		}
	}
});

export default store
