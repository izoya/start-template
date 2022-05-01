require('./bootstrap');
require('~/plugins/axios');

import {createApp} from 'vue'
import App from "~/App";
import router from "~/router";
import ElementPlus from "element-plus";

createApp(App)
    .use(router)
    .use(ElementPlus, {size: 'small'})
    .mount('#app');

