<template>
  <div class="Body">
    <header>
      <van-nav-bar title="菜篮子" right-text="清空" @click-right="tap()" :fixed="true" />
    </header>
    <section>
      <!-- <van-nav-bar title="菜篮子" right-text="清空" @click-right="tap()" :fixed="true"/> -->
      <van-tabs @click="onClick" title-active-color="#FF0" sticky scrollTop="46px">
        <van-tab title="按菜品查看">
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
          </div>
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
      active: 0
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
  height: 100px;
  margin-left:5vw;
}
h3 span {
  margin-left: 150px;
}
.Image {
  float: left;
  padding: 5px;
}
section li {
  height: 100px;
  background: #f5f1f1;
  margin: 10px 25px;
  line-height: 100px;
}

Body {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
section {
  flex: 1;
  overflow:auto;
  margin: 46px 0;
}
h4{
  height: 40px;
  line-height: 40px;
  margin-left:30px;
}
</style>
