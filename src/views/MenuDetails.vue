<template>
  <div>
    <header>
      <van-nav-bar title="标题" left-arrow @click-left="onClickLeft" :fixed="true" />
    </header>
    <section>
      <div>
         <van-image width="350" height="200" src="https://img.yzcdn.cn/vant/cat.jpeg" />
         <h4>蒜蓉耗油香菇</h4>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat consectetur corrupti, praesentium molestiae iste accusamus alias molestias est amet quo accusantium dolorum harum dolor numquam, dolorem ullam eaque obcaecati veniam.</p>
      </div>
  <div>
         <van-image width="350" height="200" src="https://img.yzcdn.cn/vant/cat.jpeg" />
         <h4>蒜蓉耗油香菇</h4>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat consectetur corrupti, praesentium molestiae iste accusamus alias molestias est amet quo accusantium dolorum harum dolor numquam, dolorem ullam eaque obcaecati veniam.</p>
      </div>
      <div>
         <van-image width="350" height="200" src="https://img.yzcdn.cn/vant/cat.jpeg" />
         <h4>蒜蓉耗油香菇</h4>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat consectetur corrupti, praesentium molestiae iste accusamus alias molestias est amet quo accusantium dolorum harum dolor numquam, dolorem ullam eaque obcaecati veniam.</p>
      </div>
      <div>
         <van-image width="350" height="200" src="https://img.yzcdn.cn/vant/cat.jpeg" />
         <h4>蒜蓉耗油香菇</h4>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat consectetur corrupti, praesentium molestiae iste accusamus alias molestias est amet quo accusantium dolorum harum dolor numquam, dolorem ullam eaque obcaecati veniam.</p>
      </div>
      <div>
         <van-image width="350" height="200" src="https://img.yzcdn.cn/vant/cat.jpeg" />
         <h4>蒜蓉耗油香菇</h4>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat consectetur corrupti, praesentium molestiae iste accusamus alias molestias est amet quo accusantium dolorum harum dolor numquam, dolorem ullam eaque obcaecati veniam.</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "menudetails",
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
section div{
  width:350px;
  height: 350px;
  padding: 5px;
  margin: 20px 0;
}
h4{
  margin: 5px 0;
}
</style>
