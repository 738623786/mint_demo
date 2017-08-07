<template>
  <div class="hello">
    <ul>
      <li class="nav" v-for="item in Navs">
        <div class="title">{{item.title}} </div>
        <ul>
          <li  class="select_item" v-for="item1 in item.list">
            <router-link :to="item1.path"> {{item1.name}}</router-link>

          </li>
        </ul>
      </li>

    </ul>
  </div>
</template>

<script>
  import { Navs } from './router/routes'
  import routes  from './router/routes'
  console.log(Navs);
  export default {
    name: 'hello',
    data () {
      return {
        Navs,
        routes
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }


  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: inline-block;
    margin: 0;
  }

  a {
    color: #42b983;
  }

  .nav{
    display: block;
    line-height: 40px;
  }
  .nav .title{
    background: #aaa;
  }
  .nav .select_item{
    text-align: left;
    display: inline-block;
    margin: 20px;
    line-height: 50px;
  }
</style>
