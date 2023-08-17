<template>
  <section>

    <form @submit.prevent="salvar">
      <div class="field">
        <label for="nomeDoProjeto" class="label"> Nome Do Projeto </label>
        <input type="text" class="input" v-model="nomeDoProjeto" id="nomeDoProjet" />
      </div>

      <div class="field">
        <button class="button" type="submit">salvar</button>
      </div>
    </form>

  </section>
</template>

<script lang="ts">
import { TipoNotificacao } from '@/interfaces/INotificacao';
import { useStore } from '@/store'
import { ADICIONE_PROJETO, ALTERA_PROJETO} from '@/store/tipo-mutacoes';
import { defineComponent } from "vue";
import useNotificador from '@/Hooks/notificador'


export default defineComponent({
  name: "Formulario",
  props:{
    id:{
      type: String
    }
  },
  mounted(){
    if(this.id){
      const projeto = this.store.state.projetos.find(proj => proj.id == this.id)
      this.nomeDoProjeto = projeto?.nome || ''
    }
  },
  data() {
    return {
      nomeDoProjeto: "",
    };
  },

  methods: {
    salvar() {
      if (this.id) {
        this.store.commit(ALTERA_PROJETO,{id: this.id, nome:this.nomeDoProjeto})
      } else {
        this.store.commit(ADICIONE_PROJETO, this.nomeDoProjeto)
      }
      this.nomeDoProjeto = "";
      this.notificar(TipoNotificacao.SUCESSO, "excelente!","O projeto foi cadastrado")
  
      this.$router.push('/projetos')
    },
  },
  setup(){
    const store = useStore()
    const {notificar} = useNotificador()
    return {
      store,
      notificar
    }
  }
});
</script>

<style scoped>
</style>
