<template>
  <div>
    <van-nav-bar title="厨房故事" left-arrow @click-left="onClickLeft" :fixed="true" />
    <div class="maincon1" @click="goDetails(num)">
      <p>{{title}}</p>
      <img :src="pimg"/>

    </div>

    <div class="maincon" @click="goDetails(num1)">
      <p>{{title1}}</p>
      <img :src="pimg1"/>

    </div>

    <div class="maincon" @click="goDetails(num2)">
      <p>{{title2}}</p>
      <img :src="pimg2"/>

    </div>

    <div class="maincon" @click="goDetails(num3)">
      <p>{{title3}}</p>
      <img :src="pimg3"/>

    </div>

    <div class="maincon" @click="goDetails(num4)">
      <p>{{title4}}</p>
      <img :src="pimg4"/>

    </div>

    <div class="maincon" @click="goDetails(num5)">
      <p>{{title5}}</p>
      <img :src="pimg5"/>

    </div>
  </div>
</template>

<script>
import app from "../api/api_pro";

export default {
  name: "kitchenstory",
  data(){
    return{
      num:'',
      num1:'',
      num2:'',
      num3:'',
      num4:'',
      num5:'',
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
    goDetails(uid){
      console.log(uid)
      localStorage.setItem("uid",uid)
      this.$router.push('details')
    }

  },
  mounted(){
    this.num = Math.floor(Math.random()*41)+9000000;
    this.num1 = Math.floor(Math.random()*41)+9000000;
    this.num2 = Math.floor(Math.random()*41)+9000000;
    this.num3 = Math.floor(Math.random()*41)+9000000;
    this.num4 = Math.floor(Math.random()*41)+9000000;
    this.num5 = Math.floor(Math.random()*41)+9000000;
    var params = {uid:this.num};
    app.product(params).then((data)=>{
      var str = data.data.pop();
      this.title = str.pdesc;
      this.pimg = str.pimg;
    });
    var params1 = {uid:this.num1};
    app.product(params1).then((data)=>{
      var str = data.data.pop();
      this.title1 = str.pdesc;
      this.pimg1 = str.pimg;
    });
    var params2 = {uid:this.num2};
    app.product(params2).then((data)=>{
      var str = data.data.pop();
      this.title2 = str.pdesc;
      this.pimg2 = str.pimg;
    });
    var params3 = {uid:this.num3};
    app.product(params3).then((data)=>{
      var str = data.data.pop();
      this.title3 = str.pdesc;
      this.pimg3 = str.pimg;
    });
    var params4 = {uid:this.num4};
    app.product(params4).then((data)=>{
      var str = data.data.pop();
      this.title4 = str.pdesc;
      this.pimg4 = str.pimg;
    });
    var params5 = {uid:this.num5};
    app.product(params5).then((data)=>{
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
