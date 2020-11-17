<template>
  <header class="header">
    <h1 class="title"
      v-text="title"
    ></h1>
    <ApNav 
      :links="links"
    />
  </header>
</template>

<script>
  import ApNav from '@/components/ApNav'

  export default {
    name: 'ApHeader',
    props: {
      links: {
        type: Array,
        default: () => []
      }
    },
    components: {
      ApNav,
    },
    data() {
      return {
        title: 'Listados de Mascotas'
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import '@/scss/styles';

  .header{
    background-color: $black;
    text-align: center;
    @include size(100%, 20vh);

    .title{
      color: $white;
      font-size: 2.5rem;
      @include flex();
      @include size(100%, 50%);
      @include desktops() {
        font-size: 3rem;
      }
    }
  }
</style>