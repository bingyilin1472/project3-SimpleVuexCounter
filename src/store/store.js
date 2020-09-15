import Vue from 'vue'
import  Vuex from 'vuex'
import counter from './modules/counter'
import value from './modules/value'
import getters from './getters'
import actions from "./actions";
import mutations from "./mutations";

Vue.use(Vuex)
export const store = new Vuex.Store({
  state:{
    inputValue: 0,
  },
  actions,
  mutations,
  getters,
  modules: {
    counter,
    value
  }
})

