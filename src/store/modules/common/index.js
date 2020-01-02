export default {
  state: {
    networkSuccess: true,
    token: ''
  },
  mutations: {
    changeNetworkSuccess (state, val) {
      state.networkSuccess = val
    },
    setToken (state, val) {
      state.token = val
    }
  },
  actions: {

  }
}
