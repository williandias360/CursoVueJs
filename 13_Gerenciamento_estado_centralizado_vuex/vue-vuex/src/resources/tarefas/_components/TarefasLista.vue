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
        @concluir="concluirTarefa({tarefa:$event})"
        @deletar="confirmarRemocaoTarefa"
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
        @concluir="concluirTarefa({tarefa:$event})"
        @deletar="confirmarRemocaoTarefa"
      />
    </ul>

    <p v-else-if="!mensagemErro">Nenhuma tarefa concluída</p>

    <div class="alert alert-danger" v-else>{{ mensagemErro }}</div>

    <TarefaSalvar v-if="exibirFormulario" @salvar="salvarTarefa" />

    <div class="alert alert-danger" v-if="erro">{{erro.message}}</div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

import register from "./../_store/register";
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
      mensagemErro: undefined,
    };
  },
  computed: {
    ...mapState(["tarefaSelecionada", "erro"]),
    ...mapGetters([
      "tarefasAFazer",
      "tarefasConcluidas",
      "totalDeTarefasConcluidas",
      "boasVindas",
    ]),
  },
  created() {
    register(this.$store);
    this.listarTarefas();
  },
  methods: {
    ...mapActions([
      "criarTarefa",
      "editarTarefa",
      "concluirTarefa",
      "listarTarefas",
      "deletarTarefa",
      "selecionarTarefa",
      "resetarTarefaSelecionada",
    ]),
    confirmarRemocaoTarefa(tarefa) {
      const confirmar = window.confirm(
        `Deseja deletar a tarefa "${tarefa.titulo}"?`
      );
      if (confirmar) {
        this.deletarTarefa({ tarefa });
      }
    },
    exibirFormularioCriarTarefa() {
      if (this.tarefaSelecionada) {
        this.resetarTarefaSelecionada();
        return;
      }
      this.exibirFormulario = !this.exibirFormulario;
    },
    resetar() {
      this.resetarTarefaSelecionada();
      this.exibirFormulario = false;
    },
    selecionarTarefaParaEdicao(tarefa) {
      this.exibirFormulario = true;
      this.selecionarTarefa({ tarefa });
    },
    async salvarTarefa(event) {
      switch (event.operacao) {
        case "criar":
          await this.criarTarefa({ tarefa: event.tarefa });
          break;
        case "editar":
          await this.editarTarefa({ tarefa: event.tarefa });
          break;
      }
      this.resetar();
    },
  },
};
</script>
