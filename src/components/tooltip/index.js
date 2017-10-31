import bTooltip from './tooltip.vue';
import { registerComponent } from '../../utils';

/* eslint-disable no-var, no-undef, guard-for-in, object-shorthand */

const components = {
  bTooltip
};

const VuePlugin = {
  install(Vue) {
    for (var component in components) {
      if (!registerComponent(Vue, component)) {
        Vue.component(component, components[component]);
      }
    }
  }
};

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VuePlugin);
};

export default VuePlugin;