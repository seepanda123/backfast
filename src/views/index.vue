<template>
  <div class="box">
    <van-nav-bar title="早餐菜谱" />

    <div class="top">
      <div class="imgindex">
        <img :src="pimg" @click="week()" />
        <img :src="pimg1" @click="fresh()" />
      </div>

      <van-search placeholder="搜索 菜谱/食材" v-model="value" input-align="center" @click="search()" />

      <div class="indexul">
        <div>
          <ul class="indexul1">
            <li @click="classlist()">早餐</li>
            <li @click="classlist()">甜点</li>
            <li @click="classlist()">午餐</li>
            <li @click="classlist()">晚餐</li>
          </ul>
        </div>
        <div>
          <ul class="indexul2">
            <li @click="classlist()">烘培</li>
            <li @click="classlist()">家常菜</li>
            <li @click="classlist()">中式点心</li>
            <li @click="menu()">全部分类</li>
          </ul>
        </div>
      </div>

      <h3>专辑推荐</h3>

      <div class="indexbottom">
        <img :src="pimg2" @click="gmyj()" />
        <img :src="pimg3" @click="gmyj()" />
        <img :src="pimg4" @click="gmyj()" />
        <img :src="pimg5" @click="gmyj()" />
        <img :src="pimg6" @click="gmyj()" />
        <img :src="pimg7" @click="gmyj()" />
      </div>
    </div>
  </div>
</template>
<script>
import app from "../api/api_pro";
let num = Math.floor(Math.random() * 20) + 9000000;
let num1 = Math.floor(Math.random() * 21) + 9000020;
let num2 = Math.floor(Math.random() * 15 ) + 9000026;
let num3 = Math.floor(Math.random() * 13) + 9000013;
let num4 = Math.floor(Math.random() * 41) + 9000000;
let num5 = Math.floor(Math.random() * 41) + 9000000;
let num6 = Math.floor(Math.random() * 41) + 9000000;
let num7 = Math.floor(Math.random() * 41) + 9000000;
export default {
  data() {
    return {
      value: "",
      active: 0,
      pimg: "",
      pimg1: "",
      pimg2: "",
      pimg3: "",
      pimg4: "",
      pimg5: "",
      pimg6:'',
      pimg7:''
    };
  },
  methods: {
    week() {
      this.$router.push("menudetails");
    },
    fresh() {
      this.$router.push("menudetails");
    },
    gmyj() {
      this.$router.push("menudetails");
    },
    menu() {
      this.$router.push("MenuTypeTbl");
    },
    classlist() {
      this.$router.push("menudetails");
    },
    search() {
      this.$router.push("Search");
    }
  },

  mounted() {
    var params = { uid: num };
    app.product(params).then(data => {
      var str = data.data.pop();
      this.pimg = str.pimg;
    });
    var params1 = { uid: num1 };
    app.product(params1).then(data => {
      var str = data.data.pop();
      this.pimg1 = str.pimg;
    });
    var params2 = { uid: num2 };
    app.product(params2).then(data => {
      var str = data.data.pop();
      this.pimg2 = str.pimg;
    });
    var params3 = { uid: num3 };
    app.product(params3).then(data => {
      var str = data.data.pop();
      this.pimg3 = str.pimg;
    });
    var params4 = { uid: num4 };
    app.product(params4).then(data => {
      var str = data.data.pop();
      this.pimg4 = str.pimg;
    });
    var params5 = { uid: num5 };
    app.product(params5).then(data => {
      var str = data.data.pop();
      this.pimg5 = str.pimg;
    });
    var params6 = { uid: num6 };
    app.product(params6).then(data => {
      var str = data.data.pop();
      this.pimg6 = str.pimg;
    });
    var params7 = { uid: num7 };
    app.product(params7).then(data => {
      var str = data.data.pop();
      this.pimg7 = str.pimg;
    });
  }
};
</script>
<style scoped>
.box {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.imgindex {
  width: 100%;
  height: 100px;
}
.top {
  padding-right: 20px;
  padding-left: 20px;
  overflow: auto;
  margin-bottom:46px;
}

.imgindex img {
  width: 49%;
  height: 100px;
}

.indexul div {
  font-size: 16px;
  width: 100%;
  height: 40px;
}
.indexul li {
  float: left;
}
.indexul1 li {
  width: 24%;
  height: 40px;

  text-align: center;
  line-height: 40px;
}

.indexul2 li {
  width: 24%;
  height: 40px;
  border-top: none;
  border-bottom: none;
  text-align: center;
  line-height: 40px;
}
.indexbottom img {
  width: 100%;
  height: 200px;
  margin-bottom:20px;
}
</style>
