<template>
  <section class="cats">  
    <h2 class="title"
      v-text="title"
    ></h2>
    <ApTable 
      :cats="cats"
    />
  </section>
</template>

<script>
  import ApTable from '@/components/ApTable'
  import { mapState } from 'vuex'

  export default {
    name: 'ApSectionCats',
    components: {
      ApTable
    },
    data() {
      return {
        title: 'Cats for Adoption'
      }
    },
    computed: {
      ...mapState([
        'cats'
      ]) 
    },
  }
</script>

<style lang="scss" scoped>
  @import '@/scss/styles.scss';

  .cats{
    @include size(100%, 100%);
    @include desktops() {
      @include flex() {
        flex-direction: column;
      };
    }

    .title{
      text-align: center;
      font-size: 3rem;
      color: $grey-dark;
      @include desktops() {
        font-size: 5rem;
      }
    }
  }
</style>
