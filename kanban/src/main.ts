import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import {Button, Input} from './ui'
import {INIT_DARK_MODE} from '@/store/constants'

Vue.config.productionTip = false;
Vue.component(
	'ui-button',
	Button
)
Vue.component(
	'ui-input',
	Input
)
new Vue({
  store,
  render: h => h(App),
	created () {
		this.$store.dispatch(INIT_DARK_MODE)
	}
}).$mount("#app");
