<template>
    <div class="block">
         <input type="text" >
    </div>
</template>

<script>
export default {
  name: 'my-input',
  props: ['content'],
  data () {
    return {
    //   content: "0231231"
    }
  },
  methods: {
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.block{
    border-left: 2px solid #009A61;
    background: #F6F6F6;
    color: #555;
    font-size: 16px;
    padding: 5px;
    margin: 3px 0 3px;
}
</style>