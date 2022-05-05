import {createRouter, createWebHistory} from "vue-router";
import Index from './components/pages/Index';
import Services from "./components/pages/Services";
import Login from "./components/pages/Login";


const routes = [
    {
        path: '/',
        component: Index,
    },
    {
        path: '/barber/:id',
        component: Services,
        name: 'services',
    },
    {
        path: '/login',
        component: Login,
    }
]

export  default createRouter({
    history: createWebHistory(),
    routes,
})
