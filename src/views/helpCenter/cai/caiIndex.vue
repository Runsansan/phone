<template>
  <div id="agreenent">
    <x-header  :left-options="{showBack: true}">{{$route.meta.title}}</x-header>
    <cell title="注册登录" :link="{path:'/registerlogin'}"></cell>
    <cell title="发布需求" :link="{path:'/requirements'}"></cell>
    <cell title="审批管理" :link="{path:'/approval'}"></cell>
    <cell title="支付结算" :link="{path:'/payment'}"></cell>
  </div>
</template>
<script>
  import {XHeader, Cell} from 'vux'
  export default {
    components: {
      XHeader,
      Cell
    },
    data () {
      return {
      }
    }
  }
</script>
<style>

</style>
