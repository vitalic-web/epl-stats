import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import EventService from '@/services/EventService';
import MyPlugins from '@/plugins';
import App from './App.vue';
import router from './router';
import store from './store';

import '@/styles/style.scss';

const app = createApp(App).use(store).use(router);

app.use(ElementPlus);
app.use(MyPlugins);
app.provide('EventService', EventService);
app.mount('#app');
