import {createRouter, createWebHistory} from "vue-router";
import Index from './components/pages/Index';
import Services from "./components/pages/Service";
import Login from "./components/pages/Login";
import Order from "./components/pages/Order";
import Time from "./components/pages/Time";


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
        path: '/barber/:id/date',
        component: Time,
        name: 'time',
        props: true,
    }
]

export  default createRouter({
    history: createWebHistory(),
    routes,
})
