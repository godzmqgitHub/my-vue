<template>
    <div class="wrap">
        <h3>Axios</h3>
        <div class="item" @click="cli1">
          123123
            <!-- <mt-button type="primary" @click="cli1">点击</mt-button> -->
        </div>
    </div>
</template>

<script>
import { Toast, Button } from 'mint-ui';
// import { $post } from '@/config/axiosConfig';
// import {axios} from 'axios';
export default {
  name: 'AxiosExample',
  data () {
    return {
        
    }
  },
  methods: {
      cli1: function() {
        Toast('提示信息');
        this.$axios.post("/api/login", {
          username: 'admin',
          password: '123456'
        }).then((res) => {
          console.log(res);
        })
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
}
</style>