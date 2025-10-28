import type {RouteRecordRaw} from "vue-router";

const chartsRouter: Readonly<RouteRecordRaw[]> = [
    {path: '/user/:id', component: () => import("@/components/demo/user/UserInfo.vue")},
];
export default chartsRouter;