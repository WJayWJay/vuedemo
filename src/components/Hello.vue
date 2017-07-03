<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <h2>Ecosystem</h2>
    <div class="hello-center">
      <div class="hello-content">我是home</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
.hello-center {
  width: 80%;
  height: 300px;
  margin: 0 auto;
  border: 1px solid red;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.hello-center > .hello-content {
  width: 80%;
  height: 80%;
  border: 1px solid pink;
}
</style>
