<template>
  <div>
    <van-nav-bar
      title="阅读历史"
      left-arrow
      @click-left="onClickLeft"
      :fixed="true"
    />
    <div class="box">
      <div class="list" v-for="(item,i) in arr" :key="i" @click="goDetails(item.uid)">
          <van-image
            width="60"
            height="60"
            :src="item.pimg"
          />
        <span>{{item.pname}}</span>
      </div>
    </div>

  </div>
</template>

<script>
import app from "../api/api_pro"
  export default {
    name:'readhistory',
    data(){
      return{
          arr:[]
      }
    },
     methods: {
      onClickLeft() {
        this.$router.go(-1);
      },
      goDetails(uid){
        console.log(uid)
      }
     },
     mounted(){
       if(localStorage.getItem("history")){
         let ls = localStorage.getItem("history").split(",")
        ls.map((data)=>{
          console.log(data)
          app.product({uid:data}).then((data)=>{
            var res = data.data.pop()
            // console.log(res)
            this.arr.push(res)
          })
        })
       }
     }
  }
</script>

<style scoped>
.box{
  margin-top:46px;
  margin-left:10px
}
.list{
  margin-top:10px;
  display: flex;
  justify-content: start

}
.list span{
  margin-left:20px;
  margin-top:10px
}

</style>
