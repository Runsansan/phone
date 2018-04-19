<template>
  <!--<div class="tabbar">
    <div class="title">{{title}}</div>
  </div>-->
<div>
 <div id="name">
    <div>
        <div class="header-left" @click="backUp"><img src="../assets/bg-left.jpg" alt="" width="50" height="64"></div>
        <div class="header-name">{{$route.meta.title}}</div>
        <div class="header-right"><img src="../assets/bg-left.jpg" alt="" width="50" height="64"></div>
    </div>
 </div>
</div>


</template>
<style>
#name {
  background-color: #ff7900;
  height: 50px;
  position: fixed;
  width:100%;
  z-index:999;
}
/* .search {
  position: absolute;
  right: 5px;
  top: 5px;
  z-index: 999;
} */
.header-left,.header-name {
  margin: auto;
  color: rgb(26, 16, 16);
  line-height: 50px;
  font-size: 18px;
}
.header-left{
  width: 20px;
  margin-left: 10px;
  float: left;
  background: url('/assets/bg-left.jpg')no-repeat;
}
.header-name{
  width: 80%;
  float: left;
  text-align: center
}
.header-right{
  margin-top: 10px;
float: right;
margin-right: 10px;
}
</style>
<script>
import { Tabbar, TabbarItem } from 'vux'

export default {
  name: 'AppHeader',
  components: {
    Tabbar,
    TabbarItem
  },
  data () {
    return {
      title: '综合'
    }
  },
  methods: {
    resultClick (item) {
      alert('you click the result item: ' + JSON.stringify(item))
    },
    getResult (val) {
      this.results = val
    },
    backUp () {
      history.go(-1)
    }
  }
}
</script>
