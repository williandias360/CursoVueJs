<template>
  <div id="app">
    
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Formulários no Vue</h1>
        <p class="lead">Treinando a manipulação de formulários</p>
      </div>
    </div>

    <div class="container">

      <div class="row">

        <!-- formulario -->
        <div class="col-sm-6">

          <h3>Preencha abaixo</h3>

          <form>

            <div class="form-group">
              <label>Nome:</label>
              <input 
              type="text" 
              class="form-control" 
              placeholder="Seu nome"
              v-model.lazy.trim="desenvolvedor.nome"
              >
            </div>

            <div class="form-group">
              <label>Endereço de email:</label>
              <input 
              type="email" 
              class="form-control" 
              placeholder="Seu email"
              v-model.lazy="desenvolvedor.email"
              >
            </div>

            <div class="form-group">
              <label>Idade:</label>
              <input 
              type="number" 
              class="form-control" 
              placeholder="Sua idade"
              v-model.number="desenvolvedor.idade"
              >
            </div>

            <div class="form-group">

              <p>Gênero:</p>

              <div class="form-check form-check-inline">
                <input type="radio" class="form-check-input" value="Masculino">
                <label class="form-check-label">Masculino</label>
              </div>

              <div class="form-check form-check-inline">
                <input type="radio" class="form-check-input" value="Feminino">
                <label class="form-check-label">Feminino</label>
              </div>

            </div>

            <div class="form-group">
              <label>Ocupação:</label>
              <select class="form-control" placeholder="Seu email">
                <option>Selecione uma opção...</option>
              </select>
            </div>  

            <div class="form-group">

              <p>Tecnologias:</p>

              <div class="form-check form-check-inline">
                <input type="checkbox" class="form-check-input" value="JavaScript">
                <label class="form-check-label">JavaScript</label>
              </div>

              <div class="form-check form-check-inline" value="Vue JS">
                <input type="checkbox" class="form-check-input">
                <label class="form-check-label">Vue JS</label>
              </div>

              <div class="form-check form-check-inline">
                <input type="checkbox" class="form-check-input" value="Vuex">
                <label class="form-check-label">Vuex</label>
              </div>

              <div class="form-check form-check-inline">
                <input type="checkbox" class="form-check-input" value="Vue Router">
                <label class="form-check-label">Vue Router</label>
              </div>

            </div>      

            <div class="form-group">
              <label>Resumo de perfil:</label>
              <textarea class="form-control" placeholder="Conte-nos um pouco sobre você..."></textarea>
            </div>

            <div class="form-group">

              <div class="form-check form-check-inline">
                <input type="checkbox" class="form-check-input">
                <label class="form-check-label">Receber notificações por email</label>
              </div>

            </div>

            <button class="btn btn-secondary">Resetar</button>
            <button class="btn btn-success">Enviar</button>

          </form>

        </div>

        <!-- saida -->
        <div class="col-sm-6">

          <h3>Saída</h3>

          <div class="card">

            <div class="card-header">Dados</div>

            <ul class="list-group list-group-flush">
              <li class="list-group-item"><strong>Nome:</strong>{{ desenvolvedor.nome }}</li>
              <li class="list-group-item"><strong>Email:</strong>{{ desenvolvedor.email }} </li>
              <li class="list-group-item"><strong>Idade:</strong>{{ desenvolvedor.idade }}</li>
              <li class="list-group-item"><strong>Gênero:</strong> </li>
              <li class="list-group-item"><strong>Ocupação:</strong> </li>
              <li class="list-group-item"><strong>Tecnologias:</strong> </li>
              <li class="list-group-item"><strong>Biografia:</strong> </li>
              <li class="list-group-item"><strong>Receber notificações?</strong> </li>
            </ul>

            <div class="card-header">Model</div>

            <div class="card-body">
              <pre><code>{{ desenvolvedor }}</code></pre>
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<script>
export default {
    data(){
      return{
        desenvolvedor:{
          nome:"Willian",
          email:"",
          idade:29
        }
      }
    }
}
</script>

<style scoped>
  .btn {
    margin-right: 5px;
  }
</style>