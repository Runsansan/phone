<template>
  <div>
    <x-header  :left-options="{showBack: true}">{{$route.meta.title}}</x-header>
    <i class="iconfont icon-guanbi"></i>
    <div class="bcg">
      <div class="box">
        <div class="logo"><img src="../../../assets/img/huge.jpeg" alt=""></div>
      </div>
    </div>
    <div class="content">
      <div class="line clearfix">
        <label for="" class="ming fl">企业名称：</label>
        <input class="fl" type="text" v-model="editBaseInfo.companyName">
      </div>
      <div class="line clearfix">
        <label for="" class="ming fl">工作电话：</label>
        <input class="fl" type="text" v-model="editBaseInfo.talPhone">
      </div>
      <div class="line clearfix">
        <label for="" class="ming fl">QQ：</label>
        <input class="fl" type="text" v-model="editBaseInfo.talQq">
      </div>
      <div class="line clearfix">
        <label for="" class="ming fl">微博：</label>
        <input class="fl" type="text" v-model="editBaseInfo.talWeibo">
      </div>
      <div class="line clearfix">
        <label for="" class="ming fl">微信：</label>
        <input class="fl" type="text" v-model="editBaseInfo.talWeixin">
      </div>
    </div>
    <div class="savebtn" @click="editInfo()">修改</div>
  </div>
</template>
<script>
  import {XHeader, Cell} from 'vux'
  import serviceHttp from '../../../api/service'
  export default {
    components: {
      XHeader,
      Cell
    },
    data () {
      return {
        editBaseInfo: {
          companyName: '1111',
          talPhone: '029-88886666',
          talQq: 'QQQ',
          talWeibo: '微博',
          talWeixin: '微信'
        }
      }
    },
    mounted () {
    //  this.getInfo()
      console.log(this.editBaseInfo)
    },
    methods: {
      editInfo () {
        console.log(this.editBaseInfo)
        serviceHttp.updateBaseInfo(this.editBaseInfo, (res) => {
          if (res.code === 0) {
            alert('修改成功')
            location.href = '/baseInfo'
          }
        })
      }
    }
  }
</script>
<style scoped>
  .icon-guanbi{color:#fff;font-size:24px;position:absolute;top:10px;right:15px;}
  .icon-gerenzhongxin{position:absolute;right:5px;top:50px;}
  .size{font-size:24px;color:#ff7900;margin-right:8px;padding-left:10px;}
  .bcg{}
  .bcg .box{}
  .bcg .box .logo{width:54px;height:54px; margin:0 auto; margin-top:69px; }
  .bcg .box .logo img{width:100%;height:100%;border-radius:50%;}
  .line{height:32px;line-height:32px;font-size:14px;}
  .content{padding:0 44px;margin-bottom:80px;margin-top:7px;}
  .ming{display:inline-block;width:135px;text-align:right;}
  .savebtn{width:120px;height:40px;line-height:40px;margin:0 auto;text-align:center;background:#ff7900;color:#fff;border-radius:3px;font-size:14px; }
  .line input{width:140px;height:32px;font-size:14px;display:inline-block;border:none;}
</style>


