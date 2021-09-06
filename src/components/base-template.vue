<!--组件base-template.vue的代码-->
<template>
<!--  设置三个底部图标，设置监听动态改变颜色-->
      <div id="base-template">
        <div class="div01"  v-on:click="toHome()">
          <div><i v-bind:class="{redcolor:activeHome}" class="fa fa-music"></i></div>
          <div v-bind:class="{redcolor: activeHome}">首页</div>
        </div>
        <div class="div01" v-on:click="toSearch()">
          <div><i v-bind:class="{redcolor: activeSearch}" class="fa fa-search"></i></div>
          <div v-bind:class="{redcolor: activeSearch}">发现</div>
        </div>
        <div class="div01" v-on:click="toMe()">
          <div><i v-bind:class="{redcolor: activeMe}" class="fa fa-user"></i></div>
          <div v-bind:class="{redcolor: activeMe}">我</div>
        </div>
      </div>
</template>


// JavaScript脚本
<script>
    export default {
      name: 'Base',
      data(){
          return{
            activeHome:true,
            activeSearch:false,
            activeMe:false
          }
      },
      methods:{
        toHome:function(){
          this.$router.push('/Home')
          this.activeHome=true
          this.activeSearch=false
          this.activeMe=false
          },
        toSearch:function(){
          this.$router.push('/Search')
          this.activeHome=false
          this.activeSearch=true
          this.activeMe=false
        },
        toMe:function(){
          this.$router.push('/Me')
          this.activeHome=false
          this.activeSearch=false
          this.activeMe=true
        }
      }
    }
</script>


// CSS脚本
<style>
  body{
    padding:0;
    margin:0;
    background-color:#dedede;
  }
  #base-template{
    background-color:white;
    width:100%;;
    height:8%;;
    position:fixed;
    bottom:0px;
    left:0;
    display:flex;
  }
  .div01{
    flex:1;
    height:100%;
    text-align:center;
  }
  .redcolor{
    color:red;
  }

</style>
