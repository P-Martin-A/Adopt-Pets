<template>
  <main class="main">
    <router-view />
  </main>
</template>

<script>
  export default {
    name: 'ApMain'
  }
</script>

<style lang="scss" scoped>
  @import '@/scss/styles.scss';

  .main{
    @include size(100%, 80vh);
  }
</style>