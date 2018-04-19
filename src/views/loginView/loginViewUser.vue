<template>
  <div class="hello" >
    <x-header  :left-options="{showBack: true}">{{$route.meta.title}}</x-header>
    <div class="logo"><img src="../../assets/img/baicaiLogo.png" alt=""></div>
    <div class="loginBox">
      <div class="head">
        <div class="headLeft"><router-link to="/">手机快捷登录</router-link></div>
        <div class="headRight">账号密码登录</div>
      </div>

      <div class="content">
        <div class="rel">
          <div class="name">
            <img src="../../assets/img/name.png" alt="">
          </div>
          <input type="text" v-model="login.userCode" @keyup="clickLogin()" placeholder="请输入用户名"/>
          <i class="iconfont icon-cuowu1" v-show="isShow" v-model="isShow"></i>
        </div>
        <div class="rel">
          <div class="psd">
            <img src="../../assets/img/psd.png" alt="">
          </div>
          <input :type="this.togg.Type" v-model="login.password" @keyup="checkPassword()" placeholder="请输入密码"/>
          <i class="iconfont icon-cuowu1" v-show="isShow1" v-model="isShow1"></i>
          <i :class="this.togg.icon" @click="toggle"></i>
        </div>
      </div>

      <div class="bottom">
        <div class="left"><input type="checkbox" id="chb" v-model="rememberPassword"><label for="chb">记住密码</label></div>
        <div class="right"><router-link to="/fongetPassword">忘记密码？</router-link></div>
        <i style="clear:both;"></i>
      </div>

      <div class="login" @click="doLogin">登录</div>
      <p style="margin-top:30px;">还没有账户，<router-link to="/register">立即注册</router-link></p>
    </div>


  </div>
</template>

<script>
  import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem, XHeader } from 'vux'
  import serviceHttp from '../../api/service'
  import utilCommon from '../../util/index.js'
