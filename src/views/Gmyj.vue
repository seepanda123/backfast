<template>
  <div>
    <van-nav-bar title="专辑详情" left-arrow @click-left="onClickLeft" />
    <div class="Gmyj">
      <div class="Gmyjimg">
        <img src="../img/1.jpg" alt />
      </div>
      <div class="Gmyj1">
        <h3>秋葵虾仁菌菇汤</h3>
        <p>今天分享一道无敌好喝的秋葵虾仁菌菇汤，鲜香浓郁，汤汁浓稠，营养满满，一大碗不够我一个人喝。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.Gmyj {
  width: 100vw;
  height: 400px;
}
.Gmyjimg img {
  width: 92vw;
  height: 200px;
  margin: 0 4vw;
}
.Gmyj1 {
  width: 92vw;
  height: 60px;
  margin: 0 4vw;
  font-size: 17px;
}
.Gmyj h3 {
  margin: 10px 0;
}
.Gmyj p{
  margin: 0;
}
</style>
