<template>
  <div>
    <h2>Sobre</h2>
    <p v-if="autor">Autor: {{autor}}</p>
    <input type="text" v-model="autor">
  </div>
</template>

<script>
export default {
  name:"SobreNos",
  data() {
    return {
      autor: ""
    };
  },
  created(){
      console.log("Created");
  },
  destroyed(){
      console.log("Destroyed");
  },
  activated(){
      console.log("Activated");
  },
  deactivated(){
      console.log("Deactivated");
  }
};
</script>