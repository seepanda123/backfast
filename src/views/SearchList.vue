<template>
  <div>
    <div class="sousuo1">
      <van-icon name="arrow-left" to="index" @click="onClickLeft()" size="26px" />
    </div>
    <div class="sousuo2">
      <van-search v-model="value" placeholder="请输入搜索关键词" show-action shape="round">
        <div slot="action" @click="onSearch">搜索</div>
      </van-search>
    </div>
    <van-card desc="灰子" title="红烧肉" thumb="../img/4.jpg">
      <div slot="tags">
        <van-tag plain type="danger">点赞</van-tag>
        <van-tag plain type="danger">收藏</van-tag>
      </div>
    </van-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("index");
    },
    onSearch() {
      this.$router.push("SearchList");
    }
  }
};
</script>

<style scoped>
.sousuo1 {
  width: 30px;
  margin-top: 10px;
  float: left;
}
.sousuo2 {
  margin-left: 30px;
}
</style>
