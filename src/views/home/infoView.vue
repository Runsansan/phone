<template>
<div id="agreenent">
  <x-header  :left-options="{showBack: false}">{{$route.meta.title}}</x-header>
    <p class="lineHeight"> <img slot="header" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520834182390&di=8bb071af791b2dfe67267ecd214ac412&imgtype=0&src=http%3A%2F%2Fyangfanbook.sina.com.cn%2Fimage%2Fdefault_user_avatar_thumb.gif" style="width:100px;height:100px;display:block;margin:0 auto;">
    <router-link :to="{path:'/'}">点我登录</router-link>
    </p>
    <group>
    <cell title="在线客服" :link="{path:'/message'}"></cell>
    <cell title="帮助中心" :link="{path:'/aboutUs'}"></cell>
  </group>
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
  }
}
</script>
<style>
.cardColor{
  background: #cccccc;
  height: 300px;
}
.lineHeight{
  height: 150px;
  background: #cccccc;
  padding-top: 50px;
  text-align: center;

}
</style>
