import Home from "~/views/Public/Home";
import MainPage from "~/views/Public/MainPage/MainPage";
import AdminPanel from "~/views/Admin/AdminPanel";

const routes = [
    {
        path: '/',
        component: Home,
        children: [
            {path: '/', component: MainPage, name: 'home'},
        ],
    },
    {
        path: '/admin',
        component: AdminPanel,
        name: 'admin-panel',
        children: [
            //
        ],
    },
];

export default routes;
