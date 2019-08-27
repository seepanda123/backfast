<template>
  <div>
    <router-link to="/src/views/Details.vue"></router-link>
    <van-nav-bar title="厨房故事" left-arrow @click-left="onClickLeft" :fixed="true" />
    <div class="maincon1">
      <p>{{title}}</p>
      <img :src="pimg"/>

    </div>

    <router-link to="/src/views/Details.vue"></router-link>
    <van-nav-bar title="厨房故事" left-arrow @click-left="onClickLeft" :fixed="true" />
    <div class="maincon">
      <p>{{title1}}</p>
      <img :src="pimg1"/>

    </div>

    <router-link to="/src/views/Details.vue"></router-link>
    <van-nav-bar title="厨房故事" left-arrow @click-left="onClickLeft" :fixed="true" />
    <div class="maincon">
      <p>{{title2}}</p>
      <img :src="pimg2"/>

    </div>

    <router-link to="/src/views/Details.vue"></router-link>
    <van-nav-bar title="厨房故事" left-arrow @click-left="onClickLeft" :fixed="true" />
    <div class="maincon">
      <p>{{title3}}</p>
      <img :src="pimg3"/>

    </div>

    <router-link to="/src/views/Details.vue"></router-link>
    <van-nav-bar title="厨房故事" left-arrow @click-left="onClickLeft" :fixed="true" />
    <div class="maincon">
      <p>{{title4}}</p>
      <img :src="pimg4"/>

    </div>

    <router-link to="/src/views/Details.vue"></router-link>
    <van-nav-bar title="厨房故事" left-arrow @click-left="onClickLeft" :fixed="true" />
    <div class="maincon">
      <p>{{title5}}</p>
      <img :src="pimg5"/>

    </div>
  </div>
</template>

<script>
import app from "../api/api_pro";
let num = Math.floor(Math.random()*41)+9000000;
let num1 = Math.floor(Math.random()*41)+9000000;
let num2 = Math.floor(Math.random()*41)+9000000;
let num3 = Math.floor(Math.random()*41)+9000000;
let num4 = Math.floor(Math.random()*41)+9000000;
let num5 = Math.floor(Math.random()*41)+9000000;
export default {
  name: "kitchenstory",
  data(){
    return{
      title:'',
      pimg:'',
      title1:'',
      pimg1:'',
      title2:'',
      pimg2:'',
      title3:'',
      pimg3:'',
      title4:'',
      pimg4:'',
      title5:'',
      pimg5:'',
    }

  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },

  },
  mounted(){
    var params = {uid:num};
    app.getProduct(params).then((data)=>{
      //console.log(data.data.pop())
      var str = data.data.pop();
      this.title = str.pdesc;
      this.pimg = str.pimg;
    });
    var params1 = {uid:num1};
    app.getProduct(params1).then((data)=>{
      //console.log(data.data.pop())
      var str = data.data.pop();
      this.title1 = str.pdesc;
      this.pimg1 = str.pimg;
    });
    var params2 = {uid:num2};
    app.getProduct(params2).then((data)=>{
      //console.log(data.data.pop())
      var str = data.data.pop();
      this.title2 = str.pdesc;
      this.pimg2 = str.pimg;
    });
    var params3 = {uid:num3};
    app.getProduct(params3).then((data)=>{
      //console.log(data.data.pop())
      var str = data.data.pop();
      this.title3 = str.pdesc;
      this.pimg3 = str.pimg;
    });
    var params4 = {uid:num4};
    app.getProduct(params4).then((data)=>{
      //console.log(data.data.pop())
      var str = data.data.pop();
      this.title4 = str.pdesc;
      this.pimg4 = str.pimg;
    });
    var params5 = {uid:num5};
    app.getProduct(params5).then((data)=>{
      //console.log(data.data.pop())
      var str = data.data.pop();
      this.title5 = str.pdesc;
      this.pimg5 = str.pimg;
    });
  }


};
</script>

<style scoped>
.maincon1 {
  margin-top: 50px;
  width: 92vw;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

}
.maincon p,.maincon1 p {
  width: 92vw;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 4vw;
}

.maincon img,.maincon1 img {
  border: 0;
  width: 92vw;
  height: 180px;
  margin-left: 4vw;
}
</style>
