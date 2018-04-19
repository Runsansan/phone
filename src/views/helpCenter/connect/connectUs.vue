
<template>
  <div>
    <x-header  :left-options="{showBack: true}">{{$route.meta.title}}</x-header>
    <p class="txt">
      邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;编 : 710000<br/><br/>

      联系电话 : 029-86199999<br/><br/>

      传&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;真 : 029-86199999<br/><br/>

      邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱 : baicaiwang@91bcg.com<br/><br/>

      地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址 :  陕西西安高新区唐延南路逸翠园i都会3号楼3单元1812室

    </p>
  </div>
</template>
<script>
  import {XHeader, Cell} from 'vux'
  export default {
    components: {
      XHeader,
      Cell
    },
    data () {
      return {
      }
    }
  }
</script>
<style scoped>
  .txt{
    color: #666666;
    line-height: 20px;
    padding:20px 15px 0 35px;
    font-size:14px;
  }
</style>

