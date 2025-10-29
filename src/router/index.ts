import {createMemoryHistory, createRouter, type RouteRecordRaw} from 'vue-router'
import {demo} from "@/router/modules/demo.ts";

const routes: RouteRecordRaw[] = [
    {path: '/hello', component: () => import("@/components/Hello.vue")},
];
demo.forEach(item => {
    // 确保 item 有必要的属性
    if (item.path && item.component) {
        routes.push({
            path: item.path,
            component: item.component,
        });
    }
});
const router = createRouter({
    history: createMemoryHistory(),
    routes,
})
export default router