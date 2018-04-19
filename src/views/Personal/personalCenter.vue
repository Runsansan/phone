<template>
  <div>
    <x-header  :left-options="{showBack: true}">{{$route.meta.title}}</x-header>
    <i class="iconfont icon-guanbi"></i>
    <div class="content">
      <router-link :to="{path: '/baseInfo'}">
        <div class="line clearfix">
            <i class="size iconfont icon-jibenxinxi fl"></i>
            <span class="fl">基本信息</span>
        </div>
      </router-link>
      <router-link :to="{path: '/homePageView'}">
        <div class="line clearfix">
          <i class="size iconfont icon-qiyexinxi fl"></i>
          <span class="fl">企业信息</span>
        </div>
      </router-link>
      <router-link :to="{path: '/homePageView'}">
        <div class="line clearfix">
          <i class="size iconfont icon-xiugaimima fl"></i>
          <span class="fl">修改密码</span>
        </div>
      </router-link>
      <router-link :to="{path: '/homePageView'}">
        <div class="line clearfix">
          <i class="size iconfont icon-phone fl"></i>
          <span class="fl">修改手机</span>
        </div>
      </router-link>
      <router-link :to="{path: '/homePageView'}">
        <div class="line clearfix">
          <i class="size iconfont icon-youxiang fl"></i>
          <span class="fl">修改邮箱</span>
        </div>
      </router-link>
    </div>
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
  .icon-guanbi{color:#fff;font-size:24px;position:absolute;top:10px;right:15px;}
  .icon-gerenzhongxin{position:absolute;right:5px;top:50px;}
  .size{font-size:24px;color:#ff7900;margin-right:8px;padding-left:10px;}
  .bcg{background:#c9c9c9;height:150px;}
  .bcg .box{height:76px;position:relative;}
  .bcg .box .logo{width:54px;height:54px; position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
  .bcg .box .logo img{width:100%;height:100%;border-radius:50%;}
  .bcg p{line-height:20px;font-size:14px;color:#333;text-align:center;}
  .bcg .txtHead{font-size:16px;font-weight:600;margin-bottom:5px;display:block;text-align:center;}
  .content{padding:10px 10px 0 10px;background:#fff;}
  .line{height:33px;line-height:33px;font-size:14px;border-bottom:solid 1px #aeaeae;padding-top:10px;}
</style>
