<!--组件Searchmv.vue的代码-->
<template>
  <!--    设置顶部标题-->
  <div id="div01">
    <div id="h3div">
      <div class="div01"><button class="gobutton" v-on:click="goto()"><i class="fa fa-reply" aria-hidden="true"></i></button></div>
      <div class="div02"><h3>搜索结果</h3></div>
    </div>
    <!--    用循环的方式将axios请求到的数据进行循环生成mv列表-->
    <div class="moduleTitle">搜索结果:</div>
    <div class="all_module">
      <a class="mv_detail" v-for="(value1,index) in mvdata" :key="index" v-on:click="lookmv(value1.id,value1.name,value1.artistName,value1.playCount)">
        <div class="mv_imgbox">
          <img class="mv_img" :src="value1.cover">
        </div>
        <div class="mv_content">
          <div class="mv_name">{{value1.name}}</div>
          <div class="mv_author">{{value1.artistName}}</div>
        </div>
      </a>
    </div>
    <div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Searchmv',
    //设置参数，用于接收数据
    data() {
      return {
        searchdata: '',
        mvdata:[],

      }
    },
    methods:{
      //设置lookmv方法进行观看转跳并传递参数
      lookmv:function(id,name,artistname,playcount){
        this.$router.push({
          name:'Lookmv',
          params:{
            id:id,
            name:name,
            artistname:artistname,
            playcount:playcount
          }
        })
      },
      //设置方法进行路由返回
      goto:function(){
        this.$router.go(-1)
      }
    },
    //组件一挂载便发生axios请求并渲染组件元素
    mounted(){
      this.searchdata=this.$route.params.searchdata
      this.$axios({
        url:'http://localhost:3000/search/?keywords='+this.searchdata,
        params:{
          type:1004
        }
      }).then(res=>{
          this.mvdata=res.data.result.mvs
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*设置样式*/
  #h3div{
    /*text-align:center;*/
    text-align:center;
    background-color:white;
    width:100%;
    height:8%;
    position:fixed;
    top:0;
    left:0;
  }
  .div01{
    margin-left:4px;
    padding:0px;
    display:inline-block;
    width:30px;
    height:100%;
  }
  .div02{
    margin:0px;
    padding:0px;
    display:inline-block;
    width:70%;
    height:100%;
    text-align:center;
  }
  .moduleTitle{
    position:fixed;
    top:8%;
    left:0;
    width:100%;
    height:5%;
    padding-top:3%;
  }

  .all_module{
    position:fixed;
    top:14%;
    right:0;
    width:100%;
    height:75%;
    overflow-y:auto;
    display:flex;
    flex-wrap:wrap;
    background-color: white;
    border-top: solid;
  } 
  
  /* 设置单个mv模块样式 */
  .mv_detail{
    display:block;
    width:46%;
    height:28%;
    margin:2%;
    background-color:white;
  }
  .mv_imgbox{
    width:100%;
    height:60%;
  }
  .mv_img{
    width:100%;
    height:100%;
  }
  .mv_content{
    width:100%;
    height:40%;
  }
  .mv_name{
    width:100%;
    height:45%;
    overflow: hidden;
    white-space:normal;
    text-overflow:ellipsis;
  }
  .mv_author{
    width:100%;
    height:40%;  
    overflow: hidden;
    white-space:normal;
    text-overflow:ellipsis;
  }
</style>
