<template>
  <div class="hello">
    <div class="imgWrap">
      <img src="../assets/timg.jpeg">
    </div>
    <h1>{{ msg }}</h1>
    <h2>
      <router-link to="/hiddenfile">
        Essential Links
      </router-link>
    </h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to my Vue.js\'s App',
      app: 'zhang'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hello{
  text-align: center;
  .imgWrap{
    width: 50%;
    height: 149px;
    margin: 60px auto;
    transition: box-shadow 0.3s ease-in-out;
    &:hover{
      margin-top: 59px;
      margin-bottom: 61px;
      box-shadow: darkgrey 5px 5px 30px 5px;
    }
    img{
      width:100%;
      margin: 0;
      padding: 0;
    }
  }
}
</style>
