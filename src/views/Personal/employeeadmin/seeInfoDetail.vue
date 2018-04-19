<template>
  <div>
    <x-header :right-options='{showMore: false}' @on-click-more='showMenus = false'>{{$route.meta.title}}</x-header>
    <div class="box">
      <div class="head">
        <div class="logo">
          <div class="imgPre"><img src='../../../assets/img/huge.jpeg' alt=''></div>
        </div>
        <div class="name">胡歌</div>
        <div class="state clearfix">
          <div class="del fl">项目经理</div>
          <div class="del fl">项目经理</div>
        </div>
      </div>

      <div class="con">
        <div class="line clearfix">
          <label class="fl" for="">对应项目：</label>
          <span class="fl txt"> 逸翠园道理改建</span>
        </div>
        <div class="line clearfix">
          <label class="fl" for="">对应项目：</label>
          <span class="fl txt"> 逸翠园道理改建</span>
        </div>
        <div class="line clearfix">
          <label class="fl" for="">账号：</label>
          <span class="fl txt"> 12346*/8768979</span>
        </div>
      </div>
    </div>


  </div>
</template>
<script>
  import {XHeader} from 'vux'
  export default {
    components: {
      XHeader
    }
  }
</script>
<style scoped>
  .box{padding:0 19px;}
  .head{padding-top:50px;border-bottom:solid 1px #bbbbbb}
  .imgPre{width:50px;height:50px;margin:0 auto}
  .imgPre img{width:100%;height:100%;border-radius:50%;}
  .name{height:39px;line-height:39px;text-align:center;font-size:14px;color:#101010;}
  .state{height:25px;padding-left:60px;margin-bottom:16px;}
  .del{width:82px;text-align:center;height:25px;padding:0 12px;line-height:25px;background: #ededed;margin-right:20px;}
  .con{padding-top:12px;padding-left:74px;font-size:14px;}
  .con .line{width:100%;height:35px;line-height:35px;}
  .con .line label{width:75px;text-align:right}
  .con .line .txt{padding-left:15px;}
</style>
