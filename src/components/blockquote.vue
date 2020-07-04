<template>
    <div class="block" :class="{'red': colorBool}" @click="changeColor">
         <div>{{content}}</div>
         
    </div>
</template>

<script>
export default {
  // Blockquote为保留的html元素
  name: 'Blockquote1',
  props: ['content'],
  data () {
    return {
        colorBool: false,
        str: '我是从子组件中emit出来的'
    }
  },
  methods: {
      changeColor: function() {
          this.colorBool = !this.colorBool;
          this.obj.key = '456';
          this.$emit('string', this.str);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.block{
    border-left: 2px solid #009A61;
    background: #F6F6F6;
    color: #555;
    font-size: 14px;
    line-height: 25px;
    padding: 5px;
    margin: 5px 0 5px;
}
.red{
    background: red;
}
</style>