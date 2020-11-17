<template>
  <section class="home">
    <h2 class="title"
      v-text="title"
    ></h2>
  </section>
</template>

<script>
  export default {
    name: 'ApSectionHome',
    data() {
      return {
        title: 'ERROR 404',      
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import '@/scss/styles.scss';

  .home{
    @include size(100%, 60%);
    @include flex() {
      flex-direction: column;
    };
    @include desktops() {
      @include size(100%, 100%);
    }

    .title{
      color: $red-light;
      font-size: 2rem;
      animation: a 1s infinite ease-in-out;
      @include desktops() {
        font-size: 5rem;
      }

      @keyframes a {
        0%, 100% {
          transform: scale(2);
        }
        25%, 50%, 75% {
          transform: scale(2.5);
        }
      }
    }
  }
</style>