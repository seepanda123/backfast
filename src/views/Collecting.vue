<template>
  <div>
    <van-nav-bar
      title="我的收藏"
      left-arrow
      @click-left="onClickLeft"
      :fixed="true"
    >
    <van-icon name="delete" slot="right" />
    </van-nav-bar>
  </div>
</template>

<script>
  export default {
    name:'collecting',
     methods: {
      onClickLeft() {
        this.$router.go(-1);
      }
     }
  }
</script>

<style scoped>

</style>
