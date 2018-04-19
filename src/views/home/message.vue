<template>
<div id="message">
<x-header :left-options="{showBack: false}">{{$route.meta.title}}</x-header>
  <div class="messageXb-box">
 
    <div class="imgBox">
      <div class="pa redO"></div>
      <img class="imgList pr"  src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520854512828&di=883543fb0467100242150fdc5e9b2ac9&imgtype=0&src=http%3A%2F%2Fwx2.sinaimg.cn%2Fthumb150%2F005SoujZly1fo9cnb60r9j30qo0qowjc.jpg" alt="">
    </div>
    <div class="rightMessage">
    <p>小佰在线</p>
    <p>消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容</p>
    </div>
    <div class="rightTime">
      <span>2017-12-21</span>
    </div>
    
  </div>
  <div class="messageXb-box-message">
 
    <div class="imgBox">
      <div class="pa redO"></div>
      <img class="imgList pr"  src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520854512828&di=883543fb0467100242150fdc5e9b2ac9&imgtype=0&src=http%3A%2F%2Fwx2.sinaimg.cn%2Fthumb150%2F005SoujZly1fo9cnb60r9j30qo0qowjc.jpg" alt="">
    </div>
    <div class="rightMessage">
<p>小佰在线</p>
    <p>消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容</p>
    </div>
    <div class="rightTime">
      <span>2017-12-21</span>
    </div>
    
  </div>
    <div class="messageXb-box-message">
 
    <div class="imgBox">
      <div class="pa redO"></div>
      <img class="imgList pr"  src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520854512828&di=883543fb0467100242150fdc5e9b2ac9&imgtype=0&src=http%3A%2F%2Fwx2.sinaimg.cn%2Fthumb150%2F005SoujZly1fo9cnb60r9j30qo0qowjc.jpg" alt="">
    </div>
    <div class="rightMessage">
<p>小佰在线</p>
    <p>消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容</p>
    </div>
    <div class="rightTime">
      <span>2017-12-21</span>
    </div>
    
  </div>
</div>
</template>
<script>
import { Badge, Group, Cell, XHeader } from 'vux'

export default {
  components: {
    Badge,
    Group,
    Cell,
    XHeader
  }
}
</script>
<style>
#message{
  /* padding: 10px;  */
}
.messageXb-box-message{border-bottom: 1px solid #ddd;padding: 10px;
  background: #fff;overflow: hidden;margin-left: 10px;margin-right: 10px;}
.messageXb-box{
  margin-top: 10px;
padding: 10px;
  background: #fff;
  height: 100%;
  overflow: hidden;
  margin-bottom: 10px;
  margin-left: 10px;margin-right: 10px;
}
.imgList{
  height: 40px;width: 40px;border-radius: 50%;
}
.imgBox{width: 50px;height: 50px;float: left;}
.rightMessage{float: left;width:200px;}
.rightMessage p{white-space: nowrap;overflow:hidden;text-overflow:ellipsis;font-size: 14px;}
.rightTime{float: left;width: 70px;}
.pr{position: relative}
.pa{position: absolute}
.redO{width: 10px;height: 10px;border-radius: 50px;background: crimson;left: 47px;z-index: 3 }
</style>
