<template>
    <div class="block">
        <h4>我是子组件</h4>
        <slot></slot>
        <slot name="zhang"></slot>
    </div>
</template>

<script>
export default {
  name: 'slotModel',
  data () {
    return {
    }
  },
  methods: {
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// .block{
//     border-left: 2px solid #009A61;
//     background: #F6F6F6;
//     color: #555;
//     font-size: 16px;
//     padding: 5px;
//     margin: 3px 0 3px;
// }
</style>