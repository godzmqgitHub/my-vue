<template>
  <div class="login">
      <!-- 登陆表单 -->
      <ul class="login_form">
        <h4>登陆</h4>
        <li><label>帐号：</label><input type="text" placeholder="请输入用户名" v-model="username" index="1"></li>
        <li><label>密码：</label><input type="password" placeholder="请输入密码" v-model="password" index="2"></li>
        <li class="btn"><button @click="validclick()">登陆</button></li>
      </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { Toast } from 'mint-ui';
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  created(){
      var _self = this;
      document.onkeydown = function(e){
          var key = window.event.keyCode;
          if(key == 13){
            _self.validclick();
          }
      }
  },
  methods: {
    ...mapActions([
      'handleLogin'
    ]),

    validclick() {
      console.log(123);
      if (!this.username.length) {
        Toast('请输入账户名');
        return;
      }
      if (!this.password.length) {
        Toast('请输入密码');
        return;
      }
      this.submit();
    },
    submit() {
      let data = {
        username: this.username,
        password: this.password
      }
      this.handleLogin(data).then((res) => {
        Toast(res.data.returnMassage);
        if (res.data.returnCode === 0) {
          this.$router.push({path: '/HelloWorld'});
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login{
  width: 100%;
  height: 100%;
  .login_form{
    width: 300px;
    height: 200px;
    border: 1px solid #ccc;
    // overflow: auto;
    margin:  auto;
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
    h4{
      text-align: center;
      line-height: 30px;
    }
    li{
      margin: 0 20px;
      line-height: 50px;
      input{
        width: 190px;
        height: 30px;
        border-radius: 5px;
        border: 1px solid #ccc;
        text-indent: 5px;
      }
      label{
        padding: 0 5px;
      }
      button{
        width: 170px;
        height: 30px;
        background-color: #5d99db;
        color: white;
        font-weight: 600;
        border: none;
        outline: none;
        position: relative;
        overflow: hidden;
        &:after{
          content: "";
          display: block;
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
          //设置径向渐变
          background-image: radial-gradient(circle, #666 10%, transparent 10.01%);
          background-repeat: no-repeat;
          background-position: 50%;
          transform: scale(10, 10);
          opacity: 0;
          transition: transform .3s, opacity .5s;
        }
        &:active:after {
            transform: scale(0, 0);
            opacity: .3;
            //设置初始状态
            transition: 0s;
        }
      }
    }
    .btn{
      text-align: center;
    }
  }
}
</style>
