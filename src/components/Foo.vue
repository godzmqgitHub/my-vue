<template>
    <div class="wrap">
      <h4>引入scss</h4>
      <p class="item">
        1、安装node-sass、sass-loader<br>
        <img src="../assets/install-scss.png">
      </p>
      <p>
        2、不需要配置任何东西，直接在style标签添加  lang="scss"  就可以使用
      </p>
    </div>
</template>

<script>
export default {
  name: 'Foo',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.wrap{
  width: 700px;
  color: black;
  .item{
    img{
      width: 300px;
    }
  }
}


</style>