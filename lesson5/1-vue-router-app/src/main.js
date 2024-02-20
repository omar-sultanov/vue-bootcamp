import { createApp } from 'vue';
import App from './App.vue';
import router from './router/';
import appAxios from './utils/appAxios';
const app = createApp(App);


app.config.globalProperties.$axios = appAxios;
app.use(router);
app.mount('#app');
