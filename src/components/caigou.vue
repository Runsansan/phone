
<template>
  <div>
  <h2>子组件</h2>
  <p>{{ message }}</p>
  <button v-on:click="textSetMessage">父组件传值</button>
  </div>
</template>
<style>
</style>
<script>
import { ViewBox, Scroller, XHeader, Tabbar } from 'vux'
export default{
  components: {
    ViewBox,
    Scroller,
    XHeader,
    Tabbar
  },
  props: [ "message"],
  methods: {
     textSetMessage () {
       this.$emit("listenToChildEvent","这个来自子组件消息")
       
     } 
  }
}
</script>
    