<template>
  <section class="dogs">  
    <h2 class="title"
      v-text="title"
    ></h2>
    <ApTable 
      :dogs="dogs"
    />
  </section>
</template>

<script>
  import ApTable from '@/components/ApTable'
  import { mapState } from 'vuex'

  export default {
    name: 'ApSectionDogs',
    components: {
      ApTable
    },
    data() {
      return {
        title: 'Dogs for Adoption'
      }
    },
    computed: {
      ...mapState([
        'dogs'
      ]) 
    },
  }
</script>

<style lang="scss" scoped>
  @import '@/scss/styles.scss';

  .dogs{
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