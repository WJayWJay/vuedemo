<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <h2>Ecosystem</h2>
    <div class="my-center">
      <div class="my-content">
        <router-link to="/hello">go to hello</router-link>
        <router-link to="/hello/one">go to One</router-link>
      </div>
    </div>
    <div>{{count}}</div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'myHello',
  data () {
    return {
      msg: 'myself vuejs'
    }
  },
  computed: {
    count () {
      return this.$store.state.count
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
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.my-center {
  width: 80%;
  height: 200px;
  border: 1px solid yellow;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
