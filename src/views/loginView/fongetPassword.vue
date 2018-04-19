<template>
<div id="fontPassword">
  <x-header  :left-options="{showBack: true}">{{$route.meta.title}}</x-header>
  <div class="forgetPsdbox">
      <div class="phone">
        <label for="">手机号</label>
        <input class="phoneInp" type="text" placeholder="请输入手机号"  @keyup="checkPhone()"v-model="password.phone"/>
        <i class="iconfont icon-cuowu1" v-show="isShow" v-model="isShow"></i>
      </div>
      <div class="code">
        <label for="">验证码</label>
        <input class="codeInp" type="text" v-model="password.code" @keyup="checkCode()" placeholder="请输入验证码"/>
        <i class="iconfont icon-cuowu1" v-show="isShow1" v-model="isShow1"></i>
        <div class="countdown">
          <span v-show="show" @click="getCode">获取验证码</span>
          <span v-show="!show" class="count">{{count}}S后重新获取</span>
        </div>
      </div>
      <div class="nextBtn" @click="next()">下一步</div>
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
        password: {
          phone: '',
          code: ''
        },
        show: true,
        count: '',
        timer: null,
        isShow: false,
        isShow1: true

      }
    },
    methods: {
      cutDown () {
        const TIME_COUNT = 60
        if (!this.timer) {
          this.count = TIME_COUNT
          this.show = false
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT) {
              this.count--
            } else {
              this.show = true
              clearInterval(this.timer)
              this.timer = null
            }
          }, 1000)
        }
      },
      checkPhone () {
        var phone = this.password.phone
        var reg = /^[1][3,4,5,6,7,8][0-9]{9}$/
        if (isNaN(phone)) {
          this.isShow = true
          return false
        }
        if (phone === '') {
          this.isShow = true
          return false
        }
        if (phone.length !== 11) {
          this.isShow = true
          return false
        }
        if (!phone.match(reg)) {
          this.isShow = true
        } else {
          this.isShow = false
          serviceHttp.indexIfExistMemberByPhone('?phonenumber=' + phone, (res) => {
            if (res.code === 0) {
//              alert(res.message)
            }
          })
        }
      },
      getCode () {
        this.checkPhone()
        serviceHttp.indexSendVerifySMS('?phonenumber=' + this.password.phone, (res) => {
          if (res.code === 0) {
            alert('发送成功')
            this.cutDown()
          } else {
            alert('发送失败')
          }
        })
      },
      checkCode () {
        var code = this.password.code
        if (code === '') {
          this.isShow1 = true
          return false
        }
        if (code.length !== 6) {
          this.isShow1 = true
        } else {
          this.isShow1 = false
        }
      },
      next () {
        let phone = this.password.phone
        let code = this.password.code
        this.checkPhone()
        this.checkCode()
        serviceHttp.indexVerifySMS('?phonenumber=' + phone + '&code=' + code, (res) => {
          if (res.code === 0) {
            alert('成功下一步')
            this.$router.push({
              path: '/fongetPassword2',
              query: {phoneName: phone, codeName: code}
            })
          }
        })
      }
    }
  }
</script>
<style scoped>
    .icon-cuowu1{color:red;font-size:20px;position:absolute;right:-25px;top:12px;}
    .forgetPsdbox{width:283px;height:184px;margin:120px auto 0 auto;}
    .forgetPsdbox .phone{margin-bottom:23px;position:relative;}
    .forgetPsdbox .code{margin-bottom:28px;position:relative;}
    .forgetPsdbox label{font-size:16px;color:#333;}
    .phoneInp,.codeInp{width:200px;height:38px;border:solid 1px #a1a1a1;font-size:14px;color:#333;padding-left:10px;margin-left:17px;}
    .nextBtn{width:272px;height:40px;line-height:40px;border-radius:3px;text-align:center;background:#ff7900;color:#fff;font-size:16px;}
    .countdown{position:absolute;right:10px;top:13px;font-size:14px;color:#ff7900; }
</style>
