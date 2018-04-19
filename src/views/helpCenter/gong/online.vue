

<template>
  <div id="agreenent">
    <x-header  :left-options="{showBack: true}">{{$route.meta.title}}</x-header>
    <p class="txt">
      在线报价

    </p>
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
<style scoped>
  .txt{
    font-size: 14px;
    color: #666666;
    line-height: 30px;
    padding:20px 15px 0 35px;
  }
</style>
