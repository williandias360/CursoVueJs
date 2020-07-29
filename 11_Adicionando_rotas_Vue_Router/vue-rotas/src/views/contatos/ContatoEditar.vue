<template>
  <div>
    <h3 class="font-weight-light">Editar contato com o id: {{ id }}</h3>
    <button class="btn btn-secondary mt-4 mb-4" @click="$router.back()">
      Voltar
    </button>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      curso: "Curso de Vue JS",
    };
  },
  beforeRouteEnter(to, from, next) {
    console.log("beforeRouteEnter");
    /*if (to.query.autenticado === "true") {
      return next((vm) => {
        //Caso precise acessar a instancia Vue, é necessário criar um callback para a função next
        console.log("Curso: ", vm.curso);
      });
    }
    next("/contatos");*/
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("beforeRouteLeave");
    const confirmar = window.confirm("Deseja realmente sair?");
    next(confirmar);
  },
};
</script>
