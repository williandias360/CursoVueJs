<template>
  <div id="app">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Animações</h1>
        <p class="lead">Treinando transiçoes/animações de elementos/componentes no Vue.</p>
      </div>
    </div>
    <div class="container">
      <h3 class="font-weight-light">Animações de Estado</h3>
      <div class="form-group">
        <input class="form-control" v-model="numero" step="50" />
      </div>
      <div class="alert alert-info">
        <h3 class="font-weight-light">
          <strong>Número:</strong>
          <span>{{numeroAnimado}}</span>
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
import { TweenLite } from "gsap";

export default {
  data() {
    return {
      numero: 0,
      numeroInterpolado: 0
    };
  },
  computed: {
    numeroAnimado() {
      return this.numeroInterpolado.toFixed(0);
    }
  },
  watch: {
    numero(novoNumero) {
      TweenLite.to(this.$data, 2, { numeroInterpolado: novoNumero });
    }
  }
};
</script>


