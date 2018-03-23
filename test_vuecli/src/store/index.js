import Vue from 'vue'
import Vuex from 'vuex'
// import {state as userState, mutations as userMutations} from '../components/user/store.js'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user
  },
  state: {
    count: 0
    // user: userState
  },
  mutations: {
    increment (state) {
      state.count++
    },
    set_firstName (state, value) {
      state.user = value
      console.log('azeazeazeaze')
    }
  }
})
