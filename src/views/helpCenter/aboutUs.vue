<template>
  <div id="agreenent">
    <x-header  :left-options="{showBack: true}">{{$route.meta.title}}</x-header>
    <cell title="联系我们" :link="{path:'/connectIndex'}"></cell>
    <cell title="平台规则" :link="{path:'/ruleIndex'}"></cell>
    <cell title="操作指南" :link="{path:'/operationIndex'}"></cell>
    <cell title="采购帮助" :link="{path:'/caiIndex'}"></cell>
    <cell title="供应帮助" :link="{path:'/gongIndex'}"></cell>
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
