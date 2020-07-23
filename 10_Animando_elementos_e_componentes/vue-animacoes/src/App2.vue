<template>
  <div id="app">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Animações</h1>
        <p class="lead">Treinando transiçoes/animações de elementos/componentes no Vue.</p>
      </div>
    </div>
    <div class="container">
      <!-- <button class="btn btn-primary mb-3" @click="mostrar = !mostrar">Alternar</button> -->

      <div class="form-group">
        <label>Animaçoes:</label>
        <select class="form-control" v-model="animacaoSelecionada">
          <option value="fade">Fade</option>
          <option value="zoom">Zoom</option>
          <option value="slide">Slide</option>
        </select>
      </div>

      <div class="form-group">
        <label>Componente:</label>
        <select class="form-control" v-model="componentSelecionado">
          <option value="AppHome">Home</option>
          <option value="AppSobre">Sobre</option>
        </select>
      </div>

      <transition :name="animacaoSelecionada" mode="out-in">
        <component :is="componentSelecionado"></component>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    AppHome: () => import("./components/Home.vue"),
    AppSobre: () => import("./components/Sobre.vue")
  },
  data() {
    return {
      mostrar: true,
      animacaoSelecionada: "fade",
      alertaAtual: "info",
      componentSelecionado: "AppHome"
    };
  },
  computed: {
    classeDeAlerta() {
      return {
        alert: true,
        [`alert-${this.alertaAtual}`]: true
      };
    },
    textoDeAlerta() {
      return this.alertaAtual === "info"
        ? "Texto de informação"
        : this.alertaAtual === "warning"
        ? "Texto de Alerta"
        : "Texto de Sucesso";
    }
  },
  methods: {}
};
</script>

<style>
body {
  overflow: hidden;
}
</style>

<style scoped>
.slide-enter,
.slide-leave-to {
  opacity: 0;
}
.slide-enter-active {
  animation: slide 0.7s cubic-bezier(0.87, 0.36, 1, 0.23);
  transition: opacity 0.7s cubic-bezier(0.87, 0.36, 1, 0.23);
}

.slide-leave-active {
  animation: slide 0.7s reverse;
  transition: opacity 2s;
}

@keyframes slide {
  0% {
    transform: translateX(-100px);
  }
  100% {
    transform: translateX(0px);
  }
}

.zoom-enter,
.zoom-leave-to {
  transform: scale(0);
}

.zoom-enter-active,
.zoom-leave-active {
  transition: transform 0.5s;
}

.zoom-enter-to,
.zoom-leave {
  transform: scale(1);
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
</style>

