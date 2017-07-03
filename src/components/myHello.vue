<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <h2>Ecosystem</h2>
    <div class="my-center">
      <div class="my-content">
        <router-link to="/">go to home</router-link>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'myHello',
  data () {
    return {
      msg: 'myself vuejs'
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
