import Vue from 'vue'
import VueRouter from "vue-router";
import MainPage from "./pages/MainPage";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: MainPage  //можем указать путь либо так
    },
    {
        path: '/photo',
        component: () => import('./pages/PhotoPage') // либо так (lazy loading)
    }
]

export default new VueRouter({ //передаем массив маршрутов в сам VueRouter
    mode: 'history',
    routes
})
