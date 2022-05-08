require('bootstrap');
require('~/plugins/axios');

import {createApp} from 'vue';
import App from '~/App';
import router from '~/router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

createApp(App)
    .use(router)
    .use(ElementPlus, {size: 'small'})
    .mount('#app');

