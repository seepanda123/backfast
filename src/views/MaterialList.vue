<template>
  <div class="box1">
    <div class="left">
      <div class="x" @click="goback()">X</div>
      <div class="cai">
        <br>
        <div>材</div>
        <div>料</div>
      </div>
    </div>
    <div class="right">
      <ul>
        <li v-for="(list,i) in cailiao1">{{list}}<span>{{cailiao2[i]}}</span></li>
      </ul>
    </div>
  </div>
</template>


<script>
import api from "../api/api_pro"
export default {
  name:'MaterialList',
  data(){
    return{
      cailiao1:[],
      cailiao2:[]
    }
  },
  methods: {
    goback(){
      this.$router.back(-1)
    }
  },
  mounted() {
    if(localStorage.getItem("uid")){
      let uid = localStorage.getItem("uid")
      api.product({uid:uid}).then(data => {
      let title = data.data.pop();
      let list = data.data.reverse();
      for (let val of list) {
        if (val.pname) {
          this.cailiao1.push(val.pname.split(" ")[0]);
          this.cailiao2.push(val.pname.split(" ")[1]);
        }
      }
    });
    }
  },
}
</script>

<style>
  .left{
    height:100vh;
    width:20vw;
    border-right:1vw solid #eee;
    float: left;
  }
  .right{
    height:100vh;
    width:70vw;
    float: left;
  }
  .x{
    font-size:1rem;
    text-align: center;
  }
  .cai{
    text-align: center;
    font-size:20px;
  }
  .right ul{
    margin-top:1rem;
    padding-left:1rem;
  }
  .right li{
    line-height:1rem;
    font-size:14px
  }
  .right span{
    color:orangered;
    margin-left:.5rem
  }
</style>