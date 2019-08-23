<template>
  <div class="box1">
    <div class="left">
      <div class="x" @click="goback()">X</div>
      <div class="cai">
        <br>
        <div>材</div>
        <div>料</div>
      </div>
    </div>
    <div class="right">
      <ul>
        <li>鸡蛋<span>10-15个</span></li>
        <li>红茶<span>1包</span></li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  name:'MaterialList',
  methods: {
    goback(){
      this.$router.go(-1)
    }
  },
}
</script>

<style>
  .left{
    height:100vh;
    width:20vw;
    border-right:1vw solid #eee;
    float: left;
  }
  .right{
    height:100vh;
    width:70vw;
    float: left;
  }
  .x{
    font-size:1rem;
    text-align: center;
  }
  .cai{
    text-align: center;
    font-size:20px;
  }
  .right ul{
    margin-top:1rem;
    padding-left:1rem;
  }
  .right li{
    line-height:1rem;
    font-size:14px
  }
  .right span{
    color:orangered;
    margin-left:.5rem
  }
</style>