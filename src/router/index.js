import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Shows from "../components/Shows";
import ShowInfo from "../components/ShowInfo";

const routes= [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/shows/:data',
        name: 'Shows',
        component: Shows
    },
    {
        path: '/showinfo/:data',
        name: 'ShowInfo',
        component: ShowInfo
    },
   
   
];
const router = createRouter(
    {
        history: createWebHistory(process.env.BASE_URL),
        routes: routes
    }
);
export default router;