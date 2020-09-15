export default {
  namespaced: true,
  state:{
    inputValue: 0,
    inputValue2: 0
  },
  getters: {
    getValue: state => {
      return state.inputValue
    },
    getValue2: state => {
      return state.inputValue2
    }
  },
  mutations: {
    updateValue: (state, payload) => {
      state.inputValue = payload
    },
    updateValue2: (state, payload) => {
      state.inputValue2 = payload
    }
  },
  actions:{
    updateValue: ({commit}, payload) => {
      commit('updateValue', payload)
    },
    updateValue2: ({commit}, payload) => {
      commit('updateValue2', payload)
    }
  }
}
