<template>
  <div id="app">
    <ApHeader 
      :links="links"
    />
    <ApMain />
  </div>
</template>

<script>
  import ApHeader from '@/layouts/ApHeader';
  import ApMain from '@/layouts/ApMain';

  export default {
    name: 'App',
    components: {
      ApHeader,
      ApMain
    },
    data() {
      return {
        links: [
          {
            title: 'Home',
            to: {
              url: '/',
            }
          },
          {
            title: 'Cats',
            to: {
              url: '/cats',
            }
          },
          {
            title: 'Dogs',
            to: {
              url: '/dogs',
            }
          },   
        ]
      }
    },
  }
</script>

<style lang="scss">
  @import '@/scss/styles.scss';

  *, *::before, *::after{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html{
    font-size: 10px;

    body{
      background-color: $white;
      font-family: $font;
      overflow-x: hidden;

      h1{
        font-weight: $font-weight-700;
      }

      h2{
        font-weight: $font-weight-600;
      }

      h3, h4{
        font-weight: $font-weight-500;
      }

      ul li{
        list-style: none;
      }

      p{
        font-weight: $font-weight-400;
      }

      a{
        font-weight: $font-weight-200;
        text-decoration: none;
      }

      td{
        font-weight: $font-weight-300;
      }

      span{
        font-weight: $font-weight-100;
      }
    }
  }
</style>
