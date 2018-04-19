<template>
  <div class="hello">
    <x-header  :left-options="{showBack: true}">{{$route.meta.title}}</x-header>
    <div class="logo"><img src="../../assets/img/baicaiLogo.png" alt=""></div>
    <div class="loginBox">
        <div class="head">
          <div class="headLeft">手机快捷登录</div>
          <div class="headRight"><router-link to="/login">账号密码登录</router-link></div>
        </div>

        <div class="content" id="content1" >
            <div class="rel">
              <div class="name">
                <img src="../../assets/img/phone.png" alt="">
              </div>
              <input type="text" v-model="login.mobilePhone" @keyup="clickLogin" placeholder="请输入手机号" />
              <i class="iconfont icon-cuowu1" v-show="isShow" v-model="isShow"></i>
            </div>
            <div class="rel">
              <div class="psd">
                <img src="../../assets/img/code.png" alt="">
              </div>
              <input type="password" v-model="login.phoneCode" @keyup="clickCode()" placeholder="请输入验证码"/>
              <i class="iconfont icon-cuowu1" v-show="isShow1" v-model="isShow1"></i>
              <div class="countdown">
                <span v-show="show" @click="getCode()">获取验证码</span>
                <span v-show="!show" class="count">{{count}}S后重新获取</span>
              </div>
            </div>
        </div>

        <div class="bottom">
          <!--<div class="left"><input type="checkbox" id="chb" ><label for="chb">记住密码</label></div>-->
          <div class="right"><router-link to="/fongetPassword">忘记密码？</router-link></div>
          <i style="clear:both;"></i>
        </div>
        <div class="login" @click="loginBtn">登录</div>
      <p style="margin-top:30px;">还没有账户，<router-link to="/register">立即注册</router-link></p>
    </div>

  </div>
</template>

