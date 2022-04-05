import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import api from './api/api';
// import axios from 'axios';
// import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App).use(store).use(router);

app.use(ElementPlus);
// app.use(VueAxios, axios);
// app.provide('axios', app.config.globalProperties.axios);
app.provide('api', api);
app.mount('#app');
