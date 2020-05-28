import Vue from "vue";
import Vuex, {Store} from "vuex";
import {INIT_DARK_MODE, TOGGLE_DARK_MODE} from '@/store/constants'
import {getDefaultDarkModeValue} from '@/lib/darkMode'
Vue.use(Vuex);

interface State {
	darkMode: boolean
}
const htmlElement = document.querySelector('body') as HTMLBodyElement
export type GlobalStore = Store<State>

const store: GlobalStore = new Vuex.Store<State>({
	state: {
		darkMode: true
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
