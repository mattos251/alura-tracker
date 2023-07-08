import { createRouter,RouteRecordRaw, createWebHashHistory } from "vue-router";
import Tarefas from '../views/Tarefas.vue'
import Projetos from '../views/Projetos.vue'
import Formulario from '../views/Projetos/Formulario.vue'

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
    },

    {
        path: '/Projetos/novo',
        name: ' Novo projeto',
        component: Formulario
    },

    {
        path: '/Projetos/:id',
        name: ' Editar projeto',
        component: Formulario,
        props: true
    }
]


const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default roteador;