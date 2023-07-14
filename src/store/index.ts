import IProjeto from "@/interfaces/IProjeto";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { ADICIONE_PROJETO, ALTERA_PROJETO, EXCLUIR_PROJETO } from "./tipo-mutacoes";

interface Estado{
    projetos: IProjeto[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store= createStore<Estado>({
    state: {
        projetos: []
    },
    mutations:{
        [ADICIONE_PROJETO](state,nomeDoProjeto:string){
            const projeto = {
                id: new Date().toISOString(),
                nome: nomeDoProjeto
            } as IProjeto
            state.projetos.push(projeto)
        },
        [ALTERA_PROJETO](state, Projeto: IProjeto){
            const index = state.projetos.findIndex(proj => proj.id == Projeto.id)
            state.projetos[index] = Projeto 
        },
        [EXCLUIR_PROJETO](state, id:string){
            state.projetos = state.projetos.filter(proj => proj.id != id ) 
        }
    }
})

export function useStore(): Store<Estado> {
    return vuexUseStore(key)
}