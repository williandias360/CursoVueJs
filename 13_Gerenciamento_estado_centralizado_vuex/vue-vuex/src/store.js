import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const contadorModule = {
  namespaced: true,
  state: {
    contador: 0,
  },
  getters: {
    contadorAtual: (state) => state.contador,
  },
};

const tarefasModule = {
  namespaced: true,
  state: {
    tarefas: [],
  },
  getters: {
    tarefasConcluidas: (state, getters, rootState) => {
      console.log("Getters State", state, rootState);
      return state.tarefas.filter((t) => t.concluido);
    },
    tarefasAFazer: (state) => state.tarefas.filter((t) => !t.concluido),
    totalDeTarefasConcluidas: (state, getters) =>
      getters.tarefasConcluidas.length,
    buscarTarefaPorId: (state) => (id) =>
      state.tarefas.find((t) => t.id === id),
  },
  mutations: {
    listarTarefas: (state, { tarefas }) => {
      state.tarefas = tarefas;
    },
  },
  actions: {
    buscarTarefas: () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            { id: 1, titulo: "Aprender Vue", concluido: true },
            { id: 2, titulo: "Aprender Vue Router", concluido: true },
            { id: 3, titulo: "Aprender Vuex", concluido: false },
          ]);
        }, 2000);
      });
    },
    listarTarefas: async ({ commit, dispatch, state, rootState }) => {
      console.log("Action: listarTarefas");
      const tarefas = await dispatch("buscarTarefas");
      console.log("Mutation: listarTarefas");
      commit("listarTarefas", { tarefas });
      console.log("Actions: state", state, rootState);
    },
  },
};

const store = new Vuex.Store({
  state: {
    usuario: "Willian Dias Brito",
  },
  modules: {
    contador: contadorModule,
    tarefas: tarefasModule,
  },
});

console.log("Store", store);

export default store;
