import {createStore} from 'vuex';
import {auth} from './Auth';

const store = createStore({
    modules: {
        auth,
    },
});

export default store;
