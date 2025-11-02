import {
	createRouter,
	createWebHashHistory,
	type RouteRecordRaw,
} from "vue-router";
import { demo } from "@/router/modules/demo.ts";
import { common } from "@/router/modules/common.ts";

const routes: RouteRecordRaw[] = [
	{ path: "/hello", component: () => import("@/components/Hello.vue") },
	{ path: "/login", component: () => import("@/pages/login/index.vue") },
	{
		path: "/file-info",
		component: () => import("@/views/File/FileInfo.vue"),
	},
	{ path: "/", redirect: "/login" },
];
const temp = (item: RouteRecordRaw) => {
	if (item.path && item.component) {
		routes.push({
			path: item.path,
			component: item.component,
		});
	}
};
demo.forEach(temp);
common.forEach(temp);
const router = createRouter({
	history: createWebHashHistory(),
	routes,
});
router.beforeEach((to, from, next) => {
	console.log("to=>", to);
	console.log("from=>", from);
	console.log("next=>", next);
	return next();
});
export default router;
