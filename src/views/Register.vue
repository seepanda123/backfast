<template>
  <div class="box">
    <van-nav-bar
      title="注册"
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

    <van-button v-if="username&&password" type="primary" size="large">立即注册</van-button>
    <van-button v-else type="primary" size="large" color="#ccc" disabled>立即注册</van-button>

    <br>
    <van-button to="Login" type="primary" size="large" color="#ffee33">已有账号，直接登录</van-button>
  </div>
</template>


<script>
export default {
  name:'Register',
  data(){
    return{
      username:'',
      password:''
    } 
  },
  methods: {
    onClickLeft(){
      this.$router.go(-1);
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