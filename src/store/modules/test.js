const state = {
  menulist: []
}

const mutations = {
  saveMenuList (state, params) {
    console.log('mutations')
    state.menulist = params
  }
}

const actions = {
  saveMenuListFN ({ commit }, params) {
    console.log('actions')
    commit('saveMenuList', params)
  }
}

export default {
  // namespaced: true, 
  state,
  mutations,
  actions
}
