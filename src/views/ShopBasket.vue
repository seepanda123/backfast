<template>
  <div class="Body">
    <header>
      <van-nav-bar title="菜篮子" right-text="清空" @click-right="tap()" :fixed="true" />
    </header>
    <section>
      <!-- <van-nav-bar title="菜篮子" right-text="清空" @click-right="tap()" :fixed="true"/> -->
      <van-tabs @click="onClick" title-active-color="orange" sticky scrollTop="46px">
        <van-tab title="按菜品查看" name="按菜品查看">
          <!-- 判断用户是否登录 -->
          <div v-if="token">
            <!-- 判断菜篮子内是否添加有数据 -->
            <div v-if="shop.length>0">
              <div v-for="(item,i) in arr" v-bind:key="i">
                <h3>
                  <van-image width="50" height="50" :src="item.pimg" class="Image"  @click="goDetails(item.uid)"/>
                  <p style="display:inline-block">{{item.pname}}</p>
                  <span @click="remove(i)" style="color:orange">移出这个菜</span>
                </h3>
                <ul>
                  <li v-for="(val,v) in arr1[i]" v-bind:key="v">
                    <van-row>
                      <van-col span="20">{{val[0]}}</van-col>
                      <van-col span="4">{{val[1]}}</van-col>
                    </van-row>
                  </li>
                </ul>
              </div>
            </div>

            <div v-else>
              <div class="nologin">
                <h2>经常买完菜回家，才发现忘了买葱？</h2>
                <p>(把菜谱中的原料放进菜篮子，买菜时就不会漏掉原料了)</p>
              </div>
            </div>
          </div>
          <!-- /判断用户是否登录 -->

          <div v-else>
            <div class="nologin">
              <h2>经常买完菜回家，才发现忘了买葱？</h2>
              <p>(把菜谱中的原料放进菜篮子，买菜时就不会漏掉原料了)</p>
              <van-button type="warning" class="btn" to="Register">立即启用</van-button>
            </div>
          </div>
          <!-- /判断菜篮子内是否添加有数据 -->
        </van-tab>
        <div v-if="token">
          <van-tab title="按材料查看" name="按材料查看">
            <!-- 判断用户是否登录 -->

            <!-- 判断菜篮子内是否添加有数据 -->
            <div v-if="shop.length>0">
              <ul>
                <li v-for="(list,i) in cailiao" v-bind:key="i">
                  <van-row>
                    <van-col span="20">{{list[0]}}</van-col>
                    <van-col span="4">{{list[1]}}</van-col>
                  </van-row>
                </li>
              </ul>
            </div>

            <div v-else>
              <div class="nologin">
                <h2>经常买完菜回家，才发现忘了买葱？</h2>
                <p>(把菜谱中的原料放进菜篮子，买菜时就不会漏掉原料了)</p>
              </div>
            </div>
          </van-tab>
        </div>

        <!-- /判断用户未登录 -->
        <div v-else>
          <van-tab title="按材料查看" name="请登录"></van-tab>
        </div>
      </van-tabs>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import axios from "../api/api_pro";
import $ from "jquery";
export default {
  name: "shopbasket",
  data() {
    return {
      active: 0,
      token: "",
      shop: [],
      arr: [],
      arr1: [],
      cailiao: []
    };
  },
  methods: {
    goDetails(i){
      localStorage.setItem("uid",i)
      this.$router.push("Details")
    },
    tap() {
      this.shop = [];
      this.cailiao = [];
      localStorage.setItem("shop", "");
    },
    onClick(name, title) {
      this.$toast(name);
    },
    remove(i) {
      // this.shop = this.shop.splice(i,1)
      this.shop.splice(i, 1);
      localStorage.setItem("shop", this.shop);

      let _this = this;
      this.arr = [];
      this.arr1 = [];
      this.shop.map((item, i) => {
        if (this.shop.length > 0) {
          $.ajax({
            type: "GET",
            url: "http://jx.xuzhixiang.top/ap/api/productlist.php",
            data: { uid: item },
            dataType: "json",
            async: false,
            success: function(data) {
              var list = data.data;
              var title = data.data.pop();
              _this.arr.push(title);
              _this.arr1[i] = [];
              list.map(item => {
                if (item.pname) {
                  _this.arr1[i].push(item.pname.split(" "));
                }
              });
            }
          });
          axios.product({ uid: item }).then(data => {
            let name = data.data.pop();
            data.data.map(val => {
              if (val.pname) {
                this.cailiao.push(val.pname.split(" "));
              }
            });
          });
        }
      });
    }
  },
  mounted() {
    this.token = localStorage.getItem("token")
    if (localStorage.getItem("shop")) {
      this.shop = localStorage.getItem("shop").split(",");
      let _this = this;
      this.shop.map((item, i) => {
        if (this.shop.length > 0) {
          $.ajax({
            type: "GET",
            url: "http://jx.xuzhixiang.top/ap/api/productlist.php",
            data: { uid: item },
            dataType: "json",
            async: false,
            success: function(data) {
              var list = data.data;
              var title = data.data.pop();
              _this.arr.push(title);
              _this.arr1[i] = [];
              list.map(item => {
                if (item.pname) {
                  _this.arr1[i].push(item.pname.split(" "));
                }
              });
            }
          });
          axios.product({ uid: item }).then(data => {
            let name = data.data.pop();
            data.data.map(val => {
              if (val.pname) {
                this.cailiao.push(val.pname.split(" "));
              }
            });
          });
        }
      });
    }
  }
};
</script>

<style scoped>
h3 {
  height: 50px;
  margin-left: 5vw;
}
h3 span {
  margin-left: 100px;
}
.Image {
  float: left;
}
section li {
  height: 50px;
  background: #f5f1f1;
  margin: 10px 25px;
  line-height: 50px;
}

body {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
section {
  flex: 1;
  overflow: auto;
  margin: 50px 0;
}
.nologin {
  width: 300px;
  height: 200px;
  margin: 150px auto;
}
.nologin p {
  font-size: 16px;
  color: #afa9a9;
}
.btn {
  margin-left: 100px;
}
</style>
