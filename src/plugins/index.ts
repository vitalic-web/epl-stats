import { App, Plugin } from 'vue';
import BreadcrumbNavPlugin from '@/plugins/BreadcrumbNavPlugin';

const MyPlugins: Plugin = {
  install: (app: App) => {
    BreadcrumbNavPlugin.install?.(app);
  },
};

export default MyPlugins;
