<template>
  <div id="app" class="container">
    <h1>Components Dinamicos</h1>
    <button @click="componentSelecionado = 'Home'">Home</button>
    <button @click="componentSelecionado = 'PostsLista'">Posts</button>
    <button @click="componentSelecionado = 'Sobre'">Sobre</button>
    <button @click="componentSelecionado = 'Assincrono'">Assincrono</button>

    <keep-alive :exclude="['Home','PostsLista']">
      <component :is="componentSelecionado" v-bind="propsAtuais"></component>
    </keep-alive>
    <!-- <PostsLista :posts="posts"/>

    <hr>

    <h1>Slots com escopo</h1>

    <PostsLista :posts="posts" v-slot="{ meuPost }">
        <h2>{{meuPost.titulo}}</h2>
        <p>{{meuPost.conteudo}}</p>
        <small>{{meuPost.autor}}</small>
      
    </PostsLista>-->
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import PostsLista from "./components/PostsLista.vue";
import Sobre from "./components/Sobre.vue";
export default {
  components: {
    Assincrono: () => ({
      component: new Promise(reject => {
        setTimeout(() => {
          //resolve(import("./components/Assincrono.vue"));
          reject("Carregamento falou");
        }, 2000);
      }), //import("./components/Assincrono.vue"),
      loading: { template: "<p>Carregando</p>" },
      error: { template: "<p>Erro ao carregar component</p>" },
      delay: 200,
      timeout: 3000
    }),
    Home,
    PostsLista,
    Sobre
  },
  data() {
    return {
      componentSelecionado: "Home",
      posts: [
        {
          id: 1,
          titulo: "Components no Vue",
          conteudo: "Componentes não uma das peças mais importantes no Vue",
          autor: "Willian Dias"
        },
        {
          id: 2,
          titulo: "Distribuindo conteúdo com Slots",
          conteudo: "Slots podem ser usados como repostiórios de código HTML",
          autor: "Willian"
        }
      ]
    };
  },
  computed: {
    propsAtuais() {
      return this.componentSelecionado === "PostsLista"
        ? { posts: this.posts }
        : {};
    }
  }
};
</script>

<style scoped>
.container {
  width: 960px;
  margin: auto;
}
</style>


