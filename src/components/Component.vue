<template>
    <div class="wrap">
      <h3>组件</h3>
      <div class="item">
        <p>1、通过import倒入，component注册（局部）组件</p>
        <p>2、通过‘props’实现父传子，一个组件默认可以拥有任意数量的prop</p>
        <blockquote1 content="这是子组件"></blockquote1>
        <p>3、通过‘v-bing’可以将变量直接传给子组件</p>
        <blockquote1 :content="fuVar3"></blockquote1>
        <p>4、子组件通常通过事件传递数据给父组件,当点击组件时触发changeColor事件，然后通过‘$emit’事件发射‘string’事件，类似于一个中转站，‘this.str’通过这个中转账传递给父组件</p>
        <blockquote1 :content="fuVar4" @string="getStr"></blockquote1>
      </div>
      
      
    </div>
</template>

<script>
import Blockquote1 from "@/components/blockquote";
export default {
  name: 'Components',
  data () {
    return {
      fuVar3: '我是父级的变量',
      fuVar4: '我是父级的变量'
    }
  },
  // 注册组件
  components:{
    Blockquote1
  },
  methods:{
    getStr: function (string) {
      this.fuVar4 = string;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.wrap{
  width: 700px;
  color: black;
  
  .font-color{
    font-size: 16px;
    color: red;
  }
  .item{
    margin-top: 10px;
    p{
      margin: 5px;
    }
  }
}


</style>