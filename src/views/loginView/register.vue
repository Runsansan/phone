<template>
<div id="register">
<x-header  :left-options="{showBack: false}">{{$route.meta.title}}</x-header>
<div class="tabs">
   <div class="tab1"><a>用户类型:</a></div>
 <div class="tab" @click="toggle(index)"  v-for="(tab,index) in uidList" :class="{active: active == index}"> {{tab.name}} </div>

 <!-- <div class="tab"><a>供应商</a></div>
 <div class="tab"><a>供应商</a></div> -->
 <!-- <div>
<label for="">用户类型</label>
im
 </div> -->

</div>

 <group>
      <x-input title="手机号"  v-model="registerInfo.mobilePhone" :max="13" is-type="china-mobile"></x-input>
    </group>
     <group>
       <!--  @click.native="yzmRefresh()"  -->
      <x-input title="验证码"  v-model="registerInfo.imagCode" :max="4">
        <img slot="right" v-bind:src="imagUrl" height="40px;" width="80px" >
      </x-input>
      <x-input title="发送验证码" class="weui-vcode"  v-model="registerInfo.phoneCode" :max="6">
        <x-button slot="right" type="primary" mini @click.native="setPhoneYzm()">发送验证码</x-button>
      </x-input>
    </group>
     <group>
      <x-input title="密码"  v-model="registerInfo.password" :max="16"  is-type="password" type="password"></x-input>
       <x-input title="密码"  v-model="password1" :max="16" is-type="password" type="password"></x-input>
    </group>
    <group>
     
    </group>
<!-- <prince :is="currentTab" keep-alive></prince> -->
            <x-button type="primary" style="margin-top:20px;" @click.native="OnClickLink()">注册</x-button>
             <toast v-model="showPositionValue" type="text" :time="800" is-show-mask :text="textValue" position="middle"></toast>
</div>
</template>
<script>
 import { XHeader, Selector, XInput, Cell, Group, XButton, Toast } from 'vux'
 import serviceHttp from '../../api/service'
 export default{
   components: {
     XHeader,
     XInput,
     Cell,
     Group,
     XButton,
     Toast,
     Selector
   },
   data () {
     return {
       uidList: [
         {
           name: '供应商'
         },
         {
           name: '采购商'
         }
       ],
       registerInfo: {
         uidType: '1',
         mobilePhone: '',
         phoneCode: '',
         regFrom: '0',
         userCode: '',
         password: '',
         imagCode: ''
       },
       imagUrl: '',
       active: 0,
       password1: '',
       show1: false,
       textValue: '',
       showPositionValue: false
     }
   },
   mounted () {
     this.imagUrl = 'http://192.168.1.150:8082/egoo-app/app/images/getImageCode'
   },
   methods: {
     toggle (i) {
       this.active = i
       this.registerInfo.uidType = i + 1
       alert(this.registerInfo.uidType)
     },
     setPhoneYzm () {
       let phone = this.registerInfo.mobilePhone
       let imgCodeLists = this.registerInfo.imagCode
       serviceHttp.getPhoneYzm(phone + '/' + imgCodeLists, res => {
         alert(JSON.stringify(res))
       })
     },
     OnClickLink () {
       if (this.registerInfo.password === undefined) {
         this.textValue = '密码不能为空'
         this.showPositionValue = true
       }
       if (this.password1 === this.registerInfo.password) {
         this.$http.post('http://192.168.1.150:8082/egoo-app/app/regist/save', this.registerInfo).then(
      function (tes) {
        console.log(tes)
      },
      function (res) {
        alert(res)
      }
    )
         alert(JSON.stringify(this.registerInfo))
       } else {
         this.textValue = '两次输入密码不一致'
         this.showPositionValue = true
       }
     }
   }
 }
</script>
<style scoped>
.tab{
  height: 30px;width: 30%;
  text-align: center;background: #cccccc;margin-top: 20px;
  line-height: 30px;float: left;color: #ffffff;
}
.tab1{float: left; height: 30px;line-height: 30px;margin-top: 20px;}
.tab{
  margin-left: 5%;
}
.tabs{clear: both;overflow: hidden; padding:0 10%;font-size: 16px;}
.active {
   background: #ff7900;
  }
</style>
