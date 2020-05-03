<template>
  <div id="app" class="container">
    <h1>Vue JS</h1>
    <Post>
      <!-- Customizando os components
      Cria um component como container. Pode passar qualquer html-->
      <h2 slot="cabecalho">Components no Vue</h2>

      <p>Components são umas das peças mais importantes no VueJs</p>
      <span>...</span>

      <small slot="rodape">por Willian Dias</small>

      <!-- <template slot="botao">Detalhes</template> -->
    </Post>
  </div>
</template>

<script>
import Post from "./components/Post.vue";
export default {
  components: {
    Post
  }
};
</script>

<style scoped>
.container {
  width: 960px;
  margin: auto;
}
</style>


