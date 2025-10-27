import {createMemoryHistory, createRouter} from 'vue-router'

import Hello from "../components/Hello.vue";

const routes = [
    {path: '/hello', component: Hello},
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})
export default router