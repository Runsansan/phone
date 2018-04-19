<template>
  <div>
    <x-header  :left-options="{showBack: true}">{{$route.meta.title}}</x-header>
    <div class="bcg">
      <div class="box">
        <div class="logo"><img src="../../../assets/img/huge.jpeg" alt=""></div>
      </div>
      <router-link class="txtHead" to="/demo">小百</router-link>
      <p>逸翠园改建项目</p>
      <p>陕西鹰购网络有限公司</p>
      <i class="iconfont icon-gerenzhongxin fl"></i>
    </div>
    <div class="content">
      <div class="line clearfix">
        <i class="iconfont icon-xiangmu fl"></i>
        <span class="fl"><router-link :to="{path:'/projectmanagement'}">项目管理</router-link> </span>
      </div>
      <div class="line clearfix">
        <i class="iconfont icon-yuangong fl"></i>
        <span class="fl">员工管理</span>
      </div>
      <div class="line clearfix">
        <i class="iconfont icon-caigou-tianchong fl"></i>
        <span class="fl">采购管理</span>
      </div>
      <div class="line clearfix">
        <i class="iconfont icon-shenpi fl"></i>
        <span class="fl">审批管理</span>
      </div>
      <div class="line clearfix">
        <i class="iconfont icon-caiwu fl"></i>
        <span class="fl">财务管理</span>
      </div>
      <div class="line clearfix">
        <i class="iconfont icon-stock fl"></i>
        <span class="fl">库存管理</span>
      </div>
      <div class="line clearfix">
        <i class="iconfont icon-ershoushebei fl"></i>
        <span class="fl">二手管理</span>
      </div>
      <div class="line clearfix">
        <i class="iconfont icon-lishijilu fl"></i>
        <span class="fl">浏览历史</span>
      </div>
      <div class="line clearfix">
        <i class="iconfont icon-msnui-collection fl"></i>
        <span class="fl">我的收藏</span>
      </div>
      <div class="line clearfix">
        <i class="iconfont icon-kefu fl"></i>
        <span class="fl">在线客服</span>
      </div>
      <div class="line clearfix">
        <i class="iconfont icon-yijianfankui1 fl"></i>
        <span class="fl">意见反馈</span>
      </div>
      <div class="line clearfix">
        <i class="iconfont icon-guanyuwomen fl"></i>
        <span class="fl">关于我们</span>
      </div>
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
  .icon-gerenzhongxin{position:absolute;right:5px;top:50px;}
  .iconfont{font-size:24px;color:#ff7900;margin-right:8px;}
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
  .content{padding:0 10px;background:#fff;}
  .line{height:33px;line-height:33px;font-size:14px;border-bottom:solid 1px #aeaeae;padding-top:10px;}
</style>
