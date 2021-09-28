import {createRouter, createWebHistory} from 'vue-router';

import MainComponent from '../components/MainComponent';
import RegisterComponent from '../components/RegisterComponent';
import LoginComponent from '../components/LoginComponent';

const routes = [
    {
        path:'/',
        name:'main-page',
        component:MainComponent
    },
    {
        path:'/register',
        name:'register-page',
        component:RegisterComponent
    },
    {
        path:'/login',
        name:'login-page',
        component:LoginComponent
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;