// import { _ } from 'core-js'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    count: 0,
    resume: {}
  },
  mutations: {
    increment (state) {
      state.count++
    },
    setResume (state, resume) {
      state.resume = resume
    }
  }
//   actions: {
//     setResume (resume) {
//         this.commit('setResume', resume)
//     }
//   }
})
