<template>
  <div>
    <div class="row">
      <div class="col-sm-10">
        <h1 class="font-weight-light">Lista de Tarefas</h1>
      </div>
      <div class="col-sm-2">
        <button class="btn btn-primary float-right" @click="exibirFormulario = !exibirFormulario">
          <i class="fa fa-plus mr-2"></i>
          <span>Criar</span>
        </button>
      </div>
    </div>

    <ul class="list-group" v-if="tarefas.length > 0">
      <TarefaListaIten
        v-for="tarefa in tarefas"
        :key="tarefa.id"
        :tarefa="tarefa"
        @editar="selecionarTarefaParaEdicao"
      />
    </ul>
    <p v-else>Nenhuma tarefa criada</p>

    <TarefaSalvar
      v-if="exibirFormulario"
      :tarefa="tarefaSelecionada"
      @criar="criarTarefa"
      @editar="editarTarefa"
    />
  </div>
</template>

<script>
import axios from "axios";

import config from "./../config/config";
import TarefaSalvar from "./TarefaSalvar";
import TarefaListaIten from "./TarefasListaIten";

export default {
  components: {
    TarefaSalvar,
    TarefaListaIten,
  },
  data() {
    return {
      tarefas: [],
      exibirFormulario: false,
      tarefaSelecionada: undefined,
    };
  },
  created() {
    axios.get(`${config.apiUrl}/tarefas`).then((response) => {
      console.log("GET /tarefas", response);
      this.tarefas = response.data;
    });
  },
  methods: {
    criarTarefa(tarefa) {
      axios.post(`${config.apiUrl}/tarefas`, tarefa).then((response) => {
        console.log("POST /taferas", response);
        this.tarefas.push(response.data);
        this.exibirFormulario = false;
      });
    },
    editarTarefa(tarefa) {
      console.log("Editar", tarefa);
    },
    selecionarTarefaParaEdicao(tarefa) {
      this.tarefaSelecionada = tarefa;
      this.exibirFormulario = true;
    },
  },
};
</script>