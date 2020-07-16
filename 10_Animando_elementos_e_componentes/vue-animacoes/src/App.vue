<template>
  <div id="app">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Animações</h1>
        <p class="lead">Treinando transiçoes/animações de elementos/componentes no Vue.</p>
      </div>
    </div>
    <div class="container">
      <button class="btn btn-primary mb-3" @click="mostrar = !mostrar">Alternar</button>
      <transition name="slide" type="animation">
        <div class="alert alert-primary" v-if="mostrar">Animações no Vue</div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mostrar: true
    };
  }
};
</script>

<style scoped>
.slide-enter,
.slide-leave-to {
  opacity: 0;
}
.slide-enter-active {
  animation: slide 0.7s;
  transition: opacity 0.7s;
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

