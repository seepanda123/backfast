<template>
  <div class="Body">
    <header>
      <van-nav-bar title="菜篮子" right-text="清空" @click-right="tap()" :fixed="true"/>

    </header>
    <section>
<!-- <van-nav-bar title="菜篮子" right-text="清空" @click-right="tap()" :fixed="true"/> -->
        <van-tabs @click="onClick" title-active-color="#FF0" sticky scrollTop= 46px >
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
                <van-row gutter="20">
                  <van-col span="8">鲜荷叶</van-col>
                  <van-col span="8"></van-col>
                  <van-col span="8">2个</van-col>
                </van-row>
              </li>
              <li>
                <van-row gutter="20">
                  <van-col span="8">鲜荷叶</van-col>
                  <van-col span="8"></van-col>
                  <van-col span="8">2个</van-col>
                </van-row>
              </li>
              <li>
                <van-row gutter="20">
                  <van-col span="8">鲜荷叶</van-col>
                  <van-col span="8"></van-col>
                  <van-col span="8">2个</van-col>
                </van-row>
              </li>
              <li>
                <van-row gutter="20">
                  <van-col span="8">鲜荷叶</van-col>
                  <van-col span="8"></van-col>
                  <van-col span="8">2个</van-col>
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
                <van-row gutter="20">
                  <van-col span="8">鲜荷叶</van-col>
                  <van-col span="8"></van-col>
                  <van-col span="8">2个</van-col>
                </van-row>
              </li>
              <li>
                <van-row gutter="20">
                  <van-col span="8">鲜荷叶</van-col>
                  <van-col span="8"></van-col>
                  <van-col span="8">2个</van-col>
                </van-row>
              </li>
              <li>
                <van-row gutter="20">
                  <van-col span="8">鲜荷叶</van-col>
                  <van-col span="8"></van-col>
                  <van-col span="8">2个</van-col>
                </van-row>
              </li>
              <li>
                <van-row gutter="20">
                  <van-col span="8">鲜荷叶</van-col>
                  <van-col span="8"></van-col>
                  <van-col span="8">2个</van-col>
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
                <van-row gutter="20">
                  <van-col span="8">鲜荷叶</van-col>
                  <van-col span="8"></van-col>
                  <van-col span="8">2个</van-col>
                </van-row>
              </li>
              <li>
                <van-row gutter="20">
                  <van-col span="8">鲜荷叶</van-col>
                  <van-col span="8"></van-col>
                  <van-col span="8">2个</van-col>
                </van-row>
              </li>
              <li>
                <van-row gutter="20">
                  <van-col span="8">鲜荷叶</van-col>
                  <van-col span="8"></van-col>
                  <van-col span="8">2个</van-col>
                </van-row>
              </li>
              <li>
                <van-row gutter="20">
                  <van-col span="8">鲜荷叶</van-col>
                  <van-col span="8"></van-col>
                  <van-col span="8">2个</van-col>
                </van-row>
              </li>
            </ul>
          </div>
</van-tab>

        <van-tab title="按材料查看">闪电风暴风格不符规范规划发广告符合你规范那个号发过火
           <ul>
              <li>
                <van-row gutter="20">
                  <van-col span="8">鲜荷叶</van-col>
                  <van-col span="8"></van-col>
                  <van-col span="8">2个</van-col>
                </van-row>
              </li>
              <li>
                <van-row gutter="20">
                  <van-col span="8">鲜荷叶</van-col>
                  <van-col span="8"></van-col>
                  <van-col span="8">2个</van-col>
                </van-row>
              </li>
              <li>
                <van-row gutter="20">
                  <van-col span="8">鲜荷叶</van-col>
                  <van-col span="8"></van-col>
                  <van-col span="8">2个</van-col>
                </van-row>
              </li>
              <li>
                <van-row gutter="20">
                  <van-col span="8">鲜荷叶</van-col>
                  <van-col span="8"></van-col>
                  <van-col span="8">2个</van-col>
                </van-row>
              </li>
            </ul>
        </van-tab>
        </van-tabs>

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
    remove(){
      console.log(11)
    }
  }
};
</script>

<style scoped>
li {
  height: 100px;
}
.Image {
  float: left;
  padding: 25px;
}
section ul {
  margin-top: 5vh;
}
section li {
  margin-left: 5vw;
}
Body{
  height:100vh;
  display: flex;
  flex-direction: column;
  }
  section{
    flex:1;
    overflow: hidden;
    margin-top:46px;
  }
 .tab{position: relative;
    top: 46px;}

</style>
