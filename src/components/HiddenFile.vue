<template>
<!-- 每个模板只支持一个元素 -->
<div class="wrap">
  <ul class="tab_bar">
    <li v-for="item in routList" :class="{'nav-color': routPath===item.path}">
      <router-link :to="'/hiddenfile/' + item.path">{{item.name}}</router-link>
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
      routList: [{
        name: '初建项目',
        path: 'foo'
      },{
        name: '计算属性',
        path: 'computed'
      },{
        name: '组件间传值',
        path: 'components'
      },{
        name: 'axios调用',
        path: 'axiosExample'
      }]
    }
  },
  computed:{
    routPath: function() {
      return this.$route.path.split('/').pop()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$background: #fff;
.wrap{
  width: 100%;
  min-width: 900px;
  height: 800px;
  background-color: $background;
  
  ul, li{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  ul{
    width: 150px;
    li{
      text-align: center;
      a{
        &:link{
          text-decoration: none;
          color: #000;
        }
        
        &:visited{
          color: #000;
          text-decoration: none;
        }
        &:hover{
          color: #48b884;
          text-decoration: underline;
        }
      }
    }
  }
  .tab_bar{
    float: left;
    // border: 1px solid #ccc;
    margin-left: 10px;
    margin-top: 30px;
    .nav-color{
      a{
        color: #48b884;
      }
    }
  }
  .content{
    width: 80%;
    float: left;
    margin: 15px 20px;
    background-color: #fff;
  }
}
</style>