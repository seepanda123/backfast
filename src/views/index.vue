<template>
  <div class="box">
    <van-nav-bar title="早餐菜谱" />

    <div class="top">
      <van-grid :column-num="2">
        <van-grid-item v-for="value in 2" :key="value" icon="photo-o" />
      </van-grid>

      <van-search placeholder="搜索 菜谱/食材" v-model="value" input-align="center" />

      <van-grid square>
        <van-grid-item v-for="value in 8" :key="value" text="文字" />
      </van-grid>

      <h3>专辑推荐</h3>

      <img v-for="img in imageList" v-lazy="img" class="imgindex" />
    </div>
  </div>
</template>
<script>
export default {
  name: "index",
  data() {
    return {
      value: "",
      active: 0,
      imageList: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ]
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
</script>
<style scoped>
.imgindex {
  width: 100%;
  height: 200px;
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
.indexbottom img {
  width: 100%;
  height: 200px;
}
</style>
