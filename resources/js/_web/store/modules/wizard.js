import * as types from '../mutation-types'

// state
export const state = {
  step: null,
  surveyID: null,
  fullname: null,
  phone: null,
  gender: null,
  product: null,
  product_status: null,
  feedback: null
}

// getters
export const getters = {
  step: state => state.step,
  surveyID: state => state.surveyID,
  fullname: state => state.fullname,
  phone: state => state.phone,
  gender: state => state.gender,
  product: state => state.product,
  product_status: state => state.product_status,
  feedback: state => state.feedback
}

// mutations
export const mutations = {
  [types.SET_STEP] (state, { step }) {
    state.step = step
  },
  [types.SET_SURVEY] (state, { surveyID }) {
    state.surveyID = surveyID
  },
  [types.SET_FULLNAME] (state, { fullname }) {
    state.fullname = fullname
  },
  [types.SET_PHONE] (state, { phone }) {
    state.phone = phone
  },
  [types.SET_GENDER] (state, { gender }) {
    state.gender = gender
  },
  [types.SET_PRODUCT] (state, { product }) {
    state.product = product
  },
  [types.SET_PRODUCT_STATUS] (state, { product_status }) {
    state.product_status = product_status
  },
  [types.SET_FEEDBACK] (state, { feedback }) {
    state.feedback = feedback
  }
}


// actions
export const actions = {
  saveStep ({ commit, dispatch }, payload) {
    commit(types.SET_STEP, payload)
  },
  saveSurveyID ({ commit, dispatch }, payload) {
    commit(types.SET_SURVEY, payload)
  },
  saveFullname ({ commit, dispatch }, payload) {
    commit(types.SET_FULLNAME, payload)
  },
  savePhone ({ commit, dispatch }, payload) {
    commit(types.SET_PHONE, payload)
  },
  saveGender ({ commit, dispatch }, payload) {
    commit(types.SET_GENDER, payload)
  },
  saveProduct ({ commit, dispatch }, payload) {
    commit(types.SET_PRODUCT, payload)
  },
  saveProductStatus ({ commit, dispatch }, payload) {
    commit(types.SET_PRODUCT_STATUS, payload)
  },
  saveFeedback ({ commit, dispatch }, payload) {
    commit(types.SET_FEEDBACK, payload)
  }
}
