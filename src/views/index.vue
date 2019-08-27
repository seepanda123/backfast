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
.box{
  display: flex;
  flex-direction: column;
  height:100vh
}
.imgindex {
  width: 100%;
  height: 200px;
}
.top{
  padding-right: 20px;
  padding-left: 20px;
  overflow: auto;
}
</style>
