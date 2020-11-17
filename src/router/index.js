import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Pets from '@/views/Pets.vue'
import Cats from '@/views/Cats.vue'
import Dogs from '@/views/Dogs.vue'
import Error from '@/views/Error.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cats',
      name: 'cats',
      component: Cats
    },
    {
      path: '/dogs',
      name: 'dogs',
      component: Dogs
    },
    {
      path: '/pets/:species/:id',
      name: 'pets',
      component: Pets
    },
    {
      path: '*',
      name: 'error',
      component: Error
    },
  ]
})

