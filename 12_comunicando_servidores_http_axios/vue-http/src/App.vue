<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      crossorigin="anonymous"
    />
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Requisições HTTP no Vue</h1>
        <p class="lead">Usando a biblioteca Axios para fazer chamadas Ajax à uma API REST.</p>
      </div>
    </div>

    <div class="container">
      <TarefasLista />
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
};
</script>