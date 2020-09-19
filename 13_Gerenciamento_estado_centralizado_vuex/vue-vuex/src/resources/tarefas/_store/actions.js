import * as types from "./mutation-types";
import TarefasServices from "./../_services/TarefasService";

export default {
  concluirTarefa: async ({ dispatch, commit }, payload) => {
    try {
      const tarefa = Object.assign({}, payload.tarefa);
      tarefa.concluido = !tarefa.concluido;
      dispatch("editarTarefa", { tarefa });
    } catch (erro) {
      commit(types.SETAR_ERRO, { erro });
    }
  },
  criarTarefa: ({ commit }, { tarefa }) => {
    return TarefasServices.postTarefa(tarefa)
      .then((response) => commit(types.CRIAR_TAREFA, { tarefa: response.data }))
      .catch((erro) => commit(types.SETAR_ERRO, { erro }));
  },
  editarTarefa: async ({ commit }, { tarefa }) => {
    try {
      const response = await TarefasServices.putTarefa(tarefa);
      commit(types.EDITAR_TAREFA, { tarefa: response.data });
    } catch (erro) {
      commit(types.SETAR_ERRO, { erro });
    }
  },
  deletarTarefa: async ({ commit }, { tarefa }) => {
    try {
      await TarefasServices.deleteTarefa(tarefa.id);
      commit(types.DELETAR_TAREFA, { tarefa });
    } catch (erro) {
      commit(types.SETAR_ERRO, { erro });
    }
  },
  listarTarefas: async ({ commit }) => {
    try {
      const response = await TarefasServices.getTarefas();
      commit(types.LISTAR_TAREFAS, { tarefas: response.data });
    } catch (erro) {
      commit(types.SETAR_ERRO, { erro });
    }
  },
  selecionarTarefa: ({ commit }, payload) => {
    commit(types.SELECIONAR_TAREFA, payload);
  },
  resetarTarefaSelecionada: ({ commit }) => {
    commit(types.SELECIONAR_TAREFA, { tarefa: undefined });
  },
};
