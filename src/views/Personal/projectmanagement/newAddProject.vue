<template>
  <div>
    <x-header  :left-options="{backText: ''}">{{$route.meta.title}}</x-header>
    <div class="content">
           <!-- <step v-model="step2" class="vueStep" gutter="0.1667rem">
        <step-item title="第一步" description="基本信息"></step-item>
        <step-item title="第二步" description="项目负责人信息"></step-item>
        <step-item title="第三步" description="完成"></step-item>
      </step> -->
      <div>添加基本信息</div>
        <div>
            <span>项目编号：</span><span>SXYJ10000001</span><span>（自动生成）</span>
        </div>
    </div>
    
        
        <group>
             <x-input title="项目名称："></x-input>
                <x-input title="所属区域："></x-input>
                   <x-input title="项目地址:"></x-input>
                      <x-input title="计划开始时间："></x-input>
                         <x-input title="计划结束时间："></x-input>
                            <x-input title="工程工期："></x-input>
                               <x-input title="工程量估算："></x-input>
                                  <x-input title="工程造价："></x-input>

                                     <x-input title="造价（大写）："></x-input>
                                        <x-input title="项目类型："></x-input>
                                           <x-input title="项目状态："></x-input>
                                              <x-input title="质量等级："></x-input>
                                     <x-input></x-input>    

          <group title="项目备注说明：">
      <x-textarea :max="200" name="description" placeholder="最多200个字"></x-textarea>
    </group>
      </group>
      <x-button slot="right" type="primary" style="margin-top:40px;" @click.native="onNextStep()" >下一步</x-button>

    <!-- <group>
        <cell title="基本信息" link="/editBaseInfo" ></cell>
    </group>
      <group>
        <cell title="项目负责人信息" link="/editPersonInCharge" ></cell>
    </group> -->
  </div>
</template>

<script>
import { XHeader, Group, Cell, XInput, XTextarea, XButton, Step, StepItem,  XHr  } from 'vux'
export default {
 components: {
     XHeader,
     Group,
     Cell,
     XInput,
     XButton,
     XTextarea,Step,StepItem,XHr 
 },
 data () {
     return {
         step2:0
     }
 },
 methods:{
     onNextStep () {
       this.$router.push({ path: '/addPersonInCharge' }) 
     },
 }
}
</script>

<style scoped>
</style>
