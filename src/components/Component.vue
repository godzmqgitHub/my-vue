<template>
    <div class="wrap">
      <h3>组件</h3>
      <div class="item">
        <h4>组件基础</h4>
        <p>1、通过import导入，component注册（局部）组件</p>
        <p>2、通过‘props’实现父传子，一个组件默认可以拥有任意数量的prop</p>
        <blockquote1 :content="'这是子组件'"></blockquote1>
        <p>3、通过‘v-bing’可以将变量直接传给子组件</p>
        <blockquote1 :content="fuVar3"></blockquote1>
        <p>4、子组件通常通过事件传递数据给父组件,当点击组件时触发changeColor事件，然后通过‘$emit’事件发射‘string’事件，类似于一个中转站，‘this.str’通过这个中转账传递给父组件</p>
        <blockquote1 :content="fuVar4" @string="getStr"></blockquote1>
        <p>5、vue没有直接自组件对自组件传参的方法，建议把要传参的两个组件合并或者先传到父级，然后父级传给另一个子级</p>
        <!-- v-model默认会利用value的prop和input事件 -->
        <p>6、v-model：参考<a href="https://www.jianshu.com/p/4147d3ed2e60" target="_blank">v-model 详解</a></p>
        v-model:<myInput class="inputModel" v-model="myInputValue"></myInput>
        正常组件写法:<myInput class="inputModel" :value="myInputValue" @input="myInputValue = arguments[0]"></myInput>
        父组件变量:{{myInputValue}}
      </div>
      <div class="item">
        <h4>插槽--slot</h4>
        <p>vue中的插槽（slot），指的是组件当中的一块HTML</p>
        <p>个人理解：就是组件中添加一个占位符，然后在使用时直接插入html模板代替这个占位符,且插槽作用域仅在当前所在的作用域内</p>
        <slotModel>
          <div>
            匿名插槽里边的内容（匿名插槽即没有名字的插槽）
          </div>
          <div name="zhang">
            具名插槽（给slot添加name属性）
          </div>
        </slotModel>
      </div>
      
    </div>
</template>

<script>
import Blockquote1 from "@/components/blockquote";
import myInput from "@/components/my-input";
import slotModel from "@/components/slot-model";
export default {
  name: 'Components',
  data () {
    return {
      fuVar3: '我是父级的变量',
      fuVar4: '我是父级的变量',
      myInputValue: '',
      obj: {
        key: 123
      }
    }
  },
  // 注册组件
  components:{
    Blockquote1,
    myInput,
    slotModel
  },
  methods:{
    getStr(string) {
      this.fuVar4 = string;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.wrap{
  width: 700px;
  margin: 0 auto;
  color: black;
  
  .small-title{
    margin-top: 15px;
  }
  .font-color{
    font-size: 16px;
    color: red;
  }
  .item{
    margin-top: 10px;
    margin-left: 10px;
    p{
      margin: 5px;
    }
  }
  .inputModel{
    margin-left: 83px;
  }
}


</style>