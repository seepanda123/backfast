<template>
  <div class="box">
    <van-nav-bar title="菜谱详情" left-arrow @click-left="onClickLeft">

        <van-icon name="star-o" slot="right" v-if="icon" @click="shoucang"/>
        <van-icon name="star" slot="right" color="orange" v-else />


    </van-nav-bar>

    <div class="item">
      <van-image width="100vw" height="150px" fit="cover" :src="pimg" />

      <br />
      <p class="title">{{ptitle}}</p>

      <p class="detail">{{pdesc}}</p>

      <div v-if="token">
        <van-nav-bar left-text="材料" right-text="加入菜篮子" @click-right="addshop" v-if="show"/>
        <van-nav-bar left-text="材料" right-text="移除菜篮子" @click-right="delshop" v-if="shows"/>
      </div>
      <div v-else>
        <van-nav-bar left-text="材料" right-text="加入菜篮子" @click-right="tishi"/>

      </div>




      <div @click="mat()">
        <van-cell
          v-for="(val,i) in cailiao1"
          :title="val"
          :value="cailiao2[i]"
          value-class="con"
          v-bind:key="i"
        />
      </div>

      <p class="title">
        ——
        <span>烹饪步骤</span> ——
      </p>

      <div class="mintit" @click="gocook">
        点击步骤进入烹饪模式
        <dl v-for="(val,i) in pic" v-bind:key="i">
          <dt>{{i+1}}</dt>
          <dd>
            <van-image
              width="85vw"
              height="150px"
              fit="cover"
              :src="val"
            />
            <p class="mintit1">{{mintit[i]}}</p>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>


<script>
import api from "../api/api_pro";
export default {
  name: "Details",
  data() {
    return {
      token:'',
      pimg: "",
      ptitle: "",
      pdesc: "",
      cailiao1: [],
      cailiao2: [],
      pic:[],
      mintit:[],
      uid:'',
      show:true,
      shows:false,
      icon:true
    };
  },
  methods: {
    tishi(){
      this.$toast("请先登录")
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    // 调接口 添加到 菜篮子
    addshop() {
      let shop = []
      if(localStorage.getItem('shop')){
        shop = Array(localStorage.getItem('shop'))
      }
      shop.push(this.uid)
      localStorage.setItem("shop",shop)
      this.show=false;
      this.shows=true
    },
    delshop(){
      let shop = []
      if(localStorage.getItem('shop')){
        shop = localStorage.getItem('shop').split(",")
        shop.pop()
        localStorage.setItem("shop",shop)
        this.shows=false;
        this.show=true
      }
    },
    shoucang(){
      this.icon = false;
      let shop = []
      if(localStorage.getItem('cang')){
        shop = Array(localStorage.getItem('shop'))
      }
      shop.push(this.uid)
      localStorage.setItem("cang",shop)
      this.$toast("收藏成功")
    },
    mat() {
      this.$router.push("MaterialList");
    },
    gocook() {
      this.$router.push("CookStep");
    }
  },
  mounted() {
    this.token = localStorage.getItem("token")
    this.uid = localStorage.getItem("uid")
    let params = { uid: this.uid };
    api.product(params).then(data => {
      let title = data.data.pop();
      let list = data.data.reverse();
      this.pimg = title.pimg;
      this.ptitle = title.pname;
      for (let val of list) {
        if (val.pname) {
          this.cailiao1.push(val.pname.split(" ")[0]);
          this.cailiao2.push(val.pname.split(" ")[1]);
        }
        if(val.pimg){
          this.pic.push(val.pimg)
          this.mintit.push(val.pdesc)
        }
      }
    });
  }
};
</script>

<style>
.item {
  overflow: auto;
}

.box {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.title {
  text-align: center;
  font-size: 16px;
}
.detail {
  padding: 0 1rem;
}
.detail {
  line-height: 1rem;
  font-size: 12px;
}
.con {
  margin-right: 1rem;
}
.mintit {
  font-size: 12px;
  color: #333;
  text-align: center;
}
.mintit1 {
  text-align: left;
  font-size: 12px;
  color: #333;
}
dl {
  display: flex;
}
dt {
  font-size: 20px;
  text-align: center;
  width: 7vw;
}
dd {
  margin-left: 10px;
  width: 93vw;
  text-align: left;
}
.van-nav-bar__left .van-nav-bar__text {
  font-size: 25px;
  color: black;
}
.van-nav-bar__right .van-nav-bar__text {
  color: orange;
}
</style>
