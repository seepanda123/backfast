<template>
  <div>

<<<<<<< HEAD:src/views/index.vue
    <router-view></router-view>
    <div class="footer">

      <van-tabbar v-model="active" active-color="#FF0" inactive-color="#000">
        <van-tabbar-item icon="wap-home" to="/index">首页</van-tabbar-item>
        <van-tabbar-item icon="shop-collect-o" to="/menutypetbl">菜谱分类</van-tabbar-item>
        <van-tabbar-item icon="goods-collect-o" to="/shopbasket">菜篮子</van-tabbar-item>
        <van-tabbar-item icon="more-o" to="/more">更多</van-tabbar-item>
      </van-tabbar>
=======
    <div class="top">
      <div class="imgindex">
        <img src="../img/4.jpg" @click="week()" />
        <img src="../img/5.jpg" @click="fresh()" />
      </div>

      <van-search placeholder="搜索 菜谱/食材" v-model="value" input-align="center" @click="search()"/>

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
        <img src="../img/3.jpg" @click="gmyj()" />
        <img src="../img/1.jpg" @click="gmyj()" />
        <img src="../img/2.jpg" @click="gmyj()" />
        <img src="../img/3.jpg" @click="gmyj()" />
        <img src="../img/4.jpg" @click="gmyj()" />
        <img src="../img/5.jpg" @click="gmyj()" />
      </div>
>>>>>>> 83c8b868c57d0fd639e7e8c7e9ec2b04a63586a1:src/ views/Index.vue
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD:src/views/index.vue
  export default {
    name:"index",
    data(){
      return {
        active:0
      }
    }
  }
=======
export default {
  data() {
    return {
      value: "",
      active: 0
    };
  },
  methods: {
    week() {
      this.$router.push("WeekHot");
    },
    fresh() {
      this.$router.push("Fresh");
    },
    gmyj() {
      this.$router.push("Gmyj");
    },
    menu() {
      this.$router.push("MenuTypeTbl");
    },
    classlist() {
      this.$router.push("ClassList");
    },
    search() {
      this.$router.push("Search");
    }
  }
};
>>>>>>> 83c8b868c57d0fd639e7e8c7e9ec2b04a63586a1:src/ views/Index.vue
</script>

<style scoped>
<<<<<<< HEAD:src/views/index.vue
=======
<<<<<<< HEAD:src/views/index.vue
=======
>>>>>>> master:src/ views/Index.vue
.box{
  display: flex;
  flex-direction: column;
  height:100vh
}
.imgindex {
  width: 100%;
  height: 100px;
}
.top{
  padding-right: 20px;
  padding-left: 20px;
  overflow: auto;
}

.imgindex img {
  width: 49%;
  height: 100px;
}
.top {
  margin-top: 40px;
  margin-right: 20px;
  margin-left: 20px;
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
  border: 1px solid black;
  text-align: center;
  line-height: 40px;
}
.indexul1 li:first-child {
  border-left: none;
}
.indexul1 li:last-child {
  border-right: none;
}
.indexul2 li {
  width: 24%;
  height: 40px;
  border: 1px solid black;
  border-top: none;
  border-bottom: none;
  text-align: center;
  line-height: 40px;
}
.indexul2 li:first-child {
  border-left: none;
}
.indexul2 li:last-child {
  border-right: none;
}
.indexbottom img{
  width: 100%;
  height: 200px;
}
<<<<<<< HEAD:src/views/index.vue
=======
>>>>>>> 83c8b868c57d0fd639e7e8c7e9ec2b04a63586a1:src/ views/Index.vue
>>>>>>> master:src/ views/Index.vue

</style>
