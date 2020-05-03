<template>
  <div class="row">
    <!-- coluna 1 -->
    <div class="col-8">
      <h2>Filmes</h2>

      <ul class="list-group list-group-flush">
        <FilmesListaIten
          v-for="filme in filmes"
          :key="filme.id"
          :filme="filme"
          :class="aplicarClasseAtiva(filme)"
          @selecionarFilme="filmeSelecionado = $event "
        />

        <!-- <FilmesListaIten filmeTitulo="Marvel Demolidor" /> -->
      </ul>
    </div>

    <!-- coluna 2 -->
    <div class="col-4">
      <FilmesListaItenInfo :filme="filmeSelecionado" />
    </div>
  </div>
</template>

<script>
import FilmesListaIten from "./FilmesListaIten.vue";
import FilmesListaItenInfo from "./FilmesListaItenInfo.vue";

export default {
  components: {
    FilmesListaIten,
    FilmesListaItenInfo
  },
  data() {
    return {
      filmes: [
        {
          id: 1,
          titulo: "Vingadores: Guerra Infinita",
          ano: 2018,
          diretor: "Stan Lee"
        },
        {
          id: 2,
          titulo: "Homem Formiga e a Vespa",
          ano: 2018,
          diretor: "Stan Lee"
        },
        { id: 3, titulo: "Pantera Negra", ano: 2018, diretor: "Stan Lee" },
        { id: 4, titulo: "DeadPool 2", ano: 2018, diretor: "Stan Lee" }
      ],
      filmeSelecionado: undefined
    };
  },
  methods: {
    aplicarClasseAtiva(filmeIterado) {
      return {
        active: this.filmeSelecionado && this.filmeSelecionado.id === filmeIterado.id
      }
    }
  }
};
</script>
