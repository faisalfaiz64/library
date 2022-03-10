import axios from 'axios'
import Cookies from 'js-cookie'
import * as types from '../mutation-types'

// state
export const state = {
  user: null,
  token: Cookies.get('token_admin')
}

// getters
export const getters = {
  token: state => state.token,
  user: state => state.user,
  check: state => state.user !== null
}

// mutations
export const mutations = {
  [types.SAVE_TOKEN] (state, { token, remember }) {
    state.token = token
    Cookies.set('token_admin', token, { expires: remember ? 365 : null })
  },

  [types.FETCH_ADMIN_SUCCESS] (state, { user }) {
    state.user = user
  },

  [types.FETCH_ADMIN_FAILURE] (state) {
    state.token = null
    Cookies.remove('token_admin')
  },

  [types.LOGOUT] (state) {
    state.user = null
    state.token = null

    Cookies.remove('token_admin')
  },

  [types.UPDATE_ADMIN] (state, { user }) {
    state.user = user
  }
}

// actions
export const actions = {
  saveToken ({ commit, dispatch }, payload) {
    commit(types.SAVE_TOKEN, payload)
  },


  async fetchAdmin ({ commit }) {
    try {
      const { data } = await axios.get('/apiadmin/v1/user')

      commit(types.FETCH_ADMIN_SUCCESS, { user: data })
    } catch (e) {
      commit(types.FETCH_ADMIN_FAILURE)
    }
  },

  updateAdmin ({ commit }, payload) {
    commit(types.UPDATE_ADMIN, payload)
  },

  async logoutAdmin ({ commit }) {
    try {
      await axios.post('/apiadmin/v1/logout')
    } catch (e) { }

    commit(types.LOGOUT)
  },

  async fetchOauthUrl (ctx, { provider }) {
    const { data } = await axios.post(`/api/oauth/${provider}`)

    return data.url
  }
}
