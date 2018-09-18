<template>
<!-- 每个模板只支持一个元素 -->
<div class="wrap">
  <ul class="tab_bar">
    <li>
      <router-link to="foo">初建项目</router-link>
    </li>
    <li>
      <router-link to="bar">计算属性2</router-link>
    </li>
  </ul>
  <div class="content">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
export default {
  name: 'HiddenFile',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$background: #eeac6a;
.wrap{
  background-color: $background;
  ul, li{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  ul{
    width: 150px;
  }
  .tab_bar{
    float: left;
    border: 1px solid #ccc;
    margin-left: 10px;
  }
  .content{
    float: left;
    margin-left: 10px;
  }
}
</style>