import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import {Button, Input} from './ui'

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
  render: h => h(App)
}).$mount("#app");
