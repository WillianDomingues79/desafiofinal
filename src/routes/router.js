import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '@/components/Home.vue'
import ShowMovie from '@/components/ShowMovie.vue'
import Postcomponent from '@/components/Postcomponent.vue'


const routes = [
    {
        path:'/',
        name: 'home',
        component:Home
    },
    {
        path: '/ShowMovie/:id',
        name: 'ShowMovie',
        component: ShowMovie
    },
    {
        path: '/comentarios',
        name: 'postcomponent',
        component: Postcomponent
    }
];

const router = new VueRouter({
    routes,
    mode:'history'
});

export default router;