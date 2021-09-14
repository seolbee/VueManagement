import {createRouter, createWebHistory} from 'vue-router';

import MainComponent from '../components/MainComponent';
import RegisterComponent from '../components/RegisterComponent';

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
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;