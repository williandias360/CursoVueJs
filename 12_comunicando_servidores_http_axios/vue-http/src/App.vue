<template>
  <div id="app">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Requisições HTTP no Vue</h1>
        <p class="lead">Usando a biblioteca Axios para fazer chamadas Ajax à uma API REST.</p>
      </div>
    </div>

    <div class="container">
      <TarefasLista />

      <button class="btn btn-primary mt-4 mb-2" @click="download">Baixar Imagem</button>
      <div class="progress">
        <div
          class="progress-bar"
          role="progressbar"
          :style="{ width: progresso + '%'}"
          :aria-valuenow="progresso"
          aria-valuemin="0"
          aria-valuemax="100"
        >{{progresso}} %</div>
      </div>
      <div v-if="imagem">
        <img :src="imagem" style="max-width:100%" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import config from "./config/config";
import TarefasLista from "./components/TarefasLista";

export default {
  components: {
    TarefasLista,
  },
  data() {
    return {
      progresso: 0,
      imagem: undefined,
    };
  },
  async created() {
    //https://showmethecode.com.br/async-await/
    //Chamadas simultaneas
    /*axios
      .all([
        axios.get(`${config.apiUrl}/tarefas/1`),
        axios.get(`${config.apiUrl}/tarefas/3`),
      ])
      .then(
        axios.spread((tarefa1, tarefa3) => {
          console.log("Requisições simultaneas:");
          console.log("Tarefa 1", tarefa1);
          console.log("Tarefa 3", tarefa3);
        })
      );*/

    /*axios
      .all([
        axios.get(`${config.apiUrl}/tarefas/1`),
        axios.get(`${config.apiUrl}/tarefas/3`),
      ])
      .then((response) => {
        const [tarefa1, tarefa3] = response;
        console.log("Requisições simultaneas:");
        console.log("Tarefa 1", tarefa1);
        console.log("Tarefa 3", tarefa3);
      });
      */

    const tarefa1 = await axios.get(`${config.apiUrl}/tarefas/1`);
    const tarefa3 = await axios.get(`${config.apiUrl}/tarefas/3`);

    console.log("Requisições simultaneas:");
    console.log("Tarefa 1", tarefa1);
    console.log("Tarefa 3", tarefa3);
  },
  methods: {
    download() {
      axios
        .get(
          "https://images.unsplash.com/photo-1559301011-32201d61ba29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1008&q=80",
          {
            responseType: "blob",
            onDownloadProgress: (progressEvent) => {
              console.log("Fazendo download...", progressEvent);
              this.progresso = (
                (progressEvent.loaded / progressEvent.total) *
                100
              ).toFixed(0);
            },
          }
        )
        .then((response) => {
          console.log("Download concluído!", response);
          const reader = new window.FileReader();
          reader.readAsDataURL(response.data);
          reader.onload = () => {
            this.imagem = reader.result;
          };
        });
    },
  },
};
</script>