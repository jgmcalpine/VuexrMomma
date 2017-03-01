<template>
  <div id="app">
    <img src="./assets/logo.png"><h1>euxrMomma</h1>
    <h2>Essential Shit</h2>
    <h6 v-if="show">Go for a walk down Vue lifecycle lane: </h6>
    <ul @click="show = !show">
      <li><a href="#">Vue Instance Lifecycle</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Directives</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Modifiers Chat</a></li>
      <li v-if="show"><a href="https://twitter.com/vuejs" target="_blank">Dev Workflow</a></li>
    </ul>
    <h2>Ecosystem to Learn</h2>
    <ul>
      <li><a href="http://router.vuejs.org/">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      show: false,
      active: false,
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
</style>
