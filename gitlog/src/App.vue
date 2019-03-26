<template>
 <div style="height: 500px;">
   <helloWorld></helloWorld> 
  <el-steps direction="vertical" :active="1">
    <el-step title="步骤 1" description="安装node,npm,vue"></el-step>
    <el-step title="步骤 2" description="cnpm install -g vue-cli"></el-step>
    <el-step title="步骤 3" description="cnpm install -g webpack"></el-step>
    <el-step title="步骤 4" description="vue init webpack <fileName>"></el-step>
    <el-step title="步骤 5" description="cd <fileName>"></el-step>
    <el-step title="步骤 6" description="npm install"></el-step>
    <el-step title="步骤 7" description="npm run dev"></el-step>
    <el-step title="步骤 8" description="网页输入localhost:端口号"></el-step>
  </el-steps>
</div>
</template>
<script>
import helloWorld from './components/Helloworld'
  export default {
    data() {
      return{
        list:[{
          'text':"安装node,npm,vue",
          'text':"cnpm install -g webpack",
          'text':"cnpm install -g vue-cli",
          'text':"vue init webpack <fileName>",
          'text':"cd <fileName>",
          'text':"npm install",
          'text':"npm run dev",
          'text':"网页输入localhost:端口号",
        }]
      }
      
    },
    components: {
      helloWorld
    }
  };
</script>
<style>
 
</style>
