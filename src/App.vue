<template>
     <div style="height:100%;"  id="app">
       <view-box ref="viewBox">
         <!-- <x-header :left-options="{backText: ''}" id="test1" ref="mybox">{{$route.meta.title}}</x-header> -->
         <router-view v-wechat-title='$route.meta.title' img-set="/static/logo.png" class=""></router-view>
         <tabbar slot="bottom"></tabbar>
       </view-box>
      </div>
    <!-- <router-view v-wechat-title='$route.meta.title'></router-view> -->
</template>

<script>
import { ViewBox, Scroller, XHeader, Tabbar } from 'vux'
// import globalVariable from './global/index'
import 'lib-flexible'
export default {
  name: 'app',
  components: {
    ViewBox,
    Scroller,
    XHeader,
    Tabbar
  },
  data () {
    return {
      tittleValue: ''
    }
  },
  mounted: function () {
    // this.tittleValue = this.$route.meta.title
    console.log(this.$route.meta.title)
  }
}
</script>

<style lang="less">

  html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }
body {
  background-color: #fbf9fe;
  margin: 0;
}
.vuxs-header{
  z-index: 9999;
  width: 100%;
  position: fixed!important;
}
</style>
