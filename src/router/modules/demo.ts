import type {RouteRecordRaw} from "vue-router";

const demo: Readonly<RouteRecordRaw[]> = [
    {path: '/user/:id', component: () => import("@/components/demo/user/UserInfo.vue")},
];
export default demo;