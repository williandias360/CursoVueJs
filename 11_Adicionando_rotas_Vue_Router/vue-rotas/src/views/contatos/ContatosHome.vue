<template>
  <div>
    <ContatosLista :busca="busca" />
  </div>
</template>

<script>
import ContatosLista from "./../../components/contatos/ContatosLista";
export default {
  components: {
    ContatosLista,
  },
  props: ["busca"],
};
</script>