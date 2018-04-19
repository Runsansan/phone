<template>
<div id="agreenent">
  <x-header  :left-options="{showBack: true}">{{$route.meta.title}}</x-header>
  <ul class="tab clearfix">
    <li class="tabChild fl" v-for="(item, index) in tabs" :class="{orange:index ===num}" @click="tab(index)">{{item}}</li>
  </ul>
  <div class="tabCon">
    <div  v-for="(itemCon, index) in lists" v-show="index === num">
      <div  class="line clearfix" v-for="list in itemCon.info">
        <i class="" v-bind:class="list.logo"></i>
        <div class="fl" >{{list.name}}</div>
      </div>
    </div>
  </div>

</div>
</template>
<script>
import { Divider, Card, Cell, Group, CellBox, CellFormPreview, XHeader } from 'vux'
export default {
  components: {
    Card,
    Divider,
    Group,
    Cell,
    CellFormPreview,
    CellBox,
    XHeader
  },
  data () {
    return {
      num: 0,
      tabs: ['产品', '二手'],
      lists: [
        {
          info: [
            {name: '地板/门窗/吊顶', logo: ' iconfont icon-jiaju fl mglr12'},
            {name: '五金机电', logo: ' iconfont icon-wujingongju fl mglr12'},
            {name: '交通设施', logo: 'iconfont icon-jiaotong fl mglr12'},
            {name: '劳保', logo: ' iconfont icon-drxx77 fl mglr12'},
            {name: '消防设施', logo: ' iconfont icon-xiaofanggongcheng fl mglr12'},
            {name: '工程钢板', logo: 'iconfont icon-jiaoyi2 fl mglr12'}
          ]
        },
        {
          info: [
            {name: '劳保', logo: ' iconfont icon-drxx77 fl mglr12'},
            {name: '消防设施', logo: ' iconfont icon-xiaofanggongcheng fl mglr12'},
            {name: '工程钢板', logo: 'iconfont icon-jiaoyi2 fl mglr12'},
            {name: '五金机电', logo: ' iconfont icon-wujingongju fl mglr12'},
            {name: '交通设施', logo: 'iconfont icon-jiaotong fl mglr12'}
          ]
        }
      ]
    }
  },
  methods: {
    tab (index) {
      this.num = index
    }
  }
}
</script>
<style scoped>
    .icon-jiaju,.icon-xiaofanggongcheng,.icon-jiaoyi2,.icon-wujingongju,.icon-jiaotong,.icon-drxx77{color:#ff7900;font-size:34px;}
    .alert{width:80%;height:80%;background:#ccc;position:absolute;right:0;top:100px;}
    .mglr12{margin:0 12px;}
    .orange{color:#ff7900;}
    .tab{width:100%;height:36px;border-bottom:solid 1px #ccc;padding:7px 0;color:#666;}
    .tabChild{width:49%;height:36px;line-height:36px;text-align:center;font-size:18px;}
    .tabChild:hover{cursor: pointer;}
    .tab .tabChild:nth-child(1){border-right:solid 1px #ccc;}
    .tabCon .line{height:57px;line-height:57px;font-size:18px;color:#666;}
</style>
