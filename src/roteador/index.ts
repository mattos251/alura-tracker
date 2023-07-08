import { createRouter,RouteRecordRaw, createWebHashHistory } from "vue-router";
import Tarefas from '../views/Tarefas.vue'
import Projetos from '../views/Projetos.vue'

const rotas: RouteRecordRaw[] = [
    
    {
        path: '/',
        name: 'tarefas',
        component: Tarefas
    },
    {
        path: '/Projetos',
        name: 'projetos',
        component: Projetos
    }



]


const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default roteador;