<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="my-center">
      <div class="my-content">
        <router-link to="/">go to home</router-link>
        <span>我是默认的</span>
      </div>
    </div>
    <div class="my-center">
      <div class="my-content">
        <button @click="add"> 增加</button>
        <button @click="decrement"> 减少</button>
      </div>
    </div>

    
  </div>
</template>

<script>
export default {
  name: 'defaultOne',
  data () {
    return {
      msg: 'hello/default vuejs'
    }
  },
  methods: {
  	add () {
	  	this.$store.commit('increment')
	  },
	  decrement () {
	  	this.$store.commit('decrement')
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
  height: 100px;
  border: 1px solid yellow;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
