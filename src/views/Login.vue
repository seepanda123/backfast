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
    <van-button type="primary" size="large" color="#ffee00">登录</van-button>


  </div>
</template>


<script>
export default {
  name:'Login',
  data(){
    return{
      username:'',
      password:''
    } 
  },
  methods: {
    onClickLeft(){
      this.$router.go(-2);
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