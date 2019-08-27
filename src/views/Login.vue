<template>
  <div class="box">
    <van-nav-bar
      title="登录"
      left-text="取消"
      left-arrow
      @click-left="onClickLeft"
    />
    <br>

    <van-cell-group>
      <van-field
        v-model="username"
        required
        clearable
        label="用户名"
        placeholder="请输入用户名"
      />
      

      <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
      />
    </van-cell-group>
    <br>


    <br>
    <van-button v-if="username&&password" type="primary" size="large" @click="login()">登录</van-button>
    <van-button v-else type="primary" size="large" color="#ccc" disabled>登录</van-button>
    


  </div>
</template>


<script>
import api from '../api/api_pro'

export default {
  name:'Login',
  data(){
    return{
      username:'',
      password:'',
      tishi:''
    } 
  },
  methods: {
    onClickLeft(){
      this.$router.go(-2);
    },
    login(){
      let params = {
        username:this.username,
        password:this.password
      };
      api.login(params).then((data)=>{
        if(data.code === 1){
          localStorage.setItem("token","大帅比")
          this.$router.push('index')
        }else{
          this.$toast(data.msg);
        }
      })
    }
  },
}
</script>

<style>
  .box{
    display:flex;
    flex-direction: column;
    height:100vh;
  }
</style>