<template>
  <div class="box1">
    <div class="left">
      <div class="x" @click="goback()">X</div>
      <div class="cai">
        <p>材</p>
        <p>料</p>
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
    font-size:3rem;
    text-align: center;
  }
  .cai{
    text-align: center;
    font-size:1.5rem;
  }
  .right ul{
    margin-top:3rem;
    padding-left:1rem;
  }
  .right li{
    line-height:2.5rem;
  }
  .right span{
    color:orangered;
    margin-left:.5rem
  }
</style>