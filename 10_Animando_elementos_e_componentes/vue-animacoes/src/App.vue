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
      <!-- <transition name="slide" type="animation" :duration="{enter:1200, leave:500}">
        <div class="alert alert-primary" v-if="mostrar">Animações no Vue</div>
      </transition>-->
      <!-- <transition
        enter-class
        enter-active-class="animate__animated animate__bounceInLeft"
        enter-to-class
        leave-class
        leave-active-class="animate__animated animate__backOutDown"
        leave-to-class
      >
        <div class="alert alert-primary" v-if="mostrar">Animações no Vue</div>
      </transition>-->
      <!-- <transition
        appear
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @enter-cancelled="enterCancelled"
        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
        @leave-cancelled="leaveCancelled"
        :css="false"
      >
        <div class="alert alert-primary" v-if="mostrar">Animações no Vue</div>
      </transition>-->
      <transition
        appear
        appear-class
        appear-active-class="animate__animated animate__flipInY"
        appear-to-class
        @before-appear="beforeAppear"
        @appear="appear"
        @after-appear="afterAppear"
        @appear-cancelled="appearCancelled"
        enter-class
        enter-active-class="animate__animated animate__bounceInLeft"
        enter-to-class
        leave-class
        leave-active-class="animate__animated animate__bounceOutDown"
        leave-to-class
      >
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
  },
  methods: {
    beforeAppear() {
      console.log("beforeAppear");
    },
    appear(any, done) {
      console.log("appear");
      setTimeout(done, 1000);
    },
    afterAppear() {
      console.log("afterAppear");
    },
    appearCancelled() {
      console.log("appearCancelled");
    },
    beforeEnter(el) {
      console.log("beforeEnter");
      el.style.opacity = 0;
    },
    enter(el, done) {
      console.log("enter");

      let contagem = 0;

      const intervalo = setInterval(() => {
        el.style.opacity = +el.style.opacity + 0.1;
        contagem++;

        if (contagem > 10) {
          clearInterval(intervalo);
          done();
        }
      }, 150);
    },
    afterEnter() {
      console.log("afterEnter");
    },
    enterCancelled() {
      console.log("enterCancelled");
    },
    beforeLeave(el) {
      console.log("beforeLeave");
      el.style.transition = "width 0.5s";
      el.style.overflow = "hidden";
      el.style.whiteSpace = "nowrap";
    },
    leave(el, done) {
      console.log("leave");

      let contagem = 0;
      const tamanho = el.offsetWidth;

      const intervalo = setInterval(() => {
        el.style.width = tamanho * (1 - contagem / 10) + "px";
        contagem++;

        if (contagem > 10) {
          clearInterval(intervalo);
          done();
        }
      }, 150);
    },
    afterLeave() {
      console.log("afterLeave");
    },
    leaveCancelled() {
      console.log("leaveCancelled");
    }
  }
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

