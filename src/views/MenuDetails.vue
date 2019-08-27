<template>
  <div>
    <header>
      <van-nav-bar title="标题" left-arrow @click-left="onClickLeft" :fixed="true" />
    </header>
    <section>
      <div>
         <van-image :src="pimg" />
         <h4>{{pname}}</h4>
         <p>{{pdesc}}</p>
      </div>
      <div>
         <van-image src="https://img.yzcdn.cn/vant/cat.jpeg" />
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
import axios from 'axios'
export default {
  name: "menudetails",
  data(){
   return {
     pname:'',
     pimg:"",
     pdesc:""
   }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  },
   mounted() {
    axios({
      url:"http://jx.xuzhixiang.top/ap/api/productlist.php",
      params:{uid:9000008}
    }).then((data)=>{
      // console.log(data.data.data[data.data.data.length-1])
      // var str=data.data.data[data.data.data.length-1]
      var str=data.data.data.pop()
      this.pname=str.pname
      this.pimg=str.pimg
      this.pdesc=str.pdesc
    })
  },

};
</script>

<style scoped>
section div{
  width:100vw;
 margin-top:2vw;
}
.van-image{
   width:92vw;
  height:200px;
   margin-left:4vw;
}
h4,p{
  width:92vw;
  margin-left:4vw;
}

</style>
