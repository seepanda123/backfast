<template>
  <div>
    <van-nav-bar title="我的收藏" left-arrow @click-left="onClickLeft" :fixed="true">
      <van-icon name="delete" slot="right" />
    </van-nav-bar>
    <div class="box">
      <van-grid :border="false" :column-num="2" >
        <van-grid-item to="/src/views/Details">
          <van-image :src="pimg" />
          <p>{{title}}</p>
        </van-grid-item>
        <van-grid-item>
          <van-image :src="pimg1" />
          <p>{{title1}}</p>
        </van-grid-item>
      </van-grid>
       <van-grid :border="false" :column-num="2" >
        <van-grid-item  text="文字">
          <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
          <p>测试</p>
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
import app from "../api/api_pro";
let num = Math.floor(Math.random()*41)+9000000;
export default {
  name: "collecting",
  data(){
    return{
      title:'',
      pimg:'',
      title1:'',
      pimg1:''
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  mounted(){
    var params = {uid:num};
    app.product(params).then((data)=>{
      // console.log(data.data.pop())
      var str = data.data.pop();
      this.title = str.pname;
      this.pimg = str.pimg;
    });

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
}
p{
  margin:4px
}
.van-grid-item__content {
  padding:0
}
</style>
