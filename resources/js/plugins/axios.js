import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    'Accept': 'application/json',
};

export default window.Axios = axios;
