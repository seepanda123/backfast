<template>
  <div class="box">
    <router-view></router-view>
    <div class="footer">

      <van-tabbar v-model="active" active-color="#FF0" inactive-color="#000">
        <van-tabbar-item icon="wap-home" to="/index">首页</van-tabbar-item>
        <van-tabbar-item icon="shop-collect-o" to="/menutypetbl">菜谱分类</van-tabbar-item>
        <van-tabbar-item icon="goods-collect-o" to="/shopbasket">菜篮子</van-tabbar-item>
        <van-tabbar-item icon="more-o" to="/more">更多</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>
<script>
export default {
  name: "index",
};
</script>
<style scoped>

</style>