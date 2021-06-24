import { loginAPI, getInfoAPI } from '@/api/user'
import { resetRouter } from '@/router'
import { setToken, getToken, removeToken } from '@/utils/auth'

const getDefaultState = () => {
  return {
    token: "",
    userInfo: null,
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_USER: (state, user) => {
    state.userInfo = user
  },
}

const actions = {
  // user login
  login({ commit }, code) {
    return new Promise((resolve, reject) => {
      login({code: code}).then(response => {
        commit('SET_TOKEN', response.access_token)
        setToken(response.access_token)

        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo().then(response => {
        if (!response.id) {
          reject('Verification failed, please Login again.')
        }

        commit('SET_USER', response)

        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      removeToken() // must remove  token  first
      resetRouter()
      commit('RESET_STATE')
      resolve()
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

