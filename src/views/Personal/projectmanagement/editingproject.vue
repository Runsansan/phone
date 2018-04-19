<template>
  <div class="editingproject">
      <x-header  :left-options="{backText: ''}">{{$route.meta.title}}</x-header>
      <div class="edit-div">
          <div class="xmbh"><span>项目编号：</span> <span>SXYJ10000001</span><span>(自动生成)</span></div>
          <div class="tit-jbxx">
              <div>基本信息 <router-link to="/editBaseInfo" class="fr" style="width:200px; float:right;font-size: 40px;">编辑信息</router-link></div>
              <div>
                  <div>
   <span class="">项目名称：</span>
   <span>1211212112</span>
                  </div>
               <div><span class="">所属区域：</span> <span>1211212112</span>
               </div>
                  <div class="">
<span class="">项目地址:</span> <span>1211212112</span>
                  </div>
                  <div class="">
<span class="">计划开始时间：</span> <span>1211212112</span>
                  </div>
                  <div class="">
<span class="">计划结束时间：</span> <span>1211212112</span>
                  </div>
                  <div class="">
  <span class="">工程工期：</span> <span>1211212112</span>
                  </div>
                  <div class="">
 <span class="">工程量估算：</span> <span>1211212112</span>
                  </div>
                  <div class="">
<span class="">工程造价：</span> <span>1211212112</span>
                  </div>
                  <div class="">
  <span class="">造价（大写）：</span> <span>1211212112</span>
                  </div>
                  <div class="">
   <span class="">项目类型：</span> <span>1211212112</span>
                  </div>
                  <div class="">
    <span class="">项目状态：</span> <span>1211212112</span>
                  </div>
                  <div class="">
    <span class="">质量等级：</span> <span>1211212112</span>
                  </div>
                        
                <div>
<span class="">项目备注说明：</span> <span>1211212112</span>
                </div>
                 
                  
                
               
                
                  
                        
              </div>
          </div>
          <div>
              <div class="xmfzr">
                  <div class="xmfzrTit">项目负责人信息 <router-link to="/editPersonInCharge"  class="fr" style="width:200px; float:right;font-size: 40px;">编辑信息</router-link></div>
                  <div class="fzrInfo">
                      <div class="">
                          <span>项目负责人：</span> <span>1211212112</span>
                      </div>
                      <div class="">
                          <span>职位：</span> <span>1211212112</span>
                      </div>
                      <div class="">
                          <span>账号：</span> <span>1211212112</span>
                      </div>
                      <div class="">
                          <span>密码：</span> <span>1211212112</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
     import { XHeader, Search, XInput, Cell, Group, XButton, Toast, CheckIcon } from 'vux'
     export default{
         components: {
             XHeader,
        XInput,
        Cell,
        Group,
        XButton,
        Toast,
        Search,
        CheckIcon
         }
     }
</script>
<style scoped>
.tit-jbxx, .fzrInfo{ border: 1px solid #cccccc;}
.tit-jbxx div,.fzrInfo div{ margin-top: 5px;margin-left: 5px;width: 100%;}
.xmbh , .xmfzrTit{margin: 10px 0;}
</style>
