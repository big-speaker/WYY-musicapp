<!--组件Search.vue的代码-->
<template>
  <div id="div01">
    <!--    设置顶部标题-->
    <div id="h3div">
      <h3>发现</h3>
    </div>
    <!--    创建搜索框-->
    <div class="search_box">
      <input class="search_input" type="search" v-model="searchdata" placeholder="搜索MV">
      <button class="search_button" type="submit" v-on:click="search()"><i class="fa fa-search" aria-hidden="true"></i></button>
    </div>
    <div id="mv_all">
    <p class="p01">最新MV:</p>
      <!--    用循环的方式将axios请求到的数据进行循环生成mv列表-->
    <div class="newmv_list">
        <a v-for="(value1,index) in newmv" :key="index" v-on:click="lookmv(value1.id,value1.name,value1.artistName,value1.playCount)">
          <div class="mv_module">
            <div  class="mv_imgbox">
              <img class="mv_img" :src="value1.cover">
            </div>
            <div class="mv_content">
              <div class="mv_name">{{value1.name}}</div>
              <div class="mv_author">{{value1.artistName}}</div>
            </div>
          </div>
        </a>
    </div>
    <p class="p02">热门MV推荐:</p>
    <div class="recommendmv_list">
        <a v-for="(value1,index) in recommendmv" :key="index" v-on:click="lookmv(value1.id)">
          <div class="mv_module">
            <div  class="mv_imgbox">
              <img class="mv_img" :src="value1.picUrl">
            </div>
            <div class="mv_content">
              <div class="mv_name">{{value1.name}}</div>
              <div class="mv_author">{{value1.artistName}}</div>
            </div>
          </div>
        </a>
    </div>
    <p class="p03">MV排行:</p>
    <div class="topmv_list">
        <a v-for="(value1,index) in topmv" :key="index" v-on:click="lookmv(value1.id)">
          <div class="mv_module">
            <div  class="mv_imgbox">
              <img class="mv_img" :src="value1.cover">
            </div>
            <div class="mv_content">
              <div class="mv_name">{{value1.name}}</div>
              <div class="mv_author">{{value1.artistName}}</div>
            </div>
          </div>
        </a>
    </div>
    </div>
    <Base/>
  </div>
</template>

<script>
    import Base from './base-template'
    export default {
        name: 'Search',
        components:{
          Base
        },
        data() {
            return {
              searchdata:'',
              newmv:[],
              recommendmv:[],
              topmv:[]
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
        //设置search方法进行搜索转跳并传递参数
        search:function(){
          this.$router.push({
            name:'Searchmv',
            params:{
              searchdata:this.searchdata,
            }
          })
        }
      },
      //组件一创建便发生axios请求并渲染组件元素
      created(){
        this.$axios({
          url:'http://localhost:3000/mv/first?limit=10'
        }).then(res=>{
          this.newmv=res.data.data
        })
        this.$axios({
          url:'http://localhost:3000/personalized/mv'
        }).then(res=>{
          this.recommendmv=res.data.result
        })
        this.$axios({
          url:'http://localhost:3000/top/mv?limit=10'
        }).then(res=>{
          this.topmv=res.data.data
        })
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body{
    padding:0;
    margin:0
  }
  #div01{
    width:100%;
    height:100%;
  }

  /* 设置标题样式 */
  #h3div{
    text-align:center;
    background-color:white;
    width:100%;
    height:8%;
    position:fixed;
    top:0;
    left:0;
  }

    /* 设置搜索框样式 */
  .search_box{
    width:100%;
    height:5%;
    position:fixed;
    top:8%;
    left:0;
    background-color:white;
    display:flex;
  }

   /* 设置搜索输入框样式 */
  .search_input{
    flex:6;
    height:100%;
    background-color:white;
    border:none;
    outline:none;
    border:solid;
  }

  /* 设置搜索按钮样式 */
  .search_button{
    flex:1;
    height:100%;
    border:solid;
  }
  div,a,img{
    padding:0;
    margin:0;
    border:0;
  }

  /* 设置所有mv模块样式 */
  #mv_all{
    position:fixed;
    padding:0;
    top:14%;
    right:0;
    left:0;
    width:100%;
    height:75%;
    overflow-y:auto;
    display:flex;
    flex-wrap:wrap;
  }

  /* 设置模块标题样式 */
  .p01{
    display:block;
    width:100%;
    height:6%;
    margin:0;
  }

  /* 设置单个模块列表样式 */
  .newmv_list{
    border:solid;
    width:100%;
    height:30%;
    overflow: hidden;
    overflow-x:auto;
    white-space: nowrap;
    position:absolute;
    top:6%;
    background-color: white;
  }
  .p02{
    display:block;
    width:100%;
    height:6%;
    position:absolute;
    top:35%;
    border-top:solid;
  }
  .recommendmv_list{
    border:solid;
    width:100%;
    height:30%;
    overflow: hidden;
    overflow-x:auto;
    white-space: nowrap;
    position:absolute;
    top:46%;
    background-color: white;
  }
  .p03{
    display:block;
    width:100%;
    height:6%;
    position:absolute;
    top:75%;
    border-top:solid;
  }
  .topmv_list{
    border:solid;
    width:100%;
    height:30%;
    overflow: hidden;
    overflow-x:auto;
    white-space: nowrap;
    position:absolute;
    top:86%;
    background-color: white;
  }

  /* 设置单个mv模块样式 */
  .mv_module{
    margin:2%;
    padding:0px;
    display:inline-block;
    vertical-align:text-top;
    width:20vh;
    height:96%;
    background-color: white;
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
    text-overflow:ellipsis;
  }
  .mv_author{
    width:100%;
    height:40%;
    overflow: hidden;
    text-overflow:ellipsis;
  }

</style>
