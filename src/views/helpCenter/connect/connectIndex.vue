<template>
  <div id="agreenent">
    <x-header  :left-options="{showBack: true}">{{$route.meta.title}}</x-header>
    <cell title="关于我们" :link="{path:'/self'}"></cell>
    <cell title="企业文化" :link="{path:'/culture'}"></cell>
    <cell title="招贤纳士" :link="{path:'/recruit'}"></cell>
    <cell title="联系我们" :link="{path:'/connectUs'}"></cell>
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
