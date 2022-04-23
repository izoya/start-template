import Home from "~/views/Home";
import MainPage from "~/views/Public/MainPage/MainPage";
import AdminHome from "~/views/Admin/Home";

const routes = [
    {
        path: '/',
        component: Home,
        children: [
            {path: '/',         component: MainPage,    name: 'home'},
        ],
    },
    {
        path: '/admin',
        component: AdminHome,
        name: 'admin-home',
        children: [
            //
        ],
    },
];

export default routes;
