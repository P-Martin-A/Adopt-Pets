import Vue from 'vue'
import Vuex from 'vuex'
import cats from '@/data/cats.js'
import dogs from '@/data/dogs.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cats,
    dogs,
    pets: [...cats, ...dogs]
  },
  mutations: {
    appendPet(state, {species, pet}) {
      state[species].push(pet)
    }
  },
  actions: {
    addPet({ commit }, payload) {
      commit('appendPet', payload)
    }
  },
  modules: {
  },
  getters: {
    animalsCount(state) {
      return state.cats.length + state.dogs.length
    },
    getAllCats(state) {
      return state.pets.filter(pet => pet.species === 'cats')
    },
    getAllDogs(state) {
      return state.pets.filter(pet => pet.species === 'dogs')
    }
  }
})
