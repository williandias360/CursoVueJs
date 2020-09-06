<template>
  <div>
    <h2 class="font-weight-light">Contador: {{ contador }}</h2>
    <h4 class="font-weight-light">Contador Alias: {{ contadorAlias }}</h4>
    <h4 class="font-weight-light">Contador Multiplicado: {{ contadorMultiplicado }}</h4>
    <button class="btn btn-lg btn-danger mr-1" @click="decrementar">-</button>
    <button class="btn btn-lg btn-success" @click="incrementar">+</button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      contadorLocal: 2,
    };
  },
  //computed: mapState(["contador"]),
  computed: {
    ...mapState({
      contador: (state) => state.contador.contador,
      // contador: "contador",
      contadorAlias: (state) => state.contador.contador,
      contadorMultiplicado(state) {
        return state.contador.contador * this.contadorLocal;
      },
    }),
    //outras computedProperts
  },
  methods: {
    decrementar() {
      this.$store.state.contador.contador--;
    },
    incrementar() {
      this.$store.state.contador.contador++;
    },
  },
};
</script>
