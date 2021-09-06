<!--App.vue文件代码-->
<template>
  <div id="app">
    <router-view></router-view>
<!--    将Base组件放到App.vue中-->
    <Base/>
  </div>
</template>

<script>
// 导入base-template组件，并将其命名为Base后注册到App.vue组件中
  import Base from './components/base-template'
  export default {
    name: 'App',
    components:{
      Base
    }
  }
</script>

<style>
<!--  给App.vue设置样式-->
  #app{
    margin-top:0px;
    width:100%;
    height:100%;
  }
</style>
