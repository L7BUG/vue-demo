import type { RouteRecordRaw } from "vue-router";

export const demo: Readonly<RouteRecordRaw[]> = [
	{
		path: "/user/:id(\\d+)/:username",
		component: () => import("@/components/demo/user/UserInfo.vue"),
	},
];
export const demoPathList: string[] = [];
demoPathList.push("/user/3/张三?password=123");
demoPathList.push("/user/4/李四?password=8888");
export default { demo, demoPathList };
