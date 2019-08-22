<template>
  <div>
    <van-nav-bar
      title="休息日做道家常菜"
      left-arrow
      @click-left="onClickLeft"
      :fixed="true"
    />
  </div>
</template>

<script>
  export default {
    name:'storys',
     methods: {
      onClickLeft() {
        this.$router.go(-1);
      }
     }
  }
</script>

<style scoped>

</style>
