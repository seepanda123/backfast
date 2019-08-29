<template>
  <div>
    <van-nav-bar title="我的收藏" left-arrow @click-left="onClickLeft" :fixed="true"  @click-right="onClickRight">
      <van-icon name="delete" slot="right"/>
    </van-nav-bar>
    <div class="box">
      <van-grid :border="false" :column-num="2" >
        <van-grid-item @click="toDetail(item.uid)" :to="{name:'Details',params:{uid:item.uid}}" v-for="(item,i) in arr" v-bind:key="i">
          <van-image :src="item.pimg" />
          <em v-if="show"><van-icon name="cross" size="30" @click="del(i)" @click.stop/></em>
          <p>{{item.pname}}</p>
        </van-grid-item>


      </van-grid>
      <p>快去收藏更多~</p>
      <h5>获取更多美食菜谱，视频教程</h5>
      <van-button color="orange" size="normal">立即下载网上厨房APP</van-button>
      <p>升级登陆后收藏菜谱自动同步，不会丢失。</p>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import app from "../api/api_pro";
let num = Math.floor(Math.random()*41)+9000000;
export default {
  name: "collecting",
  data(){
    return{
     arr:[],
     show:false,
     num:[]
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight(){
      this.show = !this.show;
    },
    toDetail(uid){
      // this.$router.push(/details')
      localStorage.setItem("uid",uid)
    },
    del(i){
      this.arr.splice(i,1)
      this.num.splice(i,1)
      localStorage.setItem("cang",this.num)
    }
  },
  mounted(){
    if(localStorage.getItem("cang")){
      this.num = localStorage.getItem("cang").split(",");
      console.log(num)
    }
    this.num.map((data)=>{
      console.log(data)
      var params = {uid:data};
      app.product(params).then((data)=>{
      var str = data.data.pop();
      this.arr.push(str)
    });
    })



  }
}
</script>

<style scoped>
.box {
  text-align: center;
  margin-top: 50px;
  display: flex;
  height: 100vh;
  width: 92vw;
  margin-left: 4vw;
  flex-direction: column;
}
.van-image {
  width: 41vw;
  height: 41vw;
  /* border:blue solid 1px; */
  position: relative;
}
 em{
  width:30px;
  height:30px;
  background:#fff;
  opacity: 0.5;
  position: absolute;
  top:15px;
  right:10px;
  text-align: center
}
p{
  margin:4px
}
.van-grid-item__content {
  padding:0
}
</style>
