import Vue from 'vue'
import Vuex from 'vuex'
// import axios from "axios"
Vue.use(Vuex)
const api = 'https://admin.phoenixglobaltradings.com/api/partners'

export default new Vuex.Store({
  state: {
  partners:null
  },
  getters: {
    // partners_list: (state)=>state.partners,
    // just:async state => await state.partners
  },
  mutations: {
// setPartnersList(state,data) {
//   state.partners = data
//   console.log(partners)
//
// }
  },
  actions: {
// async getPartners({ commit }) {
//   const data = await axios.get(api)
// }

  },
  modules: {
  }
})
