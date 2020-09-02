<template>
  <li class="list-group-item d-flex">
    <span>{{ tarefa.titulo }}</span>
    <span class="espacar"></span>
    <button
      class="btn btn-sm mr-4"
      :class="classeCss"
      :title="tituloBotaoConcluido"
    >
      <i class="fa fa-check"></i>
    </button>
    <button
      class="btn btn-primary btn-sm mr-1"
      title="Editar"
      @click="$emit('editar', tarefa)"
    >
      <i class="fa fa-pencil-alt"></i>
    </button>
    <button
      class="btn btn-danger btn-sm"
      title="Deletar"
      @click="$emit('deletar', tarefa)"
    >
      <i class="fa fa-trash"></i>
    </button>
  </li>
</template>

<script>
export default {
  props: {
    tarefa: {
      type: Object,
      required: true,
    },
  },
  computed: {
    classeCss() {
      return {
        "btn-secondary": !this.tarefa.concluido,
        "btn-success": this.tarefa.concluido,
      };
    },
    tituloBotaoConcluido() {
      return this.tarefa.concluido ? "Refazer Tarefa" : "Concluir Tarefa";
    },
  },
  methods: {
    concluirTarefa() {
      this.$emit(
        "concluir",
        Object.assign({}, this.tarefa, { concluido: !this.tarefa.concluido })
      );
    },
  },
};
</script>

<style scoped>
.espacar {
  flex: 1 1 auto;
}
</style>
