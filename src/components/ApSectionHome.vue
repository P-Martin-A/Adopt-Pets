<template>
  <section class="home">
    <h2 class="title"
      v-text="title"
    ></h2>
    <div class="length"
      v-if="!showPetForm"
    >
      <h3 class="pets">Cantidad de Mascotas: {{ animalsCount }}</h3>
      <h4 class="cats">Cantidad de Gatos: {{ getAllCats.length }}</h4>
      <h4 class="dogs">Cantidad de Perros: {{ getAllDogs.length }}</h4>
    </div>
    <ApFormPets 
      @btn-click="togglePetForm"
      :showPetForm="showPetForm"
    />
  </section>
</template>

<script>
  import ApFormPets from '@/components/ApFormPets'
  import { mapGetters } from 'vuex'

  export default {
    name: 'ApSectionHome',
    components: {
      ApFormPets
    },
    data() {
      return {
        title: 'Está es la vista de Inicio',
        showPetForm: false
      }
    },
    computed: {
      ...mapGetters([
        'animalsCount',
        'getAllCats',
        'getAllDogs'
      ])
    },
    methods: {
      togglePetForm() {
        this.showPetForm = !this.showPetForm
      },
    },
  }
</script>

<style lang="scss" scoped>
  @import '@/scss/styles.scss';

  .home{
    overflow-y: hidden;
    @include size(100%, 80%);
    @include flex() {
      flex-direction: column;
    };
    @include desktops() {
      @include size(100%, 100%);
    }

    .title{
      color: $green-dark;
      font-size: 2rem;
      @include desktops() {
        font-size: 3rem;
      }
    }

    .length{
      margin: 1rem 0;
      text-align: center;
      @include desktops() {
        margin: 2rem 0;
      }

      .pets{
        font-size: 1.4rem;
        @include desktops() {
          font-size: 2.2rem;
        }
      }

      .cats{
        font-size: 1.2rem;
        @include desktops() {
          font-size: 1.5rem;
        }
      }

      .dogs{
        font-size: 1.2rem;
        @include desktops() {
          font-size: 1.5rem;
        }      
      }
    }
  }
</style>