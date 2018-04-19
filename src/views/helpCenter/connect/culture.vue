
<template>
  <div id="agreenent">
    <x-header  :left-options="{showBack: true}">{{$route.meta.title}}</x-header>
    <p class="txt">
      使命 : 做老板放心的平台<br/><br/>

      愿景 : 打造百年鹰购 实现共享共赢<br/><br/>

      价值观 : 成就客户 变革创新 正气凛然
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
    line-height: 25px;
    padding:20px 15px 0 35px;
  }
</style>
