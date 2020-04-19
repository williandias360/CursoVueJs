<template>
  <div>
    <h2>Clicado {{contador}} vezes</h2>
    <button @click="incrementar">Incrementar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contador: 0
    };
  },
  methods: {
    incrementar() {
      this.contador++
    }
  }
};
</script>