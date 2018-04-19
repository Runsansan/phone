<template>
<div id='modifyInfo'>
  <x-header :right-options='{showMore: false}' @on-click-more='showMenus = false'>{{$route.meta.title}}</x-header>
  <div class="box">
      <div class="line">
        <label for="">姓名</label><input type="text" placeholder="丽丽"/>
      </div>

      <div class="line">
        <label for="">职位</label><input type="text" placeholder="项目经理"/>
      </div>

      <div class="line" style="position:relative">
        <label for="">对应项目</label><input type="text" placeholder="逸翠园道路改纪检"/>
        <span @click="select" class="select"><i class="iconfont icon-xiala1"></i></span>
      </div>

      <div class="line">
        <label for="">账号</label><input type="text"placeholder="1334568775"/>
      </div>

      <div class="line">
        <label for="">默认密码</label><input type="text" placeholder="dfd456465"/>
      </div>

      <div class="jiaose clearfix">
        <div class="txt fl">角色权限</div>
        <div class="redio fl">
          <checklist :label-position="labelPosition" required :options="commonList" :border-intent=false v-model="checklist001" @on-change="change"></checklist>
        </div>
      </div>

    <!--<actionsheet v-model="show4" :menus="menus1" :close-on-clicking-mask="false" :show-cancel=true  @on-click-mask="console('on click mask')"></actionsheet>-->
    <actionsheet v-model="show4" :menus="menus1"  @on-click-menu="click5"></actionsheet>
  </div>
</div>
</template>
<script>
  import { XHeader, Group, CellBox, Checklist, Cell, Divider, XButton, TransferDom, Actionsheet, XSwitch, Toast } from 'vux'
  export default {
    directives: {
      TransferDom
    },
    components: {
      XHeader,
      Group,
      Checklist,
      Cell,
      Divider,
      XButton,
      CellBox,
      Actionsheet,
      XSwitch,
      Toast
    },
    data () {
      return {
        fullValues: [],
        labelPosition: '',
        error: '',
        commonList: [ '采购权限', '财务权限', '库管权限' ],
        checklist001: [],
        show1: false,
        menus1: {
          menu1: ('经理'),
          menu2: ('库管'),
          menu3: ('财务')
        },
        show4: false
      }
    },
    mounted () {
//      let a = this.checklist001 = ['采购权限']
//      if (this.checklist001 === a) {
//        alert(111)
//      }
    },
    methods: {
      change (val, label) {
        console.log('change', val, label)
      },
      select () {
        this.show4 = true
      },
      console (msg) {
        console.log(msg)
      },
      click (key) {
        console.log(key)
      },
      click5 (key, item) {
        console.log(key, item)
      }
    }
  }
</script>
<style scoped>
  .select{
    position: absolute;right:30px;top:8px;}
  .redio{width:150px;}
  .box{padding:36px 40px 0 40px}
  .box .line{height:52px;}
  .box .line label{display:inline-block;width:63px;text-align:right;font-size:14px;margin-right:15px;}
  .box .line input{color:#666;width:192px;height:30px;border:solid 1px #bbbbbb;font-size:14px;padding-left:8px;}
  .txt{width:63px;text-align:right;font-size:14px;margin-right:15px;}
  .weui-cell .weui-check_label{border:none;}
  .weui-cell:before{border:none!important;}
</style>
