<template>
  <div>
    <button class="btn"
      @click="$emit('btn-click')"
      v-text="add"
      v-if="!showPetForm"
    ></button>
    <form class="form-pet"
      v-if="showPetForm"
      @submit.prevent="handleSubmit"
    >
      <div class="form-pet-group">
        <label for="name" class="form-pet-title"
          v-text="name"
        ></label>
        <input type="text" name="name" id="name" class="form-pet-input" required
          v-model="formData.name"
          :placeholder="name"
        >
      </div>
      <div class="form-pet-group">
        <label for="species" class="form-pet-title"
          v-text="pets"
        ></label>
        <select name="species" id="species" class="form-pet-select"
          v-model="formData.species"
        >
          <option class="form-pet-option"
            :value="p"
            v-for="(p, index) of pet" :key="index"
            v-text="p"
          ></option>
        </select>
      </div>
      <div class="form-pet-group">
        <label for="age" class="form-pet-title"
          v-text="age"
        ></label>
        <input type="number" name="age" id="age" class="form-pet-input"
          v-model="formData.age"
          :placeholder="age"
        >
      </div>
      <button type="submit" class="form-pet-submit"
        v-text="submit"
      ></button>
    </form>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'ApFormPets',
    props: {
      showPetForm: {
        type: Boolean,
        default: false
      },
      togglePetForm: {
        type: Function,
        default: () => {}
      }
    },
    data() {
      return {
        name: 'Nombre de la Mascota',
        pets: 'Mascota',
        age: 'Edad de la Mascota',
        pet: [
          'cats',
          'dogs'
        ],
        formData: {
          name: '',
          species: null,
          age: 0
        },
        submit: 'Enviar',
        add: 'Agregar nueva Mascota',
      }
    },
    methods: {
      ...mapActions([
        'addPet'
      ]),
      handleSubmit() {
        const { species, age, name } = this.formData
        const PAYLOAD = {
          species,
          pet: {
            name,
            age,            
          }
        }
        this.addPet(PAYLOAD)
        this.formData = {
          name: '',
          age: 0,
          species: null
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/scss/styles.scss';
  
  .btn{
    background-color: $blue-light;
    color: $white;
    border: none;
    border-radius: .5rem;
    font-size: 1.2rem;
    padding: .5rem 1rem;
    cursor: pointer;
    @include desktops() {
      font-size: 1.5rem;
      padding: 1rem 2rem;
    }

    &:hover{
      background-color: $blue-dark;
      box-shadow: 0 0 .5rem $blue-light;
    }
  }

  .form-pet{
    text-align: center;
    @include desktops() {
      @include flex(flex-start, center) {
        flex-direction: column;
      };
    }

    .form-pet-group{      
      margin: 1rem 0;
      @include desktops() {
        width: 60%;
        margin: 1.5rem 0;
      }

      .form-pet-title{
        font-size: 1.6rem;
        @include desktops() {
          font-size: 2rem;
          margin-bottom: 1rem;
        } 
      }

      .form-pet-input, .form-pet-select{
        background-color: $white;
        width: 90%;
        box-shadow: 0 0 .6rem $grey-dark;
        border-radius: .5rem;
        border: none;
        @include desktops() {
          margin-top: 1rem;
          width: 100%;
        } 
      }

      .form-pet-input{
        padding: 1rem;
      }

      .form-pet-select{
        padding: .5rem; 

        .form-pet-option{
          color: $white;
        }
      }
    }

    .form-pet-submit{
      background-color: $blue-light;
      color: $white;
      border: none;
      border-radius: .5rem;
      cursor: pointer;
      padding: .5rem 1rem;
      @include desktops() {
        font-size: 1.5rem;
        padding: 1rem 2rem;
      }

      &:hover{
        background-color: $blue-dark;
        box-shadow: 0 0 .5rem $blue-light;
      }
    }
  }
</style>