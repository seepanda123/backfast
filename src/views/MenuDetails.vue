<template>
  <div>
    <header>
      <van-nav-bar title="分享菜谱" left-arrow @click-left="onClickLeft" :fixed="true" />
    </header>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <section>
        <div @click="toDetail(num1)">
          <van-image :src="pimg" />
          <h4>{{pname}}</h4>
          <p>{{pdesc}}</p>
        </div>
        <div @click="toDetail(num2)">
          <van-image :src="pimg1" />
          <h4>{{pname1}}</h4>
          <p>{{pdesc1}}</p>
        </div>
        <div @click="toDetail(num3)">
          <van-image :src="pimg2" />
          <h4>{{pname2}}</h4>
          <p>{{pdesc2}}</p>
        </div>
        <div @click="toDetail(num4)">
          <van-image :src="pimg3" />
          <h4>{{pname3}}</h4>
          <p>{{pdesc3}}</p>
        </div>
        <div @click="toDetail(num5)">
          <van-image :src="pimg4" />
          <h4>{{pname4}}</h4>
          <p>{{pdesc4}}</p>
        </div>
      </section>
    </van-pull-refresh>
  </div>
</template>
<script>
import axios from '../api/api_pro'
let parmas = {uid:6000001}
axios.product(parmas).then((data)=>{
  console.log(data)
})


export default {
  name: "menudetails",
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.num1 = Math.floor(Math.random() * 41) + 9000000;
        this.num2 = Math.floor(Math.random() * 41) + 9000000;
        this.num3 = Math.floor(Math.random() * 41) + 9000000;
        this.num4 = Math.floor(Math.random() * 41) + 9000000;
        this.num5 = Math.floor(Math.random() * 41) + 9000000;
        let params = { uid: this.num1 };
        axios.product(params).then(data => {
          var str = data.data.pop();
          this.pname = str.pname;
          this.pimg = str.pimg;
          this.pdesc = str.pdesc;
          console.log(this.pimg);
        });
        let params1 = { uid: this.num2 };
        axios.product(params1).then(data => {
          var str1 = data.data.pop();
          this.pname1 = str1.pname;
          this.pimg1 = str1.pimg;
          this.pdesc1 = str1.pdesc;
        });
        let params2 = { uid: this.num3 };
        axios.product(params2).then(data => {
          var str2 = data.data.pop();
          this.pname2 = str2.pname;
          this.pimg2 = str2.pimg;
          this.pdesc2 = str2.pdesc;
        });
        let params3 = { uid: this.num4 };
        axios.product(params3).then(data => {
          var str3 = data.data.pop();
          this.pname3 = str3.pname;
          this.pimg3 = str3.pimg;
          this.pdesc3 = str3.pdesc;
        });
        let params4 = { uid: this.num5 };
        axios.product(params4).then(data => {
          var str4 = data.data.pop();
          this.pname4 = str4.pname;
          this.pimg4 = str4.pimg;
          this.pdesc4 = str4.pdesc;
        });
      }, 2000);
    },
    toDetail(uid) {
      localStorage.setItem("uid",uid)
      this.$router.push("Details");
      // console.log(uid)
    }
  },

  data() {
    return {
      isLoading: false,
      pname: "",
      pimg: "",
      pdesc: "",
      pname1: "",
      pimg1: "",
      pdesc1: "",
      pname2: "",
      pimg2: "",
      pdesc2: "",
      pname3: "",
      pimg3: "",
      pdesc3: "",
      pname4: "",
      pimg4: "",
      pdesc4: "",
      mun1: "",
      mun2: "",
      mun3: "",
      mun4: "",
      mun5: ""
    };
  },
  mounted() {
    this.num1 = Math.floor(Math.random() * 41) + 9000000;
    this.num2 = Math.floor(Math.random() * 41) + 9000000;
    this.num3 = Math.floor(Math.random() * 41) + 9000000;
    this.num4 = Math.floor(Math.random() * 41) + 9000000;
    this.num5 = Math.floor(Math.random() * 41) + 9000000;

    let params = { uid: this.num1 };
    axios.product(params).then(data => {
      var str = data.data.pop();
      this.pname = str.pname;
      this.pimg = str.pimg;
      this.pdesc = str.pdesc;
      console.log(this.pimg);
    });
    let params1 = { uid: this.num2 };
    axios.product(params1).then(data => {
      var str1 = data.data.pop();
      this.pname1 = str1.pname;
      this.pimg1 = str1.pimg;
      this.pdesc1 = str1.pdesc;
    });
    let params2 = { uid: this.num3 };
    axios.product(params2).then(data => {
      var str2 = data.data.pop();
      this.pname2 = str2.pname;
      this.pimg2 = str2.pimg;
      this.pdesc2 = str2.pdesc;
    });
    let params3 = { uid: this.num4 };
    axios.product(params3).then(data => {
      var str3 = data.data.pop();
      this.pname3 = str3.pname;
      this.pimg3 = str3.pimg;
      this.pdesc3 = str3.pdesc;
    });
    let params4 = { uid: this.num5 };
    axios.product(params4).then(data => {
      var str4 = data.data.pop();
      this.pname4 = str4.pname;
      this.pimg4 = str4.pimg;
      this.pdesc4 = str4.pdesc;
    });
  }
};
</script>

<style scoped>
.van-pull-refresh {
  margin-top: 46px;
}
section div {
  width: 100vw;
  margin-top: 2vw;
}
.van-image {
  width: 92vw;
  margin-left: 4vw;
  height: 200px;
}
h4,
p {
  width: 92vw;
  margin-left: 4vw;
}
p {
  width: 92vw;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
</style>
