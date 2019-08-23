<template>
  <div class="Body">
    <div class="header">
      <van-search input-align="center" placeholder="搜索菜谱" v-model="value" />
    </div>
    <div class="section">
      <p>热门分类</p>
      <van-grid :gutter="10">
        <van-grid-item v-for="value in 4" :key="value" icon="photo-o" text="文字" to="/MenuDetails"/>
      </van-grid>
      <p>一日三餐</p>
      <van-grid :gutter="10">
        <van-grid-item v-for="value in 4" :key="value" icon="photo-o" text="文字" to="/MenuDetails" />
      </van-grid>
      <p>家常菜谱</p>
      <van-grid :gutter="10">
        <van-grid-item v-for="value in 9" :key="value" icon="photo-o" text="文字" to="/MenuDetails"/>
      </van-grid>
      <p>主食小吃</p>
      <van-grid :gutter="10">
        <van-grid-item v-for="value in 5" :key="value" icon="photo-o" text="文字" to="/MenuDetails"/>
      </van-grid>
      <p>时令美食</p>
      <van-grid :gutter="10">
        <van-grid-item v-for="value in 4" :key="value" icon="photo-o" text="文字" to="/MenuDetails"/>
      </van-grid>
      <p>食材</p>
      <van-grid :gutter="10">
        <van-grid-item v-for="value in 7" :key="value" icon="photo-o" text="文字" to="/MenuDetails"/>
      </van-grid>
      <p>孕婴食谱</p>
      <van-grid :gutter="10">
        <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" to="/MenuDetails"/>
      </van-grid>
      <p>烘焙甜品</p>
      <van-grid :gutter="10">
        <van-grid-item v-for="value in 9" :key="value" icon="photo-o" text="文字" to="/MenuDetails"/>
      </van-grid>
      <p>美容养生</p>
      <van-grid :gutter="10">
        <van-grid-item v-for="value in 9" :key="value" icon="photo-o" text="文字" to="/MenuDetails"/>
      </van-grid>
      <p>场景</p>
      <van-grid :gutter="10">
        <van-grid-item v-for="value in 7" :key="value" icon="photo-o" text="文字" to="/MenuDetails"/>
      </van-grid>
      <p>奇趣发现</p>
      <van-grid :gutter="10">
        <van-grid-item v-for="value in 7" :key="value" icon="photo-o" text="文字" to="/MenuDetails"/>
      </van-grid>
    </div>

  </div>
</template>

<script>
export default {
  name: "menutypetbl",
  data() {
    return {
      value: "",
      active: 0
    }
  },
  methods: {

  },
};
</script>

<style scoped>
.Body {
  display: flex;
  height: 100vh;
  flex-direction: column;
}
p {
  text-align: center;
}
.header {
  width: 100vw;
  height: 30px;
  position: fixed;
  z-index: 1;
  margin: 0;
}
.section {
  overflow: auto;
  margin: 50px 0;
  flex: 1;
}
</style>
