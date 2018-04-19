<template>
  <div id="agreenent">
    <x-header  :left-options="{showBack: true}">{{$route.meta.title}}</x-header>
    <cell title="信息发布规则" :link="{path:'/information'}"></cell>
    <cell title="交易管理规范" :link="{path:'/transaction'}"></cell>
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
