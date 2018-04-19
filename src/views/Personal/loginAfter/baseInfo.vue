<template>
  <div>
    <x-header  :left-options="{showBack: true}">{{$route.meta.title}}</x-header>
    <router-link :to="{path: '/modifyBaseInfo'}"><i class="iconfont icon-guanbi"></i></router-link>
    <div class="bcg">
      <div class="box">
        <div class="logo"><img src="../../../assets/img/huge.jpeg" alt=""></div>
      </div>
    </div>
    <div class="content">
      <div class="line">
        <label for="" class="ming">企业名称：</label>
        <span>{{baseInfo.companyName}}</span>
      </div>
      <div class="line">
        <label for="" class="ming">姓名：</label>
        <span>{{baseInfo.realName}}</span>
      </div>
      <div class="line">
        <label for="" class="ming">用户名/用户名账号：</label>
        <span>{{baseInfo.username}}</span>
      </div>
      <div class="line">
        <label for="" class="ming">手机号：</label>
        <span>{{baseInfo.mobilePhone}}</span>
      </div>
      <div class="line">
        <label for="" class="ming">工作电话：</label>
        <span>{{baseInfo.talPhone}}</span>
      </div>
      <div class="line">
        <label for="" class="ming">微信：</label>
        <span>{{baseInfo.talWeixin}}</span>
      </div>
      <div class="line">
        <label for="" class="ming">邮箱：</label>
        <span>{{baseInfo.talQq}}</span>
      </div>
      <div class="line">
        <label for="" class="ming">微博：</label>
        <span>{{baseInfo.talWeibo}}</span>
      </div>

    </div>
    <div class="savebtn">保存</div>
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
        baseInfo: {
          companyName: '',
          mobilePhone: '',
          photo: '',
          realName: '',
          talPhone: '',
          talQq: '',
          talWeibo: '',
          talWeixin: '',
          username: ''
        }
      }
    },
    mounted () {
      this.getInfo()
    },
    methods: {
      getInfo () {
        serviceHttp.getMemberBaseInfo('', (res) => {
          if (res.code === 0) {
            console.log(res.data)
            this.baseInfo.companyName = res.data.companyName
            this.baseInfo.realName = res.data.realName
            this.baseInfo.username = res.data.username
            this.baseInfo.mobilePhone = res.data.mobilePhone
            this.baseInfo.talPhone = res.data.talPhone
            this.baseInfo.talWeixin = res.data.talWeixin
            this.baseInfo.talQq = res.data.talQq
            this.baseInfo.talWeibo = res.data.talWeibo
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
</style>

