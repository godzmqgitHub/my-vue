<template>
    <div class="wrap">
      <h3>computed</h3>
      <div class="font-color item">对于任何复杂逻辑，都应该使用计算属性</div>

      <div class="item">
        <p>
          1、当原属性改变时，计算属性也回跟着改变
        </p>
        <p>
          2、当用method时，可以达到同样的效果，两种方式最终的结果是完全相同的，不同的是计算属性基于他们的依赖进行缓存，只在相关依赖发生改变时执行。
        </p>
        <p>
          Original message: "{{ message }}"
          <button @click="change">change</button><br>
          Computed reversed message: "{{ reversedMessage }}"
        </p>
      </div>
      <div @click="changeName">{{fullname}}</div>
    </div>
</template>

<script>
let str = 'aaa';
export default {
  name: 'Computed',
  data () {
    return {
      message: '改变前的值',
      str: str,
      firstname: 'zhang',
      lastname: 'xiaoqiang'
    }
  },
  methods: {
    change: function () {
      this.message = 'changed';
    },
    // reversedMessage: function () {
    //   return this.$data.message.split('').reverse().join('');
    // }
    changeName: function () {
      this.lastname = 'mingqiang';
    }
  },
  computed: {
    // 这里使用箭头函数会报错,不知道什么原因
    reversedMessage: function () {
      return this.$data.message.split('').reverse().join('');
    },
    fullname:{
      get: function () {
        return this.firstname + this.lastname;
      },
      set: function () {
        return this.firstname + this.lastname;
      }
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