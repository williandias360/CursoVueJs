<template>
  <form class="form-signin" @submit.prevent="entrar">
    <h1 class="h3 mb-3 font-weight-normal">Faça seu login</h1>
    <label class="sr-only">Email</label>
    <input
      type="email"
      class="form-control"
      placeholder="Email"
      required
      autofocus
      v-model="usuario.email"
    />
    <label class="sr-only">Senha</label>
    <input
      type="password"
      class="form-control"
      placeholder="Senha"
      required
      v-model="usuario.senha"
    />
    <button class="btn btn-lg btn-primary btn-block" type="submit">
      Entrar
    </button>
    <div class="alert alert-danger mt-3" v-if="mensagem">{{ mensagem }}</div>
  </form>
</template>

<script>
import EventBus from "./../../event-bus";
export default {
  data() {
    return {
      usuario: {
        email: "",
        senha: "",
      },
      mensagem: "",
    };
  },
  methods: {
    entrar() {
      if (
        this.usuario.email === "willian@email.com" &&
        this.usuario.senha === "1234"
      ) {
        EventBus.$emit("autenticar", true);
        const destino = this.$route.query.redirecionar || "/contatos";
        this.$router.push(destino);
        return;
      }

      this.mensagem = "Dados incorretos";
      setTimeout(() => (this.mensagem = ""), 3000);
    },
  },
};
</script>

<style scoped>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}

.form0signin .form-control:focus {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