<script>
  import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem, Group, Cell, XHeader } from 'vux'
  import serviceHttp from '../../api/service'
  export default {
    components: {
      Tab,
      TabItem,
      Sticky,
      Divider,
      XButton,
      Swiper,
      SwiperItem,
      Group,
      Cell,
      XHeader
    },
    data () {
      return {
        login: {
          mobilePhone: '',
          imagCode: '0000',
          phoneCode: ''
        },
        isShow: false,
        show: true,
        count: '',
        timer: null,
        isShow1: false
      }
    },
    methods: {
      next () {
        location.href = '/login'
      },
      clickLogin () {
        var phone = this.login.mobilePhone
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
        }
      },
      clickCode () {
        var code = this.login.phoneCode
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
      getCode () {
        var phone = this.login.mobilePhone
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
          serviceHttp.loginCode(this.login.mobilePhone + '/' + this.login.imagCode, (resg) => {
            if (resg.code === 501) {
              alert('未注册')
              return false
            }
            if (resg.code === 0) {
              // alert('发送成功')
              this.cutDown()
            } else {
              // alert('发送失败')
            }
          })
        }
      },
      loginBtn () {
        let phone = this.login.mobilePhone
        console.log(phone)
        let reg = /^[1][3,4,5,6,7,8][0-9]{9}$/
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
          serviceHttp.loginPhone(this.login, (resg) => {
            console.log(this.login.mobilePhone)
            if (resg.code === 501) {
              alert(resg.message)
            }
            if (resg.code === 0) {
              alert('登录成功')
            } else {
              alert('登录失败')
            }
          })
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .icon-cuowu1{color:red;font-size:20px;position:absolute;right:20px;top:20px;}
  #chb{width:13px;height:13px;}
  .vux-x-icon {
    fill: red;
  }
.show{display:block}
.hide{display:none;}
.header{width:100%;height:1.1733rem;line-height:1.1733rem;color:#000000;font-size:16px;border-bottom:solid 1px #dddddd;}
.header .back{float: left;margin-left:0.32rem;}
.header .txt{float:left;margin-left:3.9733rem;}
.logo{margin:1.2533rem 0 1.0933rem 3.1333rem;width:3.64rem;height:1.2667rem;}
.logo img{width:100%;height:100%;}
.vux-tab{line-height:1.3333rem;height:1.3333rem;color:#666666;}
.vux-tab .vux-tab-item{line-height:1.3333rem;font-size:16px;border-bottom: 1px solid #dddddd!important;}
.vux-tab .vux-tab-item.vux-tab-selected{color:#ff7900;border:none;}
.loginBox{padding:0 0.6rem;}
  .loginBox .head{height:1.3733rem;}
.loginBox .head .headLeft,.loginBox .head .headRight{float:left;width:50%;height:1.3733rem;line-height:1.3733rem;text-align:center;font-size:14px;color:#666666;}
  .loginBox .head .headLeft{border-bottom:solid 1px #ff7900;color:#ff7900;}
  .loginBox .head .headRight{border-bottom: solid 1px #ddd;}
  .loginBox .head .headRight a{text-decoration:none;color:#666;width:50%;height:1.3733rem;line-height:1.3733rem;}

  .vux-x-icon {
    fill: red;
  }
  .show{display:block}
.hide{display:none;}
.header{width:100%;height:1.1733rem;line-height:1.1733rem;color:#000000;font-size:16px;border-bottom:solid 1px #dddddd;}
.header .back{float: left;margin-left:0.32rem;}
.header .txt{float:left;margin-left:3.9733rem;}
.logo{margin:1.2533rem 0 1.0933rem 3.1333rem;width:3.64rem;height:1.2667rem;}
.logo img{width:100%;height:100%;}
.vux-tab{line-height:1.3333rem;height:1.3333rem;color:#666666;}
.vux-tab .vux-tab-item{line-height:1.3333rem;font-size:16px;border-bottom: 1px solid #dddddd!important;}
.vux-tab .vux-tab-item.vux-tab-selected{color:#ff7900;border:none;}
.loginBox{padding:0 0.6rem;}
  .loginBox .head{height:1.3733rem;}
.loginBox .head .headLeft,.loginBox .head .headRight{float:left;width:50%;height:1.3733rem;line-height:1.3733rem;text-align:center;font-size:14px;color:#666666;}
  .loginBox .head .headLeft{border-bottom:solid 1px #ff7900;color:#ff7900;}
  .loginBox .head .headRight{border-bottom: solid 1px #ddd;}
  .loginBox .head .headRight a{text-decoration:none;color:#666;width:50%;height:1.3733rem;line-height:1.3733rem;}

.vux-x-icon {
  fill: red;
}
.show {
  display: block;
}
.hide {
  display: none;
}
.header {
  width: 100%;
  height: 1.1733rem;
  line-height: 1.1733rem;
  color: #000000;
  font-size: 16px;
  border-bottom: solid 1px #dddddd;
}
.header .back {
  float: left;
  margin-left: 0.32rem;
}
.header .txt {
  float: left;
  margin-left: 3.9733rem;
}
.logo {
  margin: 1.2533rem 0 1.0933rem 3.1333rem;
  width: 3.64rem;
  height: 1.2667rem;
}
.logo img {
  width: 100%;
  height: 100%;
}
.vux-tab {
  line-height: 1.3333rem;
  height: 1.3333rem;
  color: #666666;
}
.vux-tab .vux-tab-item {
  line-height: 1.3333rem;
  font-size: 16px;
  border-bottom: 1px solid #dddddd !important;
}
.vux-tab .vux-tab-item.vux-tab-selected {
  color: #ff7900;
  border: none;
}
.loginBox {
  padding: 0 0.6rem;
}
.loginBox .head {
  height: 1.3733rem;
}
.loginBox .head .headLeft,
.loginBox .head .headRight {
  float: left;
  width: 50%;
  height: 1.3733rem;
  line-height: 1.3733rem;
  text-align: center;
  font-size: 14px;
  color: #666666;
}
.loginBox .head .headLeft {
  border-bottom: solid 1px #ff7900;
  color: #ff7900;
}
.loginBox .head .headRight {
  border-bottom: solid 1px #ddd;
}
.loginBox .head .headRight a {
  text-decoration: none;
  color: #666;
  width: 50%;
  height: 1.3733rem;
  line-height: 1.3733rem;
}


.loginBox .content1 {
  display: none;
}

.loginBox .content div input {
  height: 0.84rem;
  padding-top: 0.4rem;
  font-size: 16px;
  width: 90%;
  border: none;
  border-bottom: solid 1px #dddddd;
  margin-bottom: 0.2rem;
  padding-left: 10%;
}
.loginBox .content div input::-webkit-input-placeholder {
  color: #ddd;
  opacity: 1;
}
.loginBox .content .rel {
  position: relative;
}
.loginBox .content .rel .countdown {
  position: absolute;
  left: 6.2667rem;
  top: 0.6rem;
  color: #999;
  font-size: 14px;
}
.loginBox .content div .name,
.loginBox .content div .psd {
  width: 0.4533rem;
  height: 0.5333rem;
  position: absolute;
  left: 0.1333rem;
  top: 0.5067rem;
}


.loginBox .content div .name img,.loginBox .content div .psd img{width:100%;height:100%;}
.loginBox .bottom{height:64px;line-height:64px;}
.loginBox .bottom .left{float:left;color:#999;font-size:12px;}
.loginBox .bottom .right{float:right;color:#999;font-size:12px;}
.loginBox .bottom .right a{color:#ffaf66;}
.loginBox .login{width:100%;height:1.1067rem;line-height:1.1067rem;background:#ffbc7f;text-align:center;color:#fff;font-size:14px;cursor:pointer}
.loginBox p{text-align:center;font-size:12px;color:#999999;}
.loginBox p a{color:#ff7900;}

.loginBox .content div .name img,.loginBox .content div .psd img{width:100%;height:100%;}
.loginBox .bottom{height:64px;line-height:64px;margin-bottom:0.48rem;}
.loginBox .bottom .left{float:left;color:#999;font-size:12px;}
.loginBox .bottom .right{float:right;color:#999;font-size:12px;}
.loginBox .bottom .right a{color:#ffaf66;}
.loginBox .login{width:100%;height:1.1067rem;line-height:1.1067rem;background:#ffbc7f;text-align:center;color:#fff;font-size:14px;cursor:pointer}
.loginBox p{text-align:center;font-size:12px;color:#999999;}
.loginBox p a{color:#ff7900;}

.loginBox .content div .name img,
.loginBox .content div .psd img {
  width: 100%;
  height: 100%;
}
.loginBox .bottom {
  height: 64px;
  line-height: 64px;
  margin-bottom: 0.48rem;
}
.loginBox .bottom .left {
  float: left;
  color: #999;
  font-size: 12px;
}
.loginBox .bottom .right {
  float: right;
  color: #999;
  font-size: 12px;
}
.loginBox .bottom .right a {
  color: #ffaf66;
}
.loginBox .login {
  width: 100%;
  height: 1.1067rem;
  line-height: 1.1067rem;
  background: #ffbc7f;
  text-align: center;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
}
.loginBox p {
  text-align: center;
  font-size: 12px;
  color: #999999;
}
.loginBox p a {
  color: #ff7900;
}


.ios-close {
  position: absolute;
  left: 7.7333rem;
  top: 0.4667rem;
}

body {
  margin: 0;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #ff7900;
}
</style>
