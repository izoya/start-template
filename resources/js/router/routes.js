import Home from '~/views/Public/Home';
import AdminPanel from '~/views/Admin/AdminPanel';
const MainPage = () => import('~/views/Public/MainPage/MainPage');
const Auth = () => import('~/views/Public/Auth/Auth');
const SignUp = () => import('~/views/Public/Auth/SignUp');

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {path: '/', component: MainPage, name: 'Home'},
            {path: '/login', component: Auth, name: 'Login'},
            {path: '/signup', component: SignUp, name: 'Sign up'},
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
