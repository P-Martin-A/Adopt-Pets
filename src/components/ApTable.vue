<template>
  <table class="table">
    <thead class="header">
      <tr class="header-row">
        <td class="header-cell"
          v-for="(propertie, index) of propertiesData" 
          :key="index"
          v-text="propertie"
        ></td>
      </tr>
    </thead>
    <tbody class="body">
      <tr class="body-row"
        v-for="(item, index) in items" :key="index">
        <td class="body-cell">
          <router-link class="link"
            :to="`/pets/${route}/${index}`"
            v-text="item.name"
          ></router-link>
        </td>
        <td class="body-cell"
          v-text="item.breed"
        ></td>
        <td class="body-cell"
          v-text="item.gender"
        ></td>
        <td class="body-cell"
          v-text="item.age"
        ></td>
        <td class="body-cell"
          v-text="item.color"
        ></td>
        <td class="body-cell"
          v-text="item.weight"
        ></td>
        <td class="body-cell"
          v-text="item.location"
        ></td>
        <td class="body-cell"
          v-text="item.notes"
        ></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    name: 'ApTable',
    props: {
      cats: {
        type: Array,
        default: () => []
      },
      dogs: {
        type: Array,
        default: () => []
      },
      pets: {
        type: Array,
        default: () => []
      },
    },
    data() {
      return {
        propertiesData: ['name', 'breed', 'gender', 'age', 'color', 'weight', 'location', 'notes'],
        animals: [],
        path: ''
      }
    },
    computed: { 
      items() {        
        if(this.cats) this.animals.push(...this.cats)     

        if(this.dogs) this.animals.push(...this.dogs)
        
        if(this.pets) this.animals.push(...this.pets)

        return this.animals 
      },
      route() {
        if(this.cats) this.path = this.$route.name

        if(this.dogs) this.path = this.$route.name   
        
        if(this.pets) this.path = this.$route.name
  
        return this.path
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import '@/scss/styles.scss';
  
  .table{
    border-spacing: 0;
    text-align: center;
    @include size(100%, auto);
    @include desktops() {
      @include size(70%, 70%);
    }

    .header{

      .header-row{
        background-color: $green-dark;
        height: 5rem;

        .header-cell{
          text-transform: uppercase;
          color: $white;
          font-size: 1rem;
          padding: .5rem;
          @include desktops() {
            font-size: 1.5rem;
            padding: 0 1rem;
          }
        }
      }
    }
    
    .body{

      .body-row{
        background-color: $grey-light;
        &:nth-child(even){
          background-color: $grey-dark;
        }
        
        .body-cell{
          color: $black;
          font-size: 2.25vw;
          padding: 1rem 0;
          @include desktops() {
            font-size: 1.2rem;
            padding: 0 1rem;
          }

          .link{
            font-size: 2.3vw;
            @include desktops() {
              font-size: 1.4rem;
            }
          }
        }
      }
    }
  }
</style>

