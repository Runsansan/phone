<template>
<div id='seeinfo'>
  <x-header :right-options='{showMore: false}' @on-click-more='showMenus = false'>{{$route.meta.title}}</x-header>
  <div class='search'>
    <input type='text' placeholder='请输入员工姓名' class='search-inp'>
    <i class='iconfont icon-sousuo' ></i>
  </div>


  <div class='person' v-for="(item,index) in data" >
      <div class='con'>
          <div class='left'>
            <img src='../../../assets/img/huge.jpeg' alt=''>
          </div>
          <div class='right'>
            <p><span>{{item.name}}--{{item.id}} </span><span>{{item.position}}</span><span class='state'>{{item.state}}</span></p>
            <p><i class='iconfont icon-iconfontshouji' ></i><span class='mr80'>{{item.phone}}</span><i class='iconfont icon-zuoji' ></i><span>{{item.tel}}</span></p>
          </div>
          <i style='clear:both;'></i>
      </div>

      <div class='handle'>
          <div class='btn'  @click="delInfo(index)"><i class='iconfont icon-lajixiang mr12' ></i><span >删除</span></div>
          <div class='btn'  @click="dongInfo(index)"><i class='iconfont icon-dongjiefene mr12' ></i><span>冻结</span></div>
          <router-link :to="{path: '/modifyInfo'}"><div class='btn'><i class='iconfont icon-15 mr12' ></i><span>修改</span></div></router-link>
          <router-link :to="{path: '/seeInfoDetail'}"><div class='btn'><i class='iconfont icon-chakan mr12' ></i><span>查看</span></div></router-link>
      </div>
  </div>

  <div v-transfer-dom>
    <confirm v-model="show"
             :title="('操作提示')"
             @on-cancel="onCancel"
             @on-confirm="onConfirm"
             @on-show="onShow"
             @on-hide="onHide">
      <p style="text-align:center;">{{('你确定要删除吗？') }}</p>
    </confirm>
  </div>

  <div v-transfer-dom>
    <confirm v-model="show1"
             :title="('操作提示')"
             @on-cancel="onCancel"
             @on-confirm="onConfirm"
             @on-show="onShow"
             @on-hide="onHide">
      <p style="text-align:center;">{{('你确定要冻结吗？') }}</p>
    </confirm>
  </div>
</div>
</template>
<style>
  .iconfont{font-size:16px;}
  *{margin:0;padding:0;}
  ul li{list-style:none;}
  .active{background:#f5f5f5;color:#ff7900;}
  .active .on{
    background: #fff;}
  #seeinfo{background:#f5f5f5;width:100%;height:100%;}
  .search{padding:0 0.32rem;margin:0.1867rem 0;position: relative;}
  .search .search-inp{
      width:9.12rem;
      height:0.8rem;
      line-height:0.8rem;
      background:#fff;
      padding-left:0.24rem;
      border:none;
      font-size:14px;
      color:#333;
  }
  .mr80{margin-right:1.0933rem;}
  .mr12{margin-right:0.14rem;}
  .icon-sousuo{position:absolute;right:0.3867rem;top:0.1333rem;}
  .employNav{width:9.32rem;line-height:1.1867rem;background: #fff;padding:0 0.3067rem;}
  .employNav .tabCon div{background:gray;position:absolute;width:93%;}
  .employNav ul{height:1.1867rem;padding-left:0;}
  .employNav ul li{width:3.1rem;height:1.1867rem;line-height:1.1867rem;float:left;text-align:center;}
  .person{padding:0.24rem 0.3333rem;background:#fff;margin:0.1733rem 0;}
  .person .con{height:1.4999rem;}
  .person .con .left,.person .con .right{float:left;}
  .person .con .right{padding-left:0.4rem;}
  .person .con .right p{height:0.7467rem;line-height:0.7467rem;font-size:14px;color:#666;}
  .person .con .right .state{margin-left:3.4667rem;color:#ff7900;}
  .person .con .left{width:1.1467rem;height:1.1467rem;}
  .person .con .left img{width:100%;height:100%;border-radius:50%;}
  .person .handle{width:9.32rem;height:1.1867rem;line-height:1.1867rem;}
  .person .handle .btn{float:left;width:2.32rem;text-align:center;font-size:14px;background:#f2f2f2;color:#ff9933;}
</style>

<script>
import {XHeader, Actionsheet, TransferDom, ButtonTab, ButtonTabItem, Confirm, Group, XSwitch, XButton} from 'vux'
export default {
  directives: {
    TransferDom
  },
  components: {
    XHeader,
    Actionsheet,
    ButtonTab,
    ButtonTabItem,
    Confirm,
    Group,
    XSwitch,
    XButton
  },
  data () {
    return {
      show: false,
      show1: false,
      data: [
        {
          id: 1,
          name: '胡歌',
          position: '项目经理',
          state: '正常',
          phone: '13359316422',
          tel: '029-88886666'
        },
        {
          id: 2,
          name: '马天宇',
          position: '库管经理',
          state: '正常',
          phone: '13359316422',
          tel: '029-88886666'
        },
        {
          id: 3,
          name: '柳云龙',
          position: '库管经理',
          state: '正常',
          phone: '13359316422',
          tel: '029-88886666'
        }
      ]
    }
  },

  methods: {
    tab (index) {
      this.num = index
    },
    onCancel () {
      console.log('on cancel')
    },
    onConfirm (msg) {
      console.log('on confirm')
      if (msg) {
        alert(msg)
      }
    },
    onHide () {
      console.log('on hide')
    },
    onShow () {
      console.log('on show')
    },
    delInfo (index) {
      alert(this.data[index].id)// let id = this.data[index].id
      this.show = true
//      this.$router.push({
//        path: '/',
//        query: {idName: id}
//      })
    },
    dongInfo () {
      this.show1 = true
    }
  }
}
</script>



