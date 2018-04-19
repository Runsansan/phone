
<template>
  <div id='seeinfo'>
    <x-header :right-options='{showMore: false}' @on-click-more='showMenus = false'>{{$route.meta.title}}</x-header>
    <div class='search'>
      <input type='text' placeholder='请输入员工姓名' class='search-inp'>
      <i class='iconfont icon-sousuo' ></i>
    </div>
  </div>
</template>
<style>
  *{margin:0;padding:0;}
  ul li{list-style:none;}
</style>

<script>
  import { XHeader, Actionsheet, TransferDom, ButtonTab, ButtonTabItem } from 'vux'

  export default {
    directives: {
      TransferDom
    },
    components: {
      XHeader,
      Actionsheet,
      ButtonTab,
      ButtonTabItem
    },
    data () {
      return {
        menus: {
          menu1: 'Take Photo',
          menu2: 'Choose from photos'
        }
      }
    },

    methods: {
    }
  }
</script>
