import Vue from "vue";
import VueRouter from "vue-router";
import Changelog from "@/views/Changelog";
import MultiQuery from "@/views/MultiQuery";
import NotFoundComponent from "@/components/NotFoundComponent";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: MultiQuery,
    },
    {
        path: "/changelog",
        name: "changelog",
        component: Changelog,
    },
    {
        path: '*',
        component: NotFoundComponent,
        name: 'NotFound'
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
