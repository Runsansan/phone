<template>
  <div id="agreenent">
    <x-header  :left-options="{showBack: true}">{{$route.meta.title}}</x-header>
    <cell title="注册登录" :link="{path:'/registerloginG'}"></cell>
    <cell title="在线报价" :link="{path:'/online'}"></cell>
    <cell title="支付结算" :link="{path:'/paymentG'}"></cell>
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
