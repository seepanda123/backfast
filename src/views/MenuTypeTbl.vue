<template>
  <div class="Body">
    <div class="header">
      <van-search input-align="center" placeholder="搜索菜谱" v-model="value" />
    </div>
    <div class="section">
      <p>热门分类</p>
      <van-grid :border="false">
        <van-grid-item to="/menudetails" :gutter="8">
          <van-image src="http://recipe0.hoto.cn/pic/recipe/l/98/bd/900504_76f733.jpg" />
        </van-grid-item>
        <van-grid-item to="/menudetails">
          <van-image src="http://recipe1.hoto.cn/pic/recipe/l/11/2d/404753_e34196.jpg" />
        </van-grid-item>
        <van-grid-item to="/menudetails">
          <van-image src="http://recipe0.hoto.cn/pic/recipe/l/e8/de/188136_01f4c2.jpg" />
        </van-grid-item>
        <van-grid-item to="/menudetails">
          <van-image src="http://recipe1.hoto.cn/pic/recipe/l/93/93/889747_d06487.jpg" />
        </van-grid-item>
      </van-grid>

      <p>一日三餐</p>

      <van-grid :border="false">
        <van-grid-item to="/menudetails" :gutter="8">
          <van-image src="http://recipe0.hoto.cn/pic/recipe/l/e8/de/188136_01f4c2.jpg" />
        </van-grid-item>
        <van-grid-item to="/menudetails">
          <van-image src="http://recipe1.hoto.cn/pic/recipe/l/11/2d/404753_e34196.jpg" />
        </van-grid-item>
        <van-grid-item to="/menudetails">
          <van-image src="http://recipe1.hoto.cn/pic/recipe/l/93/93/889747_d06487.jpg" />
        </van-grid-item>
        <van-grid-item to="/menudetails">
          <van-image src="http://recipe0.hoto.cn/pic/recipe/l/98/bd/900504_76f733.jpg" />
        </van-grid-item>
      </van-grid>

      <p>家常菜谱</p>

      <van-grid :border="false">
        <van-grid-item to="/menudetails" :gutter="8">
          <van-image src="http://recipe1.hoto.cn/pic/recipe/l/93/93/889747_d06487.jpg" />
        </van-grid-item>
        <van-grid-item to="/menudetails">
          <van-image src="http://recipe1.hoto.cn/pic/recipe/l/69/13/988009_fabce7.jpg" />
        </van-grid-item>
        <van-grid-item to="/menudetails">
          <van-image src="https://res1.hoto.cn/0313718c59633f0df444eb88.jpg!default" />
        </van-grid-item>
        <van-grid-item to="/menudetails">
          <van-image src="https://res1.hoto.cn/02f93dbd59633f0df444eb88.jpg!default" />
        </van-grid-item>
        <van-grid-item to="/menudetails">
          <van-image src="https://res1.hoto.cn/0305824859633f0df444eb88.jpg!default" />
        </van-grid-item>
        <van-grid-item to="/menudetails">
          <van-image src="https://res1.hoto.cn/030ef66159633f0df444eb88.jpg!default" />
        </van-grid-item>
        <van-grid-item to="/menudetails">
          <van-image src="https://res1.hoto.cn/0312c7a459633f0df444eb88.jpg!default" />
        </van-grid-item>
        <van-grid-item to="/menudetails">
          <van-image src="https://res1.hoto.cn/02f2224e59633f0df444eb88.jpg!default" />
        </van-grid-item>
        <van-grid-item to="/menudetails">
          <van-image src="https://res1.hoto.cn/02f41a7c59633f0df444eb88.jpg!default" />
        </van-grid-item>
      </van-grid>

      <p>主食小吃</p>

      <van-grid :border="false">
        <van-grid-item to="/menudetails" :gutter="8">
          <van-image src="https://res1.hoto.cn/030273e959633f0df444eb88.jpg!default" />
        </van-grid-item>
        <van-grid-item to="/menudetails">
          <van-image src="https://res1.hoto.cn/0310bef159633f0df444eb88.jpg!default" />
        </van-grid-item>
        <van-grid-item to="/menudetails">
          <van-image src="https://res1.hoto.cn/02f0a3ee59633f0df444eb88.jpg!default" />
        </van-grid-item>
        <van-grid-item to="/menudetails">
          <van-image src="https://res1.hoto.cn/02f3a1ac59633f0df444eb88.jpg!default" />
        </van-grid-item>
        <van-grid-item to="/menudetails">
          <van-image src="https://res1.hoto.cn/02f1d9c859633f0df444eb88.jpg!default" />
        </van-grid-item>
      </van-grid>

      <p>时令美食</p>
      <van-grid :border="false">
        <van-grid-item to="/menudetails" :gutter="8">
          <van-image src="https://res1.hoto.cn/02fd16cc59633f0df444eb88.jpg!default" />
        </van-grid-item>
        <van-grid-item to="/menudetails">
          <van-image src="https://res1.hoto.cn/02f823ba59633f0df444eb88.jpg!default" />
        </van-grid-item>
        <van-grid-item to="/menudetails">
          <van-image src="https://res1.hoto.cn/02f07d1f59633f0df444eb88.jpg!default" />
        </van-grid-item>
        <van-grid-item to="/menudetails">
          <van-image src="https://res1.hoto.cn/03097ce559633f0df444eb88.jpg!default" />
        </van-grid-item>
      </van-grid>
      <p>食材</p>
      <van-grid :border="false">
        <van-grid-item to="/menudetails" :gutter="8">
          <van-image src="https://res1.hoto.cn/02f7f65359633f0df444eb88.jpg!default" />
        </van-grid-item>
        <van-grid-item to="/menudetails">
          <van-image src="https://res1.hoto.cn/03154b7459633f0df444eb88.jpg!default" />
        </van-grid-item>
        <van-grid-item to="/menudetails">
          <van-image src="https://res1.hoto.cn/030e54cc59633f0df444eb88.jpg!default" />
        </van-grid-item>
        <van-grid-item to="/menudetails">
          <van-image src="https://res1.hoto.cn/0316ebf759633f0df444eb88.jpg!default" />
        </van-grid-item>
        <van-grid-item to="/menudetails">
          <van-image src="https://res1.hoto.cn/0304fcc959633f0df444eb88.jpg!default" />
        </van-grid-item>
        <van-grid-item to="/menudetails">
          <van-image src="https://res1.hoto.cn/0302280759633f0df444eb88.jpg!default" />
        </van-grid-item>
        <van-grid-item to="/menudetails">
          <van-image src="https://res1.hoto.cn/02f3ff6159633f0df444eb88.jpg!default" />
        </van-grid-item>
      </van-grid>
      <p>孕婴食谱</p>
      <van-grid :border="false">
        <van-grid-item to="/menudetails" :gutter="8">
          <van-image src="https://res1.hoto.cn/0301661559633f0df444eb88.jpg!default" />
        </van-grid-item>
        <van-grid-item to="/menudetails">
          <van-image src="https://res1.hoto.cn/0311962159633f0df444eb88.jpg!default" />
        </van-grid-item>
        <van-grid-item to="/menudetails">
          <van-image src="https://res1.hoto.cn/02f41e0e59633f0df444eb88.jpg!default" />
        </van-grid-item>
        <van-grid-item to="/menudetails">
          <van-image src="https://res1.hoto.cn/02f9a03d59633f0df444eb88.jpg!default" />
        </van-grid-item>
        <van-grid-item to="/menudetails">
          <van-image src="https://res1.hoto.cn/0315efe659633f0df444eb88.jpg!default" />
        </van-grid-item>
        <van-grid-item to="/menudetails">
          <van-image src="https://res1.hoto.cn/030d946c59633f0df444eb88.jpg!default" />
        </van-grid-item>
      </van-grid>
      <p>烘焙甜品</p>
      <van-grid :border="false">
        <van-grid-item to="/menudetails" :gutter="8">
          <van-image src="https://res1.hoto.cn/0307e91a59633f0df444eb88.jpg!default" />
        </van-grid-item>
        <van-grid-item to="/menudetails">
          <van-image src="https://res1.hoto.cn/02f180ce59633f0df444eb88.jpg!default" />
        </van-grid-item>
        <van-grid-item to="/menudetails">
          <van-image src="https://res1.hoto.cn/02f5e10859633f0df444eb88.jpg!default" />
        </van-grid-item>
        <van-grid-item to="/menudetails">
          <van-image src="https://res1.hoto.cn/02fea9cb59633f0df444eb88.jpg!default" />
        </van-grid-item>
        <van-grid-item to="/menudetails">
          <van-image src="https://res1.hoto.cn/030bedc359633f0df444eb88.jpg!default" />
        </van-grid-item>
        <van-grid-item to="/menudetails">
          <van-image src="https://res1.hoto.cn/0306a91059633f0df444eb88.jpg!default" />
        </van-grid-item>
      </van-grid>
      <p>美容养生</p>
      <van-grid :border="false">
        <van-grid-item to="/menudetails" :gutter="8">
          <van-image src="https://res1.hoto.cn/02f0a52b59633f0df444eb88.jpg!default" />
        </van-grid-item>
        <van-grid-item to="/menudetails">
          <van-image src="https://res1.hoto.cn/0314691b59633f0df444eb88.jpg!default" />
        </van-grid-item>
        <van-grid-item to="/menudetails">
          <van-image src="https://res1.hoto.cn/0313d0c159633f0df444eb88.jpg!default" />
        </van-grid-item>
        <van-grid-item to="/menudetails">
          <van-image src="https://res1.hoto.cn/02fc7f3559633f0df444eb88.jpg!default" />
        </van-grid-item>
        <van-grid-item to="/menudetails">
          <van-image src="https://res1.hoto.cn/0312ee5b59633f0df444eb88.jpg!default" />
        </van-grid-item>
        <van-grid-item to="/menudetails">
          <van-image src="https://res1.hoto.cn/02f443d959633f0df444eb88.jpg!default" />
        </van-grid-item>
        <van-grid-item to="/menudetails">
          <van-image src="https://res1.hoto.cn/0307999859633f0df444eb88.jpg!default" />
        </van-grid-item>
        <van-grid-item to="/menudetails">
          <van-image src="https://res1.hoto.cn/03018f3359633f0df444eb88.jpg!default" />
        </van-grid-item>
        <van-grid-item to="/menudetails">
          <van-image src="https://res1.hoto.cn/02f5721159633f0df444eb88.jpg!default" />
        </van-grid-item>
      </van-grid>
      <p>场景</p>
      <van-grid :border="false">
        <van-grid-item to="/menudetails" :gutter="8">
          <van-image src="https://res1.hoto.cn/02ffd7ff59633f0df444eb88.jpg!default" />
        </van-grid-item>
        <van-grid-item to="/menudetails">
          <van-image src="https://res1.hoto.cn/03074feb59633f0df444eb88.jpg!default" />
        </van-grid-item>
        <van-grid-item to="/menudetails">
          <van-image src="https://res1.hoto.cn/03164f8d59633f0df444eb88.jpg!default" />
        </van-grid-item>
        <van-grid-item to="/menudetails">
          <van-image src="https://res1.hoto.cn/03164f8d59633f0df444eb88.jpg!default" />
        </van-grid-item>
        <van-grid-item to="/menudetails">
          <van-image src="https://res1.hoto.cn/030a3a3a59633f0df444eb88.jpg!default" />
        </van-grid-item>
        <van-grid-item to="/menudetails">
          <van-image src="https://res1.hoto.cn/02f1d3c459633f0df444eb88.jpg!default" />
        </van-grid-item>
        <van-grid-item to="/menudetails">
          <van-image src="https://res1.hoto.cn/02f9b0a759633f0df444eb88.jpg!default" />
        </van-grid-item>
      </van-grid>
      <p>奇趣发现</p>
      <van-grid :border="false">
        <van-grid-item to="/menudetails" :gutter="8">
          <van-image src="https://res1.hoto.cn/02f5d54959633f0df444eb88.jpg!default" />
        </van-grid-item>
        <van-grid-item to="/menudetails">
          <van-image src="https://res1.hoto.cn/02f6ad0559633f0df444eb88.jpg!default" />
        </van-grid-item>
        <van-grid-item to="/menudetails">
          <van-image src="https://res1.hoto.cn/030ed6b459633f0df444eb88.jpg!default" />
        </van-grid-item>
        <van-grid-item to="/menudetails">
          <van-image src="https://res1.hoto.cn/0312bf0759633f0df444eb88.jpg!default" />
        </van-grid-item>
        <van-grid-item to="/menudetails">
          <van-image src="https://res1.hoto.cn/030386a459633f0df444eb88.jpg!default" />
        </van-grid-item>
        <van-grid-item to="/menudetails">
          <van-image src="https://res1.hoto.cn/031389f259633f0df444eb88.jpg!default" />
        </van-grid-item>
        <van-grid-item to="/menudetails">
          <van-image src="https://res1.hoto.cn/02ff437f59633f0df444eb88.jpg!default" />
        </van-grid-item>
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
      active: 0,
    };
  },
  methods: {}
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
  font-size: 16px;
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
.van-image {
  width: 20vw;
  height: 20vw;
}
</style>
