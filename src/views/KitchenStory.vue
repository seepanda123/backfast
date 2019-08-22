<template>
  <div>
    <router-link to="#"></router-link>
    <van-nav-bar
      title="厨房故事"
      left-arrow
      @click-left="onClickLeft"
      :fixed="true"
    />
    <div class="maincon">
      <p>休息日做道家常菜，虾仁炒玉米鲜嫩可口，治愈你的内心</p>
      <img src="../img/o1.jpg" alt="">
      <van-row>
        <van-col span="8">来自 洋芋丝丝</van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
  export default {
    name:"kitchenstory",
     methods: {
      onClickLeft() {
        this.$router.go(-1);
      }
     }
  }
</script>

<style scoped>
 .maincon p{
   width: 92vw;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
   margin-left:1vw;
   }
   .maincon img{
     border:0;
     width: 92vw;
     height:180px;
   }

</style>
