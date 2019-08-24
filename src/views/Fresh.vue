<template>
  <div>
    <van-nav-bar title="新鲜菜" :fixed="true"/>
    <div>
      <img v-for="img in imageList" v-lazy="img" class="imgFresh" >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageList: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ]
    };
  }
}
</script>

<style scoped>
.imgFresh{
  width: 100%;
  height: 200px;
}

</style>
