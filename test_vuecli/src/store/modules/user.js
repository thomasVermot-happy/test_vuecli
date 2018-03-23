const state = {
  firstName: 'Robocop',
  lastName: 'Vermot-Gauchy'
}

const getters = {
}

const actions = {
}

const mutations = {
  setFirstName ({ state, commit }, first) {
    this.state.user.firstName = first
  },
  setLastName ({state, commit}, last) {
    this.state.user.lastName = last
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
