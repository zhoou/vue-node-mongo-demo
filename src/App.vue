<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <button @click="btnClick" class="btn btn-info">服务连接测试</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'app',
  methods: {
    btnClick () {
      axios.get('/api/test').then((data) => {
        alert(JSON.stringify(data.data))
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
