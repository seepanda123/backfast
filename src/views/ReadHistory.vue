<template>
  <div>
    <van-nav-bar
      title="阅读历史"
      left-arrow
      @click-left="onClickLeft"
      :fixed="true"
    />
  </div>
</template>

<script>
  export default {
    name:'readhistory',
     methods: {
      onClickLeft() {
        this.$router.go(-1);
      }
     }
  }
</script>

<style scoped>

</style>
