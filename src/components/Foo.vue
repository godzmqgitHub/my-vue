<template>
    <div class="wrap">
      <h3>引入scss(vue-cli)</h3>
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
      <h4>发现</h4>
      <p>在编写代码时发现重新保存后不会刷新页面，但是会改变代码逻辑，具体原因有待调查</p>
      <h4>mint-UI</h4>
      <div>引入<a href="https://www.cnblogs.com/stella1024/p/7771334.html">Mint-UI</a></div>
      <div>{{abc}}</div>
      <div v-for="(item, value) in data1">{{value}}</div>
    </div>
</template>

<script>
export default {
  name: 'Foo',
  data () {
    return {
      abc: 123,
      data1: {
        a: [1],
        b: [2],
        c: [3]
      }
    }
  },
  mounted () {
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