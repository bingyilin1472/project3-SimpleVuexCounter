import namespace from '../type'
const state = {
  counter: 0,
  clicks: 0
}
const getters = {
  accessCounter: state => {
    return state.counter
  },
  accessClicks: state => {
    return 'clicks ' + state.clicks
  },
  doubleCounter: state => {
    return state.counter * 2
  }
}
const mutations = {
  [namespace.COUNTER_M_INCREMENT]: (state, payload) => {
    state.counter += payload
    state.clicks ++
  },
  [namespace.COUNTER_M_DECREMENT]: (state, payload) => {
    state.counter -= payload
    state.clicks ++
  }
}
const actions = {
  [namespace.COUNTER_A_INCREMENT]: ({ commit }, payload) =>{
    setTimeout(()=>{
      commit(namespace.COUNTER_M_INCREMENT, payload)
    }, 2000)
  },
  [namespace.COUNTER_A_DECREMENT]: ({ commit}, payload) =>{
    setTimeout(()=>{
      commit(namespace.COUNTER_M_DECREMENT, payload)
    }, 2000)
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
