import { createRouter,RouteRecordRaw, createWebHashHistory } from "vue-router";

const rotas: RouteRecordRaw[] = [{
    path: '/',
    name: 'tarefas',
    component: 
}]


const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default roteador;