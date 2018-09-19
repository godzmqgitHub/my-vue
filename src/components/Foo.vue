<template>
    <div class="wrap">
      <h3>引入scss</h3>
      <p>
        不需要配置任何东西，直接在style标签添加  lang="scss"  就可以使用；
      </p>
      <h4>路由配置</h4>
      <p>
        子路由path的值不要加‘/’，否则会跳转到根路由；
      </p>
      <h4>data</h4>
      <p>
        在data内没有数据时，也加上return；
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