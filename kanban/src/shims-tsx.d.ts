import Vue, { VNode, ComponentOptions } from "vue";

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}

import {GlobalStore} from './store'
declare module "vue/types/options" {
	interface ComponentOptions<V extends Vue> {
		store?: GlobalStore;
	}
}

declare module "vue/types/vue" {
	interface Vue {
		$store: GlobalStore;
	}
}
