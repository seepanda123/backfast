<template>
  <div class="box">
    <van-nav-bar title="菜谱详情" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
      <van-icon name="star-o" slot="right" />
    </van-nav-bar>
    
    <div class="item">

      <van-image
        width="100vw"
        height="10rem"
        fit="cover"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />

      <br>
      <p class="title">红烧鸡肉香菇</p>

      <p  class="detail">hsdhunvnx eruighjknvadgioeh  djfiajgeg zlbjresjt哈二哈吧恐惧症虐女不方便 发大水比扔了等不及了客人辅导班结了婚十多个更可爱人物io h</p>
      

      <van-nav-bar
        left-text="材料"
        right-text="加入菜篮子"
        @click-right="addshop"
      />

      <van-cell-group>
        <div @click="mat()">
          <van-cell title="单元格" value="内容" value-class="con" />
        <van-cell title="单元格" value="内容" value-class="con"/>
        </div>
        
      </van-cell-group>


      <p class="title">—— <span>烹饪步骤</span> ——</p>

      <div class="mintit">点击步骤进入烹饪模式</div>


      <dl>
        <dt>1</dt>
        <dd>
          <van-image
            width="80vw"
            height="10rem"
            fit="cover"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
          <p class="mintit1">就俩二胡阿喝过框架的功课是哦帅得很吧价格为霍芳芳;</p>
        </dd>
      </dl>
      <dl>
        <dt>2</dt>
        <dd>
          <van-image
            width="80vw"
            height="10rem"
            fit="cover"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
          <p class="mintit1">就俩二胡阿喝过框架的功课是哦帅得很吧价格为霍芳芳;</p>
        </dd>
      </dl>

      <p class="title">—— <span>小贴士</span> ——</p>

      <p  class="detail">hsdhunvnx eruighjknvadgioeh  djfiajgeg zlbjresjt哈二哈吧恐惧症虐女不方便 发大水比扔了等不及了客人辅导班结了婚十多个更可爱人物io h</p>
    </div>

  </div>
</template>


<script>
export default {
  name:'Details',
  methods: {
    onClickLeft(){
      this.$router.go(-1);
    },
    onClickRight(){
      console.log(22)
      // 调接口 添加到 收藏列表
    },
    addshop(){
      console.log(33)
      // 调接口 添加到 菜篮子
    },
    mat(){
      this.$router.push("MaterialList")
    }
  },
}
</script>

<style>
  .item{
    overflow: auto;
  }

  .box{
    display:flex;
    flex-direction: column;
    height:100vh;
  }
  .title{
    text-align: center
  }
  .detail{
    padding: 0 1rem;
  }
  .detail{
    line-height:2rem;
    font-size:.8rem;
  }
  .con{
    margin-right:3rem;
  }
  .mintit{
    font-size:.8rem;
    color: #333;
    text-align: center
  }
  .mintit1{
    font-size:.9rem;
    color: #333;
    margin-right:2rem;
  }
  dl{
    display: flex
  }
  dt{
    font-size:1.3rem;
  }
  .van-nav-bar__left .van-nav-bar__text{
    font-size:1.3rem;
    color: black
  }
  .van-nav-bar__right .van-nav-bar__text{
    color: orange
  }
</style>