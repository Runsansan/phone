<template>
<div id="fontPassword">
  <x-header  :left-options="{showBack: true}">{{$route.meta.title}}</x-header>
  <div class="forgetPsdbox">
    <div class="phone">
      <label for="">&nbsp;&nbsp;&nbsp;手机号</label>
      <span class="num">{{psdNext.phonenumber}}</span>
    </div>
    <div class="phone">
      <label for="">设置密码</label>
      <input class="phoneInp" type="text" placeholder="请输入密码" v-model="psdNext.password" @keyup="checkPassword"/>
      <i class="iconfont icon-cuowu1" v-show="isShow" v-model="isShow"></i>
    </div>
    <div class="code">
      <label for="">确认密码</label>
      <input class="codeInp" type="text"  placeholder="请再次输入密码" v-model="newpassword" @keyup="confirmPassword"/>
      <i class="iconfont icon-cuowu1" v-show="isShow1" v-model="isShow1"></i>
    </div>
    <div class="nextBtn" @click="confirm()">确认</div>
  </div>
</div>
</template>
<script>
  import { XHeader } from 'vux'
  import serviceHttp from '../../api/service'
  export default {
    name: 'hello',
    components: {
      XHeader
    },
    data () {
      return {
        isShow: false,
        isShow1: false,
        psdNext: {
          phonenumber: '',
          password: '',
          verificationCode: ''
        },
        newpassword: ''
      }
    },
    mounted () {
      this.psdNext.phonenumber = this.$route.query.phoneName
      this.psdNext.verificationCode = this.$route.query.codeName

      console.log(this.psdNext.phonenumber + '=========' + this.psdNext.verificationCode)
    },
    methods: {
      checkPassword () {
        var reg = /^[a-zA-Z][a-zA-Z0-9]*$/
        var psd = this.psdNext.password
        if (psd === '') {
          this.isShow = true
          return false
        }
        if (!psd.match(reg)) {
          this.isShow = true
        } else {
          this.isShow = false
        }
      },
      confirmPassword () {
        var reg = /^[a-zA-Z][a-zA-Z0-9]*$/
        var psd = this.psdNext.password
        var psd2 = this.newpassword
//        console.log(psd+'---'+psd2)
        if (psd === '') {
          this.isShow1 = true
          return false
        }
        if (!psd.match(reg)) {
          this.isShow1 = true
        } else {
          if (psd !== psd2) {
            this.isShow1 = true
          } else {
            this.isShow1 = false
          }
        }
      },
      confirm () {
        this.checkPassword()
        this.confirmPassword()
        let dataStas = this.psdNext
        serviceHttp.indexChangePassword(dataStas, (res) => {
          if (res.code === 0) {
            location.href = '/homePageView'
          }
        }
        )
      }
    }
  }
</script>
<style scoped>
    .num{margin-left:17px;}
    .icon-cuowu1{color:red;font-size:20px;position:absolute;right:25px;top:12px;}
    .forgetPsdbox{width:310px;height:184px;margin:120px auto 0 auto;}
    .forgetPsdbox .phone{margin-bottom:23px;position:relative;}
    .forgetPsdbox .code{margin-bottom:28px;position:relative;}
    .forgetPsdbox label{font-size:16px;color:#333;}
    .phoneInp,.codeInp{width:200px;height:38px;border:solid 1px #a1a1a1;font-size:14px;color:#333;padding-left:10px;margin-left:17px;}
    .nextBtn{width:272px;height:40px;line-height:40px;border-radius:3px;text-align:center;background:#ff7900;color:#fff;font-size:16px;}
    .countdown{position:absolute;right:10px;top:13px;font-size:14px;color:#ff7900; }
</style>
