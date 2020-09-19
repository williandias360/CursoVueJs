<template>
  <div class="mt-4">
    <hr />
    <h2 class="font-weight-light">Salvar Tarefa</h2>
    <form @submit.prevent="salvar">
      <div class="row">
        <div :class="classeColuna">
          <div class="form-group">
            <label>Título</label>
            <input
              type="text"
              class="form-control"
              placeholder="Título da tarefa"
              v-model="tarefa.titulo"
            />
          </div>
        </div>
        <div class="col-sm-2" v-if="tarefaSelecionada">
          <div class="form-group">
            <label>Tarefa concluída?</label>
            <button
              type="button"
              class="btn btn-sm d-block"
              :class="classeBotao"
              @click="tarefa.concluido = !tarefa.concluido"
            >
              <i class="fa fa-check"></i>
            </button>
          </div>
        </div>
      </div>

      <button type="submit" class="btn btn-primary">Salvar</button>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      tarefa: {},
    };
  },
  computed: {
    ...mapState("tarefas", ["tarefaSelecionada"]),
    classeBotao() {
      return this.tarefaSelecionada && this.tarefa.concluido
        ? "btn-success"
        : "btn-secondary";
    },
    classeColuna() {
      return this.tarefaSelecionada ? "col-sm-10" : "col-sm-12";
    },
  },
  watch: {
    tarefaSelecionada(tarefaNova) {
      this.sincronizar(tarefaNova);
    },
  },
  created() {
    this.sincronizar(this.tarefaSelecionada);
  },
  methods: {
    salvar() {
      const operacao = !this.tarefaSelecionada ? "criar" : "editar";
      this.$emit("salvar", { operacao, tarefa: this.tarefa });
    },
    sincronizar(novaTarefa) {
      this.tarefa = Object.assign(
        {},
        novaTarefa || { titulo: "", concluido: false }
      );
    },
  },
};
</script>
