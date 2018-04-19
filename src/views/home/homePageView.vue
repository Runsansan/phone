<template>
<div id="homePAGE" style="height:100%;background: #eeeeee;">

   <view-box ref="viewBox">
    <div class="caplIt clearfix">
    <div class="head clearfix" style="background: #ff7900;">
      <span id="allmap"></span>
      <router-link to="/addressView" class="fl left"> {{place}} </router-link>
      <div class="middle fl clearfix">
        <input type="text" class="searchInp fl" placeholder="搜产品、供应商">
      </div>
      <router-link to="/infoView" class="right fl" style="height:60px;"><img src="../../assets/img/icon/wode.png" alt="" class="imgInfo"></router-link>
    </div>

    <swiper  loop auto  :list="demo04_list" style="width:100%;margin-top:70px;" height="280px" :show-desc-mask=false ></swiper>

    <!--导航按钮-->
    <div class="nav clearfix">
      <div class="fl na">
        <div class="buy  blo">
          <img src="../../assets/img/images/a1.jpg" alt="">
        </div>
        <p class="txt">采购</p>
      </div>
      <div class="fl na">
        <div class="second-hand blo"><img src="../../assets/img/images/a2.jpg" alt=""></div>
        <p class="txt">二手</p>
      </div>
      <div class="fl na">
        <div class="personnel  blo"><img src="../../assets/img/images/a3.jpg" alt=""></div>
        <p class="txt">人才</p>
      </div>
      <div class="fl na">
        <div class="financing blo"><img src="../../assets/img/images/a4.jpg" alt=""></div>
        <p class="txt">金融</p>'
      </div>
    </div>

    <!--采购商-->
    <div class="headTxt">
      <h1>采购商</h1>
      <p class="pTxt">476家二级（及以上）资质施工企业（部分）</p>
    </div>
    <div class="caibox">
      <div :class="{anim:animate===true}">
        <div class="row clearfix" v-for="item in items">
          <div class="rowleft fl"><img :src="item.bgg" alt=""></div>
          <div class="rowright fl">
            <p>{{item.a}}</p>
            <div>
              <i class="iconfont icon-huiyuanjibie"></i>
              <label for="">企业资质：</label><span class="mr15">{{item.bg}}</span>
              <i class="iconfont icon-dingwei1"></i>
              <label for="">地址：</label><span>{{item.pl}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--供应商-->
    <div class="headTxt">
      <h1>供应商</h1>
      <p class="pTxt">全国诚信及优质供应商（部分）</p>
    </div>
    <div class="caibox" style="height:432px;">
      <div :class="{animG:animateG===true}">
        <div class="row clearfix" v-for="item in gongs">
          <div class="rowleft fl"><img :src="item.logo" alt=""></div>
          <div class="rowright fl">
            <p>{{item.name}} <span class="mr15"></span>
              <i class="iconfont icon-youzhi"></i>
              <i class="iconfont icon-chengxin"></i>
            </p>

            <div>
              <i class="iconfont icon-dingwei1 fl"></i>
              <label for="" class="fl">地址：</label><span class="fl">{{item.pl}}</span>
              <span class="fl">&nbsp;&nbsp;&nbsp;</span>
              <i class="iconfont icon-huiyuanjibie fl"></i>
              <label for="" class="fl">经营范围：</label><span class="overHidd fl">{{item.area}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--在建项目展示-->
    <div class="headTxt">
      <h1>在建项目展示</h1>
      <p class="pTxt">即时提供陕西在建项目咨询</p>
    </div>
    <div class="showBox">
        <div class="line">
          <h1 class="proTxt">湫坡头（陕甘界）至旬邑高速公路</h1>
          <div><label for="">项目状态：</label><span class="mr50 orange">在建</span><label for="">开工时间：</label><span>2017年11月</span></div>
          <div><i class="iconfont icon-dingwei1"></i><label for="">项目地址：</label><span class="mr50">陕西 咸阳</span> <label for="">工程估价：</label><span class="orange">25.2亿</span></div>
        </div>
        <div class="line">
          <h1 class="proTxt">湫坡头（陕甘界）至旬邑高速公路</h1>
          <div><label for="">项目状态：</label><span class="mr50 orange">在建</span><label for="">开工时间：</label><span>2017年11月</span></div>
          <div><i class="iconfont icon-dingwei1"></i><label for="">项目地址：</label><span class="mr50">陕西 咸阳</span> <label for="">工程估价：</label><span class="orange">25.2亿</span></div>
        </div>
        <div class="line">
        <h1 class="proTxt">湫坡头（陕甘界）至旬邑高速公路</h1>
        <div><label for="">项目状态：</label><span class="mr50 orange">在建</span><label for="">开工时间：</label><span>2017年11月</span></div>
        <div><i class="iconfont icon-dingwei1"></i><label for="">项目地址：</label><span class="mr50">陕西 咸阳</span> <label for="">工程估价：</label><span class="orange">25.2亿</span></div>
      </div>
    </div>

    <!--金融机构-->
    <div class="headTxt">
      <h1>金融机构</h1>
      <p class="pTxt">提供物资采购专款融资服务</p>
    </div>
    <div class="money clearfix">
      <div class="monyBox"><img src="../../../static/img/jinrong-logo/pingan.jpg" alt=""></div>
      <div class="monyBox"><img src="../../../static/img/jinrong-logo/china.jpg" alt=""></div>
      <div class="monyBox"><img src="../../../static/img/jinrong-logo/changan.jpg" alt=""></div>
      <div class="monyBox"><img src="../../../static/img/jinrong-logo/gunshang.jpg" alt=""></div>
      <div class="monyBox"><img src="../../../static/img/jinrong-logo/jianshe.jpg" alt=""></div>
      <div class="monyBox"><img src="../../../static/img/jinrong-logo/nongye.jpg" alt=""></div>
      <div class="monyBox"><img src="../../../static/img/jinrong-logo/qinnong.jpg" alt=""></div>
      <div class="monyBox"><img src="../../../static/img/jinrong-logo/xian.jpg" alt=""></div>
    </div>
    </div>
    </view-box>
</div>

</template>
<script>
  import {TransferDom, Search, Actionsheet, XHeader, Group, ViewBox, XSwitch, Toast, Swiper, GroupTitle, SwiperItem, Divider, XButton} from 'vux'
  import global_ from '../../global/index.js'
  const imgList = [
    './static/img/1.jpg',
    './static/img/2.jpg',
    './static/img/3.jpg'
  ]
  const demoList = imgList.map((one, index) => ({
    url: 'javascript:',
    img: one
  }))
  export default {
    components: {
      TransferDom,
      Actionsheet,
      Group,
      XSwitch,
      Toast,
      Swiper,
      GroupTitle,
      SwiperItem,
      Divider,
      XButton,
      ViewBox,
      XHeader,
      Search
    },
    directives: {
      TransferDom
    },
    data () {
      return {
        animate: false,
        items: [
          {a: '陕西奇鑫地矿建设工程有限公司', bg: '二级', pl: '陕西 西安', bgg: './static/img/cai-logo/1_qixin.jpg'},
          {a: '山东军辉建设集团有限公司', bg: '一级', pl: '陕西 西安', bgg: './static/img/cai-logo/2_junhui.jpg'},
          {a: '西安永夷建设工程有限公司', bg: '二级', pl: '陕西 西安', bgg: './static/img/cai-logo/3_yongyi.jpg'},
          {a: '中航长城大地建工集团有限公司', bg: '一级', pl: '陕西 西安', bgg: './static/img/cai-logo/4_changcheng.jpg'},
          {a: '陕西明泰工程有限公司', bg: '一级', pl: '陕西 西安', bgg: './static/img/cai-logo/5_mingtai.jpg'},
          {a: '西安蓝天建设工程有限公司', bg: '一级', pl: '陕西 西安', bgg: './static/img/cai-logo/6_lantian.jpg'}
        ],
        animateG: false,
        gongs: [
          {name: '深圳市创安顺交通设备有限公司', area: '标志牌', pl: '深圳 龙岗', logo: './static/img/gong-logo/1-casj.jpg'},
          {name: '西安中安交通设施有限公司', area: '标志牌 减速带', pl: '陕西 西安', logo: './static/img/gong-logo/2-zajt.jpg'},
          {name: '西安鼎天交通工程有限公司', area: '标志牌 减速带', pl: '陕西 西安', logo: './static/img/gong-logo/3-dtjt.jpg'},
          {name: '陕西安能节交通设施有限公司', area: '路锥 减速带', pl: '陕西 西安', logo: './static/img/gong-logo/4-sxan.jpg'}
        ],
        list: '',
        demo03_list: demoList,
        show: true,
        place: '北京',
        show1: false,
        menus1: {
          menu1: 'Share to friends',
          menu2: 'Share to timeline',
          menu3: 'Share to threefaloaew'
        },
        show2: false,
        demo04_list: demoList,
        results: [],
        value: 'test'
      }
    },
    created () {
      setInterval(this.scroll, 2000) // 在钩子函数中调用我在method 里面写的scroll()方法，注意此处不要忘记加this
      setInterval(this.scrollG, 2500)
    },
    mounted () {
     // this.getLocation()
      var that = this
      this.$http.get('http://cangdu.org:8001/v1/cities?type=guess').then(
      function (tes) {
        // that.items1 =tes.data
        // alert(that.items1.length)
        var dataItem = tes.data.name
        that.place = dataItem
        global_.city = dataItem
        // console.log( global_.city+2121)
        // that.items1.name[0]=tes.data.name
        // alert(JSON.stringify(that.items1))
      },
      function (res) {
        alert(res)
      })
    },
    methods: {
      onSubmit () {
        this.$refs.search.setBlur()
        this.$vux.toast.show({
          type: 'text',
          position: 'top',
          text: 'on submit'
        })
      },
      setFocus () {
        this.$refs.search.setFocus()
      },
      resultClick (item) {
        window.alert('you click the result item: ' + JSON.stringify(item))
      },
      getResult (val) {
        console.log('on-change', val)
        this.results = val ? getResult(this.value) : []
      },
      onFocus () {
        console.log('on focus')
      },
      onCancel () {
        console.log('on cancel')
      },
      scroll () {
        this.animate = true
        setTimeout(() => {
          this.items.push(this.items[0])
          this.items.shift()
          this.animate = false
        }, 500)
      },
      scrollG () {
        this.animateG = true
        setTimeout(() => {
          this.gongs.push(this.gongs[0])
          this.gongs.shift()
          this.animateG = false
        }, 500)
      }
    }
  }
  function getResult (val) {
    let rs = []
    for (let i = 0; i < 20; i++) {
      rs.push({
        title: `${val} result: ${i + 1} `,
        other: i
      })
    }
    return rs
  }
</script>
<style>
.place{width: 20px;}
.imgInfo{height: 30px; width: 30px;margin-top: 10px; margin-left: 10px;}
  .overHidd{display:inline-block;width:50px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;}
  .money{background:#fff;}
  .money .monyBox{width:127px;height:40px;margin:0 50px 0 10px;float:left;margin-bottom:15px;}
  .money .monyBox img{width:100%;height:100%;}
  .showBox{padding:0 11px;height:273px;overflow: hidden;transition: all 0.5s;}
  .showBox .line{border-bottom:dashed 1px #ccc;padding:10px 0 10px 15px;}
  .showBox .proTxt{font-size:14px;color:#333;font-weight:550;text-align: left;}
  .showBox .orange{color:#ff7900;}
  .showBox .col3{color:#333;}
  .showBox label{font-size:14px;color:#666;}
  .showBox span{font-size:14px;color:#333;}
  .mr50{margin-right:50px;}
  .icon-huiyuanjibie{color:red;font-size: 16px;}
  .icon-dingwei1{color:dodgerblue;font-size:16px;}
  .icon-youzhi{color:dodgerblue;font-size:16px;}
  .icon-chengxin{color:darkorange;font-size:16px;}
#allmap{width:0;height:0;}
.nav{background:#fff;margin:10px 0;padding:14px 28px 0 28px;}
.nav .na{width:25%;margin:0 auto;}
.nav .blo{width:45px;height:45px;margin:0 auto;}
.nav .mrno{margin-right:0;}
.nav  img{width:100%;height:100%;}
.nav .txt{padding:7px 0 7px 0;color:#333333;font-size:12px;text-align:center;}
.headTxt{height:68px;background: #fff;}
.headTxt h1{font-size:16px;height:40px;line-height:40px;font-weight:600;text-align: center;color:#363637;}
.headTxt .pTxt{font-size:14px;color:#4f4f4f;text-align:center;}
 .caibox{background: #fff;padding:0 11px;height:196px;overflow: hidden;transition: all 0.5s;}
.anim{margin-top:-65px;transition: all 0.5s; }
  .animG{margin-top:-70px;transition: all 0.5s; }
.row{padding:10px 0;border-bottom: dashed 1px #ccc;}
.row .rowleft{width:85px;height:43px;margin-right:15px;margin-left:10px;}
.row .rowleft img{width:100%;height:100%;}
.mr15{margin-right:15px;}

.asd{
  width:400px;
  height:400px;
  line-height:100px;
  text-align:center;
  background:#ff7900;
  margin:0 auto;
}
.header{height:50px;background: #ff7900;color: #fff;line-height: 50px;}
.header span{font-size: 16px;}

html,
body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
#allmap {width: 0;height:0;overflow: hidden;margin:0;font-family:'微软雅黑';}
.head{width:100%;height:50px;line-height:50px; background:rgba(0,0,0,0.2);    position: fixed;
    z-index: 9999;}
.head .left{font-size:14px;color:#fff;width: 50px;padding-left: 10px;}
.head .middle{margin-top:10px;}
.head .searchInp{width:240px;height:20px;padding-left:20px;border: 0;border-radius: 5px;font-size: 14px; margin-top: 6px;}
.head .sel{width:40px;height:34px;position:absolute;left:150px;top:12px;border:none;}
.popup0 {
  padding-bottom:15px;
  height:200px;
}
.popup1 {
  width:100%;
  height:100%;
}
.searchItem{margin-top: 50px;}
</style>
