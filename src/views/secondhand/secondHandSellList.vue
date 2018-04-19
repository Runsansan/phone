<template>
 <div class="name2">
   <x-header :left-options="{backText: ''}" id="test2">{{$route.meta.title}}</x-header>
   二手出售
 </div>
</template>
<script>
import { XHeader } from 'vux'
export default {
  components: {
    XHeader
  },
  mounted () {
    // history.go(0)
  },
  methods: {

  }
}
</script>
<style>
html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }
body {
  margin: 0;
}
</style>
