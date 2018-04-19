
<template>
  <div id="agreenent">
    <x-header  :left-options="{showBack: true}">{{$route.meta.title}}</x-header>
    <p class="txt">
      简历投递 : YGhr@91bcg.com <br/><br/>

      应聘电话 : 029-81879163
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
    font-size: 14px;
    color: #666666;
    line-height: 20px;
    padding:20px 15px 0 35px;
  }
</style>
