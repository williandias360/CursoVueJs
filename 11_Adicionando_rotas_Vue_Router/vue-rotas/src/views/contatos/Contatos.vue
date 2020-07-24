<template>
  <div>
    <ContatosLista />
    <router-view></router-view>
    <router-view name="contato-detalhe"></router-view>
  </div>
</template>


<script>
import ContatosLista from "./../../components/contatos/ContatosLista";
export default {
  components: {
    ContatosLista,
  },
};
</script>