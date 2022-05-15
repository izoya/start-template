import Home from '~/views/Public/Home';
import AdminPanel from '~/views/Admin/AdminPanel';
const MainPage = () => import('~/views/Public/MainPage/MainPage');
const Auth = () => import('~/views/Public/Auth/Auth');

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {path: '/', component: MainPage, name: 'Home'},
            {path: '/login', component: Auth, name: 'Login'},
        ],
    },
    {
        path: '/admin',
        component: AdminPanel,
        name: 'Admin Panel',
        children: [
            //
        ],
    },
];

export default routes;
