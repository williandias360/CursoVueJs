import Vue from "vue";

export default new Vue({
  data: {
    autenticado: false,
  },
  created() {
    this.$on("autenticar", (autenticado) => {
      this.autenticado = autenticado;
    });
  },
});
