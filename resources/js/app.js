import router from './router';

require('./bootstrap');


import {createApp} from "vue";
import App from "./components/App";

const app = createApp(App)

app.use(router).mount('#app')
