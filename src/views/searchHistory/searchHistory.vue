<template>
  <div style="height:100%;">
      <div class="head clearfix">
          <div class="headleft fl" @click="backBefore"><</div>
          <div class="fl rel">
            <input type="text" class="searchInp" placeholder="搜产品/供应商" >
            <i class="iconfont icon-sousuo2"></i>
          </div>
      </div>
      <div class="content1">
          <div class="conHistory">历史搜索</div>
          <div class="conHistoryBox clearfix">
              <div class="conHistoryInfo">上海瑞奇工具股份有限公司</div>
              <div class="conHistoryInfo">PC管</div>
              <div class="conHistoryInfo">上海瑞奇有限公司</div>
              <div class="conHistoryInfo">上海瑞奇工具股份有限公司</div>
              <div class="conHistoryInfo">PC管</div>
              <div class="conHistoryInfo">PC管</div>
              <div class="conHistoryInfo">PC管</div>
          </div>
          <div class="clearHistory">清除历史搜索</div>
        <div class="conHistory">热门搜索</div>
        <div class="conHistoryBox clearfix">
          <div class="conHistoryInfo">上海瑞奇工具股份有限公司</div>
          <div class="conHistoryInfo">PC管</div>
          <div class="conHistoryInfo">上海瑞奇有限公司</div>
          <div class="conHistoryInfo">上海瑞奇工具股份有限公司</div>
          <div class="conHistoryInfo">PC管</div>
          <div class="conHistoryInfo">PC管</div>
          <div class="conHistoryInfo">PC管</div>
        </div>
      </div>

  </div>
</template>
<script>
  export default {
    data () {
      return {}
    },
    methods: {
      backBefore () {
        history.go(-1)
      }
    }
  }
</script>
<style >

  html,body{width:100%;height:100%;}
  .head .rel{position: relative;}
  .head{width:100%;height:44px;line-height:44px;background:#cdcdcd;}
  .head .headleft{width:68px;text-align:center;color:#6b6b6b;font-size: 30px;}
  .head .searchInp{width:245px;height:30px;font-size:16px;padding-left:16px;}
  .icon-sousuo2{font-size:16px;color:#666;position: absolute;right:20px;top:0px;}
  .content1{width:90%;height:94%;background:#f0f0f0;padding-left:20px;padding-right:20px;}
  .content1 .conHistory{color:#101010;font-size:14px;height:53px;line-height:53px;}
  .content1 .conHistoryBox .conHistoryInfo{height:28px;line-height:28px;float:left;
            margin:0 24px 20px 0;padding:0 10px;background:#fff;}
  .content1 .clearHistory{width:150px;height:32px;line-height:32px;text-align: center;
            border:solid 1px #6e6e6e;border-radius:15px;margin:10px auto 20px auto;}
  .weui-tab__panel{padding-bottom:0;}

</style>
