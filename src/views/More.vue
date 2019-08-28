<template>


  <div class="box">
    <van-nav-bar title="更多"  class="header" />
    <section>
      <div v-if="token">
        <div class="logined" style="display:none">
          <van-image round width="3rem" height="3rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          <p>厨友1566214099</p>
          <p>你收藏的菜谱已经同步到云<br>端,永不丢失</p>
        </div>
      </div>
      <div v-else>
        <div class="unlogin" style="display:block" @click="tap()">
          <van-image round width="3rem" height="3rem" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1666256797,972082711&fm=26&gp=0.jpg" />
          <h4>登录/注册账号</h4>
          <p>解锁收藏，云端同步功能、收<br>藏内容不丢失</p>
        </div>
      </div>
      <ul>
        <li>
          <router-link  to="/kitchenstory" tag="li">
          <van-row>
            <van-col span="2">
              <van-icon name="smile-o" />
            </van-col>
            <van-col span="6">厨房故事</van-col>
            <van-col span="6" offset="10">
              <van-icon name="arrow" />
            </van-col>
          </van-row>
          </router-link>
        </li>
        <li>
          <router-link to="/collecting" tag="li">
          <van-row>
            <van-col span="2">
              <van-icon name="star-o" />
            </van-col>
            <van-col span="6" class="neirong">菜谱收藏</van-col>
            <van-col span="6" offset="10">
              <van-icon name="arrow" />
            </van-col>
          </van-row>
          </router-link>
        </li>
        <li>
          <router-link to="/readhistory" tag="li">
          <van-row>
            <van-col span="2">
              <van-icon name="underway-o" />
            </van-col>
            <van-col span="6">历史记录</van-col>
            <van-col span="6" offset="10">
              <van-icon name="arrow" />
            </van-col>
          </van-row>
          </router-link>
        </li>
        <li>
          <van-row>
            <van-col span="2">
              <van-icon name="good-job-o" />
            </van-col>
            <van-col span="11">用着不错，鼓励一下吧</van-col>
            <van-col span="6" offset="5">
              <van-icon name="arrow" />
            </van-col>
          </van-row>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>

export default {
  name: "more",
  data(){
    return{
      token:''
    }
  },
  methods: {
    readhistory(){
      this.$router.push('/ReadHistory.vue')
    },
    tap(){
       this.$router.push('/register')
    }
  },
  mounted() {
    this.token = localStorage.getItem("token")
  },
};
</script>

<style scoped>

section{
  margin-top:10px;
  text-align: center
}
section ul {
  margin-top: 5vh;
}
section li {
  color:black;

  height: 7vh;
}
</style>
