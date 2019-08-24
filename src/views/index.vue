<template>
  <div>
    <van-nav-bar title="早餐菜谱" :fixed="true" />

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
    <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o">标签</van-tabbar-item>
        <van-tabbar-item icon="search">标签</van-tabbar-item>
        <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
        <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
      </van-tabbar>
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
  }
};
</script>
<style scoped>
.imgindex {
  width: 100%;
  height: 200px;
}
.top{
  margin-top:40px;
  margin-right: 20px;
  margin-left: 20px;
}
</style>
