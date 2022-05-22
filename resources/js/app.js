require('~/bootstrap');
require('~/plugins/ziggy');
require('~/plugins/axios');

import {createApp} from 'vue';
import App from '~/App';
import router from '~/router';
import store from '~/store';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

createApp(App)
    .use(router)
    .use(store)
    .use(ElementPlus, {size: 'small'})
    .mount('#app');

