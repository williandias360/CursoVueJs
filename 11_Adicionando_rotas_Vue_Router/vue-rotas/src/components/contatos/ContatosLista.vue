<template>
  <div>
    <h3 class="font-weight-light">Contatos</h3>

    <ul class="list-group" v-if="contatos.length > 0">
      <ContatosListaItem
        class="list-group-item"
        v-for="contato in contatos"
        :key="contato.id"
        :contato="contato"
      />
    </ul>

    <p v-else>Nenhum contato cadastrado</p>

    <button class="btn btn-secondary mt-4 mb-4" @click="voltar">Voltar</button>
  </div>
</template>

<script>
import ContatosListaItem from "./ContatosListaItem";

export default {
  components: {
    ContatosListaItem,
  },
  data() {
    return {
      contatos: [
        { id: 1, nome: "Isaac Newton", email: "issac@email.com" },
        { id: 2, nome: "Albert Einstein", email: "albert@email.com" },
        { id: 3, nome: "Stephen Hawing", email: "stephen@email.com" },
      ],
    };
  },
  methods: {
    voltar() {
      //this.$router.push("/");
      // this.$router.replace("/");
      // this.$router.go(-3);
      // this.$router.forward();
      this.$router.back();
    },
  },
};
</script>