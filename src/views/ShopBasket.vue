<template>
  <div class="Body">
    <header>
      <van-nav-bar title="菜篮子" right-text="清空" @click-right="tap()" :fixed="true" />
    </header>
    <section>
      <!-- <van-nav-bar title="菜篮子" right-text="清空" @click-right="tap()" :fixed="true"/> -->
      <van-tabs @click="onClick" title-active-color="#FF0" sticky scrollTop="46px">
        <van-tab title="按菜品查看">
          <div class="nologin">
            <h2>经常买完菜回家，才发现忘了买葱？</h2>
            <p>(把菜谱中的原料放进菜篮子，买菜时就不会漏掉原料了)</p>
            <van-button type="warning" class="btn" to="Index">立即启用</van-button>
          </div>
         <!--  <div>
            <h3>
              <van-image
                width="50"
                height="50"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
                class="Image"
              />
              <p style="display:inline-block">鲜荷叶百合莲子粥</p>
              <span @click="remove()" style="color:#ff0">移出这个菜</span>
            </h3>
            <ul>
              <li>
                <van-row>
                  <van-col span="20">鲜荷叶</van-col>
                  <van-col span="4">2个</van-col>
                </van-row>
              </li>
              <li>
                <van-row>
                  <van-col span="20">鲜荷叶</van-col>
                  <van-col span="4">2个</van-col>
                </van-row>
              </li>
              <li>
                <van-row>
                  <van-col span="20">鲜荷叶</van-col>
                  <van-col span="4">2个</van-col>
                </van-row>
              </li>
              <li>
                <van-row>
                  <van-col span="20">鲜荷叶</van-col>
                  <van-col span="4">2个</van-col>
                </van-row>
              </li>
            </ul>
          </div>
          <div>
            <h3>
              <van-image
                width="50"
                height="50"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
                class="Image"
              />
              <p style="display:inline-block">鲜荷叶百合莲子粥</p>
              <span @click="remove()" style="color:#ff0">移出这个菜</span>
            </h3>
            <ul>
              <li>
                <van-row>
                  <van-col span="20">鲜荷叶</van-col>
                  <van-col span="4">2个</van-col>
                </van-row>
              </li>
              <li>
                <van-row>
                  <van-col span="20">鲜荷叶</van-col>
                  <van-col span="4">2个</van-col>
                </van-row>
              </li>
              <li>
                <van-row>
                  <van-col span="20">鲜荷叶</van-col>
                  <van-col span="4">2个</van-col>
                </van-row>
              </li>
              <li>
                <van-row>
                  <van-col span="20">鲜荷叶</van-col>
                  <van-col span="4">2个</van-col>
                </van-row>
              </li>
            </ul>
          </div>

          <div>
            <h3>
              <van-image
                width="50"
                height="50"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
                class="Image"
              />
              <p style="display:inline-block">鲜荷叶百合莲子粥</p>
              <span @click="remove()" style="color:#fafafa">移出这个菜</span>
            </h3>
            <ul>
              <li>
                <van-row>
                  <van-col span="20">鲜荷叶</van-col>
                  <van-col span="4">2个</van-col>
                </van-row>
              </li>
              <li>
                <van-row>
                  <van-col span="20">鲜荷叶</van-col>
                  <van-col span="4">2个</van-col>
                </van-row>
              </li>
              <li>
                <van-row>
                  <van-col span="20">鲜荷叶</van-col>
                  <van-col span="4">2个</van-col>
                </van-row>
              </li>
              <li>
                <van-row>
                  <van-col span="20">鲜荷叶</van-col>
                  <van-col span="4">2个</van-col>
                </van-row>
              </li>
            </ul>
          </div> -->
        </van-tab>

        <van-tab title="按材料查看">
         <h4>姜</h4>
          <ul>
            <li>
              <van-row>
                <van-col span="20">鲜荷叶</van-col>
                <van-col span="4">2个</van-col>
              </van-row>
            </li>
          </ul>
          <h4>水淀粉</h4>
          <ul>
            <li>
              <van-row>
                <van-col span="20">鲜荷叶</van-col>
                <van-col span="4">2个</van-col>
              </van-row>
            </li>
            <li>
              <van-row>
                <van-col span="20">鲜荷叶</van-col>
                <van-col span="4">2个</van-col>
              </van-row>
            </li>
          </ul>

            <h4>清水</h4>
          <ul>
            <li>
              <van-row>
                <van-col span="20">鲜荷叶</van-col>
                <van-col span="4">2个</van-col>
              </van-row>
            </li>
            <li>
              <van-row>
                <van-col span="20">鲜荷叶</van-col>
                <van-col span="4">2个</van-col>
              </van-row>
            </li>
             <li>
              <van-row>
                <van-col span="20">鲜荷叶</van-col>
                <van-col span="4">2个</van-col>
              </van-row>
            </li>
            <li>
              <van-row>
                <van-col span="20">鲜荷叶</van-col>
                <van-col span="4">2个</van-col>
              </van-row>
            </li>
          </ul>
        </van-tab>
      </van-tabs>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
export default {
  name: "shopbasket",
  data() {
    return {
    };
  },
  methods: {
    tap() {
      console.log("aa");
    },
    onClick(name, title) {
      this.$toast(title);
    },
    remove() {
      console.log(11);
    }
  }
};
</script>

<style scoped>
h3 {
  height: 50px;
  margin-left:5vw;
}
h3 span {
  margin-left: 100px;
}
.Image {
  float: left;
}
section li {
  height: 50px;
  background: #f5f1f1;
  margin: 10px 25px;
  line-height: 50px;
}

Body {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
section {
  flex: 1;
  overflow:auto;
  margin: 50px 0;
}
h4{
  height: 30px;
  line-height: 30px;
  margin-left:30px;
  font-size: 16px;
}
.nologin{
  width: 300px;
  height:200px;
  margin: 150px auto;

}
.nologin p{
  font-size: 16px;
  color: #afa9a9;
}
.btn{
  margin-left:100px;
}
</style>
