
<template>
  <div>
      <x-header  :left-options="{backText: ''}">{{$route.meta.title}}</x-header>
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
      <x-button slot="right" type="primary" style="margin-top:40px;" >保存</x-button>
  </div>
</template>

<script>
  import { XHeader, Group, Cell, XInput, XTextarea, XButton  } from 'vux'
export default {
 components: {
     XHeader,
     Group,
     Cell,
     XInput,
     XTextarea,
     XButton
 }
}
</script>

<style>

</style>
