<template>
<div id="projectmanagement">
    <x-header  :left-options="{backText: ''}">{{$route.meta.title}} <router-link to="/newAddProject" slot="right" class="iconfont icon-tianjia" style="font-size:100px;"></router-link> </x-header>
       <search
    @result-click="resultClick"
    @on-change="getResult"
    :results="results"
    v-model="value"
    position="absolute"
    auto-scroll-to-top top="46px"
    @on-focus="onFocus"
    @on-cancel="onCancel"
    @on-submit="onSubmit"
    ref="search"></search>
    <div class="height:20px;"></div>
<div class="card"> 
    <div class="cardContent clearfix">
    <div style="width:80px;margin:40px;" class="fl">
        <check-icon :value.sync="demo2" type="plain"></check-icon>    
    </div>
    <div class="contents fl"  style="width:620px;">
      <div class="xmbh">
         <span>项目编号：</span>  <span>121211212</span>  
      </div>
      <div class="xmmc">
   <span>项目名称：</span>  <span>121211212</span>  
      </div>
      <div class="xmfzr">
   <span>项目负责人：</span>  <span>121211212</span>  
      </div>
      <div class="xmzj">
   <span>职位：</span>  <span>121211212</span>  
      </div>
    </div>
    
    </div>
   <div class="clearfix">  <x-button slot="right" type="primary" class="fr" mini style="float: right;margin-right: 20px;" @click.native="goToUrl()">编辑</x-button></div>
    
    </div>
</div>
</template>
<script>
 import { XHeader, Search, XInput, Cell, Group, XButton, Toast, CheckIcon } from 'vux'
 export default{
    components: {
        XHeader,
        XInput,
        Cell,
        Group,
        XButton,
        Toast,
        Search,
        CheckIcon
   },
   data() {
       return {
        demo2:false,
             results: [],
      value: 'test'
       }
   },
   methods: {
    setFocus () {
      this.$refs.search.setFocus()
    },
    goToUrl () {
        this.$router.push({ path: '/editingproject',query:{key:"value"}})
    },
    resultClick (item) {
      window.alert('you click the result item: ' + JSON.stringify(item))
    },
    getResult (val) {
      console.log('on-change', val)
      this.results = val ? getResult(this.value) : []
    },
    onSubmit () {
      this.$refs.search.setBlur()
      this.$vux.toast.show({
        type: 'text',
        position: 'top',
        text: 'on submit'
      })
    },
    onFocus () {
      console.log('on focus')
    },
    onCancel () {
      console.log('on cancel')
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
.contents div span{
    line-height: 25px; font-size: 16px;
}
.card{background: #eeeeee;padding: 10px;margin-top: 10px;}
</style>
