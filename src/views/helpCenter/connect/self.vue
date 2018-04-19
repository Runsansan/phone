
<template>
  <div id="agreenent">
    <x-header  :left-options="{showBack: true}">{{$route.meta.title}}</x-header>
    <p class="txt">
      陕西鹰购网络科技有限公司，简称鹰购网络，成立2016年1月8日，注册资本3000万元，总部位于西安高新区。
    </p>
    <p class="txt">
      佰采网是陕西鹰购网络科技有限公司旗下大型高科技 B2B 互联网电子商务平台，基于建工、电商等行业近二十载的多元化经营经验创立，佰釆网是具有跨时代意义的电子商务服务平台，顺应国家政策及政府号召，通过将建工类涉及的建设单位、施工企业、生产厂商、金融机构、物流机构等各大主体单位进行资源、信息、数据等多维度整合，依托于前瞻性科技技术以及互联网平台服务系统，为平台客户提供材料在线交易、闲置材料买卖、大型机械租赁、专业人才托管和推荐、定制生产等服务，以此打破传统格局，重构全产业链运作及交易规则，为日益凸显的行业矛盾提供全新的、全方位的解决方案。
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
    font-size:14px;
    color: #666666;
    line-height: 25px;
    padding:20px 15px 0 15px;
    text-indent:25px;
  }
</style>
