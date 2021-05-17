import VueRouter from 'vue-router';
import LoginPage from "@/pages/LoginPage";
import MainPage from "@/pages/MainPage";
import QuestionsPage from "./pages/FinderPage";

const routes = [
    {
        path: '/',
        component: MainPage,
    },
    {path: '/login', component: LoginPage},
    {path: '/finder', component: QuestionsPage},
    {path: "*", redirect: "/"}
]

const router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) => {
    if (to.path !== '/login') {
        if (localStorage.getItem('auth')) {
            next()
        } else {
            next('/login')
        }
    } else {
        next();
    }
})

export default router;
