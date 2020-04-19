<template>
    <div>
        <h1>{{titulo}}</h1>
        <input v-model="titulo">
    </div>
</template>

<script>
export default {
  data: function () {
    return {
      titulo: 'Olá VueJs'
    }
  }
}
</script>
