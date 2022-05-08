import Home from "~/views/Public/Home";
import MainPage from "~/views/Public/MainPage/MainPage";
import AdminPanel from "~/views/Admin/AdminPanel";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {path: '/', component: MainPage, name: 'Home'},
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
