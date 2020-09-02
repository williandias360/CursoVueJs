<template>
  <div>
    <div class="row">
      <div class="col-sm-10">
        <h1 class="font-weight-light">Lista de Tarefas</h1>
      </div>
      <div class="col-sm-2">
        <button
          class="btn btn-primary float-right"
          @click="exibirFormularioCriarTarefa"
        >
          <i class="fa fa-plus mr-2"></i>
          <span>Criar</span>
        </button>
      </div>
    </div>

    <h3 class="font-weight-light">
      A Fazer ({{ $store.getters.tarefasAFazer.length }})
    </h3>

    <ul class="list-group" v-if="$store.getters.tarefasAFazer.length > 0">
      <TarefaListaIten
        v-for="tarefa in $store.getters.tarefasAFazer"
        :key="tarefa.id"
        :tarefa="tarefa"
        @editar="selecionarTarefaParaEdicao"
      />
    </ul>

    <p v-else-if="!mensagemErro">Nenhuma tarefa a fazer</p>

    <h3 class="font-weight-light">
      Concluidas ({{ $store.getters.totalDeTarefasConcluidas }})
    </h3>

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
import { mapState } from "vuex";
import TarefaSalvar from "./TarefaSalvar";
import TarefaListaIten from "./TarefasListaIten";

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
    tarefasConcluidas() {
      return this.$store.getters.tarefasConcluidas;
    },
  },
  methods: {
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
