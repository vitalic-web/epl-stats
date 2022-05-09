import { App, Plugin } from 'vue';
import BreadcrumbNav from '@/components/BreadcrumbNav.vue';

export default <Plugin> {
  install: (app: App) => {
    app.component('breadcrumb-nav', BreadcrumbNav);
  },
};

// const BreadcrumbNavPlugin: Plugin = {
//   install: (app: App, options) => {
//     app.component('breadcrumb-nav', BreadcrumbNav);
//   },
// };

// export default BreadcrumbNavPlugin;
