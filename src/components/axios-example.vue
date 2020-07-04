<template>
    <div class="wrap">
        <h3>Axios</h3>
        <div class="item">
            <mt-button type="primary" @click="cli1">点击</mt-button>
        </div>
        <div>
          
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
        this.$post("loginApi", {
          username: 'admin',
          password: '123456'
        }).then((res) => {
          console.log(res);
          if (res.data.returnCode === 0) {
            Toast('请求成功');
          }
        })
        .catch((e) => {
          this.$throw(e)
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