<template>
  <nav class="navigation">
    <ul class="list">
      <li class="item" v-for="link in links" :key="link.title">
        <router-link class="link"
          :to="link.to.url"
          v-text="link.title"
        ></router-link> |
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'ApNav',
    props: {
      links: {
        type: Array,
        default: () => []
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/scss/styles';

  .navigation{    
    @include flex();
    @include size(100%, 50%);

    .list{
      @include flex();
      @include size(100%, 100%);

      .item{
        color: $grey-light;
        margin: .5rem;

        .link{
          color: $grey-dark;
          font-size: 1.5rem;
          padding: .5rem 1rem;
          @include desktops() {
            font-size: 1.4rem;
          }

          &:hover{
            color: $green-dark;
          }
        }
      }
    }
  }
</style>