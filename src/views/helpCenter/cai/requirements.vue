
<template>
  <div id="agreenent">
    <x-header  :left-options="{showBack: true}">{{$route.meta.title}}</x-header>
    <p class="txt">
      1、为什么无法发布需求？<br/>
      只有采购商才可以发布需求。<br/>

      无发布权限。这种情况请联系企业管理员，开通采购权限即可进行发布。<br/>

      2、为什么需求被拒绝？<br/>
      用户发布的需求被拒绝的原因有以下几种可能：<br/>

      1）发布的信息内容违规。这种情况请核查发布的信息，重新发布。<br/>

      2）发布虚假信息，误导其他用户。这种情况请核查发布的信息，重新发布。

      （信息发布规则、采购商操作手册）<br/>

      3、为什么发布的需求不显示？<br/>
      用户发布的需求不显示的原因有以下几种可能：<br/>

      1）发布的需求正在审核。这种情况请稍后再查看发布的需求。<br/>

      2）发布的需求被拒绝。发布的需求不符合佰采网平台规范，这种情况请重新发布。
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

