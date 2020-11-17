<template>
  <section class="pets">  
    <h2 class="title">{{ animal.name }}</h2>
    <div class="property">
      <h3 class="species">{{ animal.species }}</h3> |
      <h4 class="gender">{{ animal.gender }}</h4> |
      <h4 class="breed">{{ animal.breed }}</h4> |
      <h4 class="location">{{ animal.location }}</h4>
    </div>
  </section>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'ApSectionCats',
    components: {
    },
    data() {
      return {
        animal: {}
      }
    },
    computed: {
      ...mapState([
        'cats',
        'dogs'
      ])
    },
    mounted() {
      const ANIMAL = this[this.$route.params.species][this.$route.params.id]
      this.animal = ANIMAL
    },
  }
</script>


<style lang="scss" scoped>
  @import '@/scss/styles.scss';

  .pets{
    @include size(100%, 80%);
    @include flex() {
      flex-direction: column;
    };
    @include desktops() {
      @include size(100%, 100%);
    }

    .title{
      text-align: center;
      font-size: 4rem;
      color: $grey-dark;
      @include desktops() {
        font-size: 8rem;
      }
    }

    .property{
      @include flex();

      .species, .gender, .breed, .location{
        font-size: 2rem;
        margin: 0 1rem;
        @include desktops() {
          font-size: 3rem;
        }
      }
    }
  }
</style>