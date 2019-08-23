<template>
  <div class="box1">
    <div class="left">
      <div class="x" @click="goback()">X</div>
      <div class="cai">
        <div class="color"  @click="ind(0)">1</div>
        <div @click="ind(1)">2</div>
        <div @click="ind(2)">3</div>
        <div @click="ind(3)">4</div>
        <div @click="ind(4)">5</div>
        <div @click="ind(5)">6</div>
      </div>
      <div class="ic" @click="gomat()">
        <van-icon name="bag-o" />
        <div>材料</div>
      </div>
    </div>
    <div class="right1">
      <div class="top sty"><van-icon name="arrow-up" /></div>
      <ul @scroll="onscroll" id="ul" ref='box'>
        <li>
           <van-image
            width="100%"
            height="150px"
            fit="cover"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
          <p class="mintit1">1就俩二胡阿喝过框架的功课是哦帅得很吧价格为霍芳芳;</p>
        </li>
        <li>
           <van-image
            width="100%"
            height="150px"
            fit="cover"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
          <p class="mintit1">2就俩二胡阿喝过框架的功课是哦帅得很吧价格为霍芳芳;</p>
        </li>
        <li>
           <van-image
            width="100%"
            height="150px"
            fit="cover"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
          <p class="mintit1">3就俩二胡阿喝过框架的功课是哦帅得很吧价格为霍芳芳;</p>
        </li>
        <li>
           <van-image
            width="100%"
            height="150px"
            fit="cover"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
          <p class="mintit1">4就俩二胡阿喝过框架的功课是哦帅得很吧价格为霍芳芳;</p>
        </li>
        <li>
           <van-image
            width="100%"
            height="150px"
            fit="cover"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
          <p class="mintit1">5就俩二胡阿喝过框架的功课是哦帅得很吧价格为霍芳芳;</p>
        </li>
        <li>
           <van-image
            width="100%"
            height="150px"
            fit="cover"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
          <p class="mintit1">6就俩二胡阿喝过框架的功课是哦帅得很吧价格为霍芳芳;</p>
        </li>
      </ul>
      <div class="bottom sty"><van-icon name="arrow-down" /></div>
    </div>
  </div>
</template>


<script>
import $ from 'jquery';

export default {
  name:'MaterialList',
  data() {
    return {
      
    }
  },
  methods: {
    goback(){
      this.$router.go(-1)
    },
    gomat(){
      this.$router.push('MaterialList')
    },
    onscroll(event){
      let scrollTop = event.target.scrollTop;
      let i = Math.floor(scrollTop/540);
      $(".cai div").eq(i).attr('class','color').siblings().removeAttr('class');
    },
    ind(i){
      $("#ul").scrollTop(540*i)
    }
  },
  
}

</script>

<style>
  .left{
    height:100vh;
    width:20vw;
    border-right:1px solid #ccc;
    float: left;
    display: flex;
    flex-direction: column;
  }
  .right1{
    height:100vh;
    width:79vw;
    float: left;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around
  }
  .x{
    font-size:1rem;
    text-align: center;
  }
  .cai{
    text-align: center;
    font-size:20px;
    height:70vh;
    overflow: auto;
    color: #aaa
  }
  .color{
    color: #333;
    font-weight: 600;
  }
  .cai div{
    margin-top:5px
  }
  .right1 li{
    line-height:1rem;
    font-size:14px
  }
  .ic{
    text-align: center;
    font-size: 20px;
  }
  .sty{
    height:50px;
    width:50px;
    background: #ddd;
    border-radius: 50%;
    text-align: center;
    line-height: 50px;
    color: white;
    font-size: 30px;
  }
  .bottom i{
    line-height: 55px;
  }
  #ul{
    width:60vw;
    height:500px;
    overflow: auto;
  }
  .right1 li{
    height:500px;
    width:60vw;
    background: #eee;
    margin-bottom:40px;
  }
  .mintit1{
    font-size:14px;
    color: #333;
    margin:0 10px;
  }
</style>