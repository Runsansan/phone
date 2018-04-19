
<template>
  <div>
      <x-header  :left-options="{backText: ''}">{{$route.meta.title}}</x-header>
     <group>
                <x-input title="项目负责人："></x-input>
                   <x-input title="职位:"></x-input>
                      <x-input title="账号："></x-input>
                         <x-input title="密码："></x-input>
                          
     </group>
     <!-- // <childRen v-on:message="parentMsg" v-on:listenToChildEvent="showMessageFromChild"></childRen> -->
     <x-button slot="right" type="primary" style="margin-top:40px;" @click.native="onPushClick()" >保存</x-button>
     <!-- <div>
         <p>
             {{ count }}
         </p>
         <p>
             <button @click="increment">++</button>
             <button @click="decrement">--</button>
         </p>
     </div> -->
  </div>
</template>

<script>
 import { XHeader, Group, Cell, XInput, XTextarea, XButton } from 'vux'
 // import childRen from '../../../components/caigou.vue'
 // import { mapState } from 'vuex'
export default {
 components: {
     XHeader,
     Group,
     Cell,
     XInput,
     XTextarea,
     XButton,
    // childRen
 },data(){
     return{
       parentMsg:'hello word'  
     }
 },
//  computed: {
//    count(){
//        return this.$store.state.count
//    }  
//  },
 methods: {
     onPushClick () {
         this.$router.push({ path: '/projectmanagement' })                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
     }
    //  showMessageFromChild(data){
    //      console.log(data)
    //  },
    //  increment () {
    //       this.$store.commit('increment')
    //  },
    //  decrement(){
    //       this.$store.commit('decrement')
    //  }
 }
}
</script>

<style>

</style>
