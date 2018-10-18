<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%; */
  /* margin-top: 60px; */
  
}
html, body, #app{
  height: 100%;
}
h1,h2,h3,h4,h5,h6{
  margin: 0;
  padding: 0;
}
ul,li{
  margin: 0;
  padding: 0;
}
li{
  list-style-type: none;
}
</style>
