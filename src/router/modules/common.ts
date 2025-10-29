import type {RouteRecordRaw} from "vue-router";

export const common: Readonly<RouteRecordRaw[]> = [
	{path: '/404', component: () => import("@/views/404/404.vue")},
];
export default {common: common};