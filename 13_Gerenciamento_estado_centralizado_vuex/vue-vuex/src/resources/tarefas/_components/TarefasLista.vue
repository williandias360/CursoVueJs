<template>
  <div>
    <div class="row">
      <div class="col-sm-10">
        <h1 class="font-weight-light">Lista de Tarefas</h1>
      </div>
      <div class="col-sm-2">
        <button class="btn btn-primary float-right" @click="exibirFormularioCriarTarefa">
          <i class="fa fa-plus mr-2"></i>
          <span>Criar</span>
        </button>
      </div>
    </div>

    <h3 class="font-weight-light">A Fazer ({{ tarefasAFazer.length }})</h3>

    <ul class="list-group" v-if="tarefasAFazer.length > 0">
      <TarefaListaIten
        v-for="tarefa in tarefasAFazer"
        :key="tarefa.id"
        :tarefa="tarefa"
        @editar="selecionarTarefaParaEdicao"
      />
    </ul>

    <p v-else-if="!mensagemErro">Nenhuma tarefa a fazer</p>

    <h3 class="font-weight-light">Concluidas ({{ totalDeTarefasConcluidas }})</h3>

    <ul class="list-group" v-if="tarefasConcluidas.length > 0">
      <TarefaListaIten
        v-for="tarefa in tarefasConcluidas"
        :key="tarefa.id"
        :tarefa="tarefa"
        @editar="selecionarTarefaParaEdicao"
      />
    </ul>

    <p v-else-if="!mensagemErro">Nenhuma tarefa concluída</p>

    <div class="alert alert-danger" v-else>{{ mensagemErro }}</div>

    <TarefaSalvar v-if="exibirFormulario" :tarefa="tarefaSelecionada" />
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

import TarefaSalvar from "./TarefaSalvar";
import TarefaListaIten from "./TarefasListaIten";

const { mapState, mapActions, mapGetters } = createNamespacedHelpers("tarefas");

export default {
  components: {
    TarefaSalvar,
    TarefaListaIten,
  },
  data() {
    return {
      exibirFormulario: false,
      tarefaSelecionada: undefined,
      mensagemErro: undefined,
    };
  },
  computed: {
    ...mapState(["tarefas"]),
    ...mapGetters([
      "tarefasAFazer",
      "tarefasConcluidas",
      "totalDeTarefasConcluidas",
      "boasVindas",
    ]),
  },
  created() {
    /*this.$store.commit({
      type: "listarTarefas",
      tarefas: [
        { id: 1, titulo: "Aprender Vue", concluido: true },
        { id: 2, titulo: "Aprender Vue Router", concluido: true },
        { id: 3, titulo: "Aprender Vuex", concluido: false },
      ],
    });*/
    setTimeout(async () => {
      // this.$store.dispatch("listarTarefas", {
      //   tarefas: [
      //     { id: 1, titulo: "Aprender Vue", concluido: true },
      //     { id: 2, titulo: "Aprender Vue Router", concluido: true },
      //     { id: 3, titulo: "Aprender Vuex", concluido: false },
      //   ],
      // });
      // this.$store.dispatch("listarTarefas").then(() => {
      //   console.log("Actions executadas");
      // });
      console.log("Usuario atual: ", this.boasVindas);
      await this.listarTarefas();
      console.log("Actions executadas");

      console.log("Usuario atual: ", this.boasVindas);
    }, 1000);
    console.log("Boas vindas: ", this.boasVindas);
  },
  methods: {
    ...mapActions({
      carregarTarefas: "listarTarefas",
      listarTarefas: (dispatch, payload, options) => {
        return dispatch("listarTarefas", payload, options);
      },
    }),
    // ...mapMutations({
    //   //carregarTarefas: "listarTarefas",
    //   // listarTarefas: (commit, payload, options) => {
    //   //   commit("listarTarefas", payload, options);
    //   // },
    // }),
    exibirFormularioCriarTarefa() {
      if (this.tarefaSelecionada) {
        this.tarefaSelecionada = undefined;
        return;
      }
      this.exibirFormulario = !this.exibirFormulario;
    },
    resetar() {
      this.tarefaSelecionada = undefined;
      this.exibirFormulario = false;
    },
    selecionarTarefaParaEdicao(tarefa) {
      this.tarefaSelecionada = tarefa;
      this.exibirFormulario = true;
    },
  },
};
</script>
