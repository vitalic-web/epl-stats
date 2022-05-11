import { App, Plugin } from 'vue';
import BreadcrumbNav from '@/components/BreadcrumbNav.vue';

const BreadcrumbNavPlugin: Plugin = {
  install: (app: App) => {
    app.component('breadcrumb-nav', BreadcrumbNav);
  },
};

export default BreadcrumbNavPlugin;
