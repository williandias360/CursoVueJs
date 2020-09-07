const state = {
  contador: 0,
};

const getters = {
  contadorAtual: (state) => state.contador,
};

export default {
  namespaced: true,
  state,
  getters,
};
