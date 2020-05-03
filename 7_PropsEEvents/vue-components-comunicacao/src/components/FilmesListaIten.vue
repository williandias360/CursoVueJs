<template>
  <li class="list-group-item">
    <span>{{filme.titulo}} | {{filme.ano}}</span>
    <button @click="selecionar" class="btn btn-secondary float-right">Selecionar</button>
  </li>
</template>

<script>
import {eventBus} from "./../main"
export default {
  props: {
    // titulo: {
    //   type: String,
    //   required: true
    //   //   default(){
    //   //       return 'Vingadores'
    //   //   },
    // },
    // ano: {
    //   type: Number,
    //   required: true
    // }
    filme: {
      type: Object,
      required: true
    }
  },
  methods:{
    selecionar(){
      //this.$emit("selecionarFilme", this.filme)
      //eventBus.$emit("selecionarFilme", this.filme)
      eventBus.selecionarFilme(this.filme)
    }
  }
};
</script>