export default {
    components: {
      Tab,
      TabItem,
      Sticky,
      Divider,
      XButton,
      Swiper,
      SwiperItem,
      XHeader
    },
    data () {
      return {
        login: {
          userCode: '',
          password: ''
        },
        togg: {
          Type: 'password',
          icon: 'iconfont icon-yanjing-bi'
        },
        isShow: false,
        show: true,
        isShow1: false,
        rememberPassword: true
      }
    },
    mounted () {
      this.loadAccountInfo()
    },
    methods: {
      toggle () {
        this.togg.Type = this.togg.Type === 'password' ? 'text' : 'password'
        this.togg.icon = this.togg.icon === 'iconfont icon-yanjing-bi' ? 'iconfont icon-yanjing-zheng' : 'iconfont icon-yanjing-bi'
      },
      clickLogin () {
        var phone = this.login.userCode
        if (phone === '') {
          this.isShow = true
        } else {
          this.isShow = false
        }
      },
      checkPassword () {
        var reg = /^[a-zA-Z][a-zA-Z0-9]*$/
        var psd = this.login.password
        if (psd === '') {
          this.isShow1 = true
          return false
        }
        if (!psd.match(reg)) {
          this.isShow1 = true
        } else {
          this.isShow1 = false
        }
      },
      doLogin () {
        this.clickLogin()
        this.checkPassword()
        var that = this
        var userName = that.login.userCode
        var userPwd = that.login.password
        var rememberStatus = that.rememberPassword
        var accountInfo = ''
        accountInfo = userName + '&' + userPwd
        serviceHttp.login(this.login, (resg) => {
          console.log(resg)
          if (resg.code === 0) {
            let token = resg.data.userToken
            console.log(token)
            sessionStorage.setItem('Token', token)
            if (rememberStatus) {
              utilCommon.setCookie('accountInfo', accountInfo, 1440 * 3)
              console.log('勾选了记住密码，现在开始写入cookie' + accountInfo)
              //location.href = '/baseInfo'
            } else {
              console.log('没有勾选记住密码，现在开始删除账号cookie')
              utilCommon.delCookie('accountInfo')
            }
             location.href = '/homePageView'
          } else {
            console.log(resg.message)
          }
        })
      },
      doRememberPassword () {
        let that = this
        let rememberStatus = that.rememberPassword
        // event.preventDefault();
        that.rememberPassword = !rememberStatus
        // 如果去掉勾选，则删掉cookie
        // if (!rememberStatus){

        // }
        // mySelf.rememberPassword = false;
      },
      loadAccountInfo: function () {
        let mySelf = this
        // zhaopeng&A15hOsu8YeGnCsjb
        let accountInfo = utilCommon.getCookie('accountInfo')

        // 如果cookie里没有账号信息
        if (Boolean(accountInfo) === false) {
          console.log('cookie中没有检测到账号信息！')
          return false
        } else {
          // 如果cookie里有账号信息
          console.log('cookie中检测到账号信息！现在开始预填写！')
          let userName = ''
          let passWord = ''
          let index = accountInfo.indexOf('&')
          console.log(index + 'index') // 11
          userName = accountInfo.substring(0, index)
          console.log(userName + 'userName')
          passWord = accountInfo.substring(index + 1)
          console.log(passWord + 'passWord')
          mySelf.login.userCode = userName
          mySelf.login.password = passWord
          mySelf.rememberPassword = true
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .icon-yanjing-bi,.icon-yanjing-zheng{font-size:18px;color:#ff7900;position:absolute;right:50px;top:20px;}
  .icon-cuowu1{color:red;font-size:20px;position:absolute;right:20px;top:20px;}
  #chb{width:13px;height:13px;}
  .show{display:block}
  .hide{display:none;}
  .header{width:100%;height:1.1733rem;line-height:1.1733rem;color:#000000;font-size:16px;border-bottom:solid 1px #dddddd;}
  .header .back{float: left;margin-left:0.32rem;}
  .header .txt{float:left;margin-left:3.9733rem;}
  .logo{margin:1.2533rem 0 1.0933rem 3.1333rem;width:3.64rem;height:1.2667rem;}
  .logo img{width:100%;height:100%;}
  .vux-tab{line-height:1.3333rem;height:1.3333rem;color:#666666;}
  .vux-tab .vux-tab-item{line-height:1.3333rem;font-size:0.3733rem;border-bottom: 1px solid #dddddd!important;}
  .vux-tab .vux-tab-item.vux-tab-selected{color:#ff7900;border:none;}
  .loginBox{padding:0 0.6rem;}
  .loginBox .head{height:1.3733rem;}
  .loginBox .head .headLeft,.loginBox .head .headRight{float:left;width:50%;height:1.3733rem;line-height:1.3733rem;text-align:center;font-size:14px;color:#666666;}
  .loginBox .head .headLeft{border-bottom:solid 1px #ddd;}
  .loginBox .head .headLeft a{text-decoration: none;color:#666;width:50%;height:1.3733rem;line-height:1.3733rem;}
  .loginBox .head .headRight{border-bottom: solid 1px #ff7900;color:#ff7900;}
  .show{display:block}
  .hide{display:none;}
  .header{width:100%;height:1.1733rem;line-height:1.1733rem;color:#000000;font-size:16px;border-bottom:solid 1px #dddddd;}
  .header .back{float: left;margin-left:0.32rem;}
  .header .txt{float:left;margin-left:3.9733rem;}
  .logo{margin:1.2533rem 0 1.0933rem 3.1333rem;width:3.64rem;height:1.2667rem;}
  .logo img{width:100%;height:100%;}
  .vux-tab{line-height:1.3333rem;height:1.3333rem;color:#666666;}
  .vux-tab .vux-tab-item{line-height:1.3333rem;font-size:0.3733rem;border-bottom: 1px solid #dddddd!important;}
  .vux-tab .vux-tab-item.vux-tab-selected{color:#ff7900;border:none;}
  .loginBox{padding:0 0.6rem;}
  .loginBox .head{height:1.3733rem;}
  .loginBox .head .headLeft,.loginBox .head .headRight{float:left;width:50%;height:1.3733rem;line-height:1.3733rem;text-align:center;font-size:14px;color:#666666;}
  .loginBox .head .headLeft{border-bottom:solid 1px #ddd;}
  .loginBox .head .headLeft a{text-decoration: none;color:#666;width:50%;height:1.3733rem;line-height:1.3733rem;}
  .loginBox .head .headRight{border-bottom: solid 1px #ff7900;color:#ff7900;}

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
  font-size: 0.3733rem;
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
  border-bottom: solid 1px #ddd;
}
.loginBox .head .headLeft a {
  text-decoration: none;
  color: #666;
  width: 50%;
  height: 1.3733rem;
  line-height: 1.3733rem;
}
.loginBox .head .headRight {
  border-bottom: solid 1px #ff7900;
  color: #ff7900;
}
.loginBox .content1 {
  display: none;
}

.loginBox .content div input {
  height: 0.84rem;
  padding-top: 0.4rem;
  font-size: 0.3467rem;
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
  .loginBox .bottom .left{float:left;color:#999;font-size:0.32rem;}
  .loginBox .bottom .right{float:right;color:#999;font-size:0.32rem;}
  .loginBox .bottom .right a{color:#ffaf66;}
  .loginBox .login{width:100%;height:1.1067rem;line-height:1.1067rem;background:#ffbc7f;text-align:center;color:#fff;font-size:12px;cursor:pointer}
  .loginBox p{text-align:center;font-size:12px;color:#999999;}
  .loginBox p a{color:#ff7900;}
  .loginBox .content div .name img,.loginBox .content div .psd img{width:100%;height:100%;}
  .loginBox .bottom{height:64px;line-height:64px;margin-bottom:0.48rem;}
  .loginBox .bottom .left{float:left;color:#999;font-size:0.32rem;}
  .loginBox .bottom .right{float:right;color:#999;font-size:0.32rem;}
  .loginBox .bottom .right a{color:#ffaf66;}
  .loginBox .login{width:100%;height:1.1067rem;line-height:1.1067rem;background:#ffbc7f;text-align:center;color:#fff;font-size:12px;cursor:pointer}
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
  font-size: 0.32rem;
}
.loginBox .bottom .right {
  float: right;
  color: #999;
  font-size: 0.32rem;
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
  font-size: 12px;
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
  margin: 0 0.1333rem;
}
a {
  color: #ff7900;
}
</style>
