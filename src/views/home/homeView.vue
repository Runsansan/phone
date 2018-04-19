<template>
<div id="indexs">
 <div style="height:100%;">
   <view-box ref="viewBox">
     <!-- <x-header :left-options="{backText: ''}" id="test2">{{$route.meta.title}}</x-header> -->
     <router-view class="routers-view"></router-view>
    <actionsheet v-model="show" :menus="menu" theme="android">
    </actionsheet>
   </view-box>

   <tabbar>
      <tabbar-item   link="/homePageView" >
        <img slot="icon" src="../../assets/img/icon/shouye.png" >
        <img slot="icon-active" src="../../assets/img/icon/shouye1.png" >
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item  link="/classificationView">
       <img slot="icon" src="../../assets/img/icon/fenlei1.png" >
        <img slot="icon-active" src="../../assets/img/icon/fenlei.png" >
         <span slot="label">分类</span>
      </tabbar-item>
      <tabbar-item v-model="show" @on-item-click="test1">
        <img slot="icon" src="../../assets/img/icon/jia1.png" >
        <img slot="icon-active" src="../../assets/img/icon/jia.png" >
      </tabbar-item>
      <tabbar-item link="/message" show-dot>
        <img slot="icon" src="../../assets/img/icon/xiaoxi1.png" >
        <img slot="icon-active" src="../../assets/img/icon/xiaoxi.png" >
        <span slot="label">消息</span>
      </tabbar-item>
      <tabbar-item link="/loginAfterIndex">
        <img slot="icon" src="../../assets/img/icon/wode.png" >
        <img slot="icon-active" src="../../assets/img/icon/wode1.png" >
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
 </div>



</div>
</template>
<script>
import {
  Search,
  Tabbar,
  TabbarItem,
  Group,
  Cell,
  ViewBox,
  XHeader,
  XSwitch,
  TransferDom,
  Actionsheet,
  Toast
} from 'vux'
import AppHeader from '../../components/header.vue'
export default {
  components: {
    Actionsheet,
    Tabbar,
    Toast,
    TabbarItem,
    Group,
    Cell,
    Search,
    ViewBox,
    AppHeader,
    XHeader,
    XSwitch
  },
  directives: {
    TransferDom
  },
  data () {
    return {
      value: '',
      show: false,
      menu: {
        menu1: '发布需求',
        menu2: '发布二手'
      }
    }
  },
  created: function () {},
  mounted () {},
  methods: {
    onFocus () {
      console.log('oiu')
    },
    test1 (index) {
      this.show = true
    },
    onCancel () {
      console.log('oiu')
    },
    onSubmit () {
      console.log('oiu')
    },
    resultClick () {
      console.log('oiu')
    },
    getResult () {
      console.log('oiu')
    }
  }
}
</script>
<style  lang="less">
@import "~vux/src/styles/reset.less";
html,
body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
</style>
