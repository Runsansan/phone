<template>
  <div id="agreenent">
    <x-header  :left-options="{showBack: true}">{{$route.meta.title}}</x-header>
    <a href='Download/explain/采购商操作手册v1.0.1.docx' target='_blank'>点击下载采购商操作手册</a><br><br>
    <a href="Download/explain/采购商操作手册v1.0.1.docx" target="_blank">点击下载供应商操作手册</a>
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
