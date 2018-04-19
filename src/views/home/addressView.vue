<template>
<div id="addressView" style="height:100%;">
  <view-box ref="viewBox">
  <x-header  :left-options="{showBack: false}" style="width:100%;position:absolute;left:0;top:0;z-index:100;">{{$route.meta.title}}</x-header>
  <div class="cityContent">
    <div class="nowCity">
      <label for="" class="lableFont">定位城市</label>
    <checker v-model="demo" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
        <checker-item :value="item" v-for="(item, index) in items1" :key="index">{{item.name}}</checker-item>
      </checker>
      <br>
      <span> {{demo}}</span>
      <!-- <span> {{demo11}}</span> -->
    </div>
    <div class="remenCity">
<label for="" class="lableFont">热门城市</label>
 <checker v-model="demo2" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
        <checker-item :value="item1" v-for="(item1, index) in items2" :key="index">{{item1.name}}</checker-item>
      </checker>
      <br>
      <span> {{demo2}}</span>
    </div>
    <!-- <div class="AllCity">
<label for="" class="lableFont">城市选择</label>
<br>
  <span v-for="(arr, index) in zimu" class="zimu">{{ arr }}</span>
    </div> -->

      <div class="AllCity">
<label for="" class="lableFont"> 字母选择</label>
<br>
<section class="group_city_container">
            <ul class="letter_classify">
                <li v-for="(value, key, index) in sortobj" :key="key"  class="letter_classify_li">
                    <h4 class="city_title">{{key}}
                        <span v-if="index == 0">（按字母排序）</span>
                    </h4>
                    <ul class="groupcity_name_container citylistul clear">
                        <router-link  tag="li" v-for="item in value" :to="'/city/' + item.id" :key="item.id" class="ellipsis">
                            {{item.name}}

                        </router-link>  
                    </ul>
                </li>
            </ul>
        </section>
    </div>
  </div>
  </view-box>
  </div>

</template>
<script>
 import { XHeader, Card, Divider, Checker, CheckerItem, ViewBox } from 'vux'
export default {
   components: {
     XHeader,
     Card,
     Divider,
     Checker,
     CheckerItem,
     ViewBox
   },
   data () {
     return {
       Point: '123',
       items1: [],
       items2: [],
       demo: null,
       demo2: null,
       sortobj: {},
       groupcity: {},
       zimu: [
         'A',
         'B',
         'C',
         'D',
         'E',
         'F',
         'G',
         'H',
         'I',
         'J',
         'K',
         'L',
         'M',
         'N',
         'O',
         'P',
         'Q',
         'R',
         'S',
         'T',
         'U',
         'V',
         'X',
         'Y',
         'Z'
       ]
     }
   },
   mounted () {
     var that = this

     this.$http.get('http://cangdu.org:8001/v1/cities?type=guess').then(
      function (tes) {
        var dataItem = tes.data
        that.items1.push(dataItem)
      },
      function (res) {
        alert(res)
      }
    )
     this.$http.get('http://cangdu.org:8001/v1/cities?type=hot').then(
      function (tes) {
        var dataItem1 = tes.data
        that.items2 = dataItem1
      },
      function (res) {
        alert(res)
      }
    )
     this.$http.get('http://cangdu.org:8001/v1/cities?type=group').then(
      function (tes) {
        that.groupcity = tes.data
        for (let i = 65; i <= 90; i++) {
          that.sortobj[String.fromCharCode(i)] = that.groupcity[String.fromCharCode(i)]
        }
      },
      function (res) {
        alert(res)
      }
    )
   },
   computed: {
   },
   methods: {
   }
}
</script>
<style>
.cityContent{margin-top: 50px;}
.box {
  padding: 0 15px;
}
.demo1-item {
  border: 1px solid #ececec;
  padding: 5px 15px;
}
.demo1-item-selected {
  border: 1px solid #ff7900;
}
.lableFont {
  font-size: 16px;
}
.checkInstall {
  margin-top: 10px;
  padding: 10px;
}
.zimu {
  border: 1px solid #cccccc;
  display: inline-block;
  height: 30px;
  width: 30px;
  text-align: center;
  line-height: 30px;
}
.groupcity_name_container {
     border-left: .025rem solid #e4e4e4;
      
}
.groupcity_name_container li{
    float: left;
    width: 72.5px;
    height: 20px;
    font: 16px;
    text-align: center;
    padding: 0.266667rem;
    border-bottom: .025rem solid #e4e4e4;
    border-right: .025rem solid #e4e4e4;
    overflow: hidden;
    text-overflow: ellipsis;
white-space: nowrap;
        color: #666;

}

.city_title {
    color: #666;
    font-weight: 400;
    text-indent: .45rem;
    border-top: 2px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    font-size: 18px;
    line-height: 30px;
}
.clear{clear: both; overflow: hidden}
</style>
