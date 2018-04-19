
<template>
  <div id="agreenent">
    <x-header  :left-options="{showBack: true}">{{$route.meta.title}}</x-header>
    <p class="txt">
      为什么无法登录网站？<br>
      用户不能登录网站的原因有以下几种可能：<br>

      1）登录时输入的“用户名或手机号”、 “密码”有错误。这种情况请检查用户名和密码，也可以“找回密码”，重试登录。<br>

      2）账号被注销。这种情况请联系企业管理员。<br>

      3）账号被冻结。这种情况请联系企业管理员。
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
