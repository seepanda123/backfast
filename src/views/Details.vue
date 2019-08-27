<template>
  <div class="box">
    <van-nav-bar title="菜谱详情" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
      <van-icon name="star-o" slot="right" />
    </van-nav-bar>

    <div class="item">
      <van-image width="100vw" height="150px" fit="cover" :src="pimg" />

      <br />
      <p class="title">{{ptitle}}</p>

      <p class="detail">{{pdesc}}</p>

      <van-nav-bar left-text="材料" right-text="加入菜篮子" @click-right="addshop" />

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
      pimg: "",
      ptitle: "",
      pdesc: "",
      cailiao1: [],
      cailiao2: [],
      pic:[],
      mintit:[]
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      console.log(22);
      // 调接口 添加到 收藏列表
    },
    addshop() {
      console.log(33);
      // 调接口 添加到 菜篮子
    },
    mat() {
      this.$router.push("MaterialList");
    },
    gocook() {
      this.$router.push("CookStep");
    }
  },
  mounted() {
    let params = { uid: 9000000 };
    api.product(params).then(data => {
      let title = data.data.pop();
      let list = data.data.reverse();
      console.log(list);
      this.pimg = title.pimg;
      this.ptitle = title.pname;
      for (let val of list) {
        if (val.pname) {
          console.log(val.pname.split(" ")[0]);
          this.cailiao1.push(val.pname.split(" ")[0]);
          this.cailiao2.push(val.pname.split(" ")[1]);
        }
        if(val.pimg){
          this.pic.push(val.pimg)
          this.mintit.push(val.pdesc)
        }
      }
    });
    console.log(this.cailiao1, this.cailiao2);
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