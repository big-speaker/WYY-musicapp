<!--组件Home.vue代码-->
<template>
  <div id="div01">

<!--    设置顶部标题-->
    <div id="h3div">
      <h3>首页</h3>
    </div>

<!--    创建搜索框-->
    <div class="search_box">
      <input class="search_input" type="search" v-model="searchdata" placeholder="搜索MV">
      <button class="search_button" type="submit" v-on:click="search()"><i class="fa fa-search" aria-hidden="true"></i></button>
    </div>

<!--    用循环的方式将axios请求到的数据进行循环生成mv列表-->
    <div class="moduleTitle">MV列表:</div>
    <div class="all_module">
      <a class="mv_detail" v-for="(value1,index) in goods" :key="index" v-on:click="lookmv(value1.id,value1.name,value1.artistName,value1.playCount)">
        <div class="mv_imgbox">
          <img class="mv_img" :src="value1.cover">
        </div>
        <div class="mv_content">
          <div class="mv_name">{{value1.name}}</div>
          <div class="mv_author">{{value1.artistName}}</div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
      name: 'Home',
      data() {
        return {
          searchdata:'',
          goods:[]
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
          url:'http://localhost:3000/mv/all'
        }).then(res=>{
          this.goods=res.data.data
        })
      }
    }
</script>


// 设置样式
<style scoped>
  body{
    padding:0;
    margin:0
  }
  #div01{
    width:100%;
    height:100%;
  }

  /* 设置首页标题样式 */
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

  /* 设置标题样式 */
  .moduleTitle{
    position:fixed;
    top:14%;
    left:0;
    width:100%;
    height:5%;
  }

  /* 设置所有mv模块样式 */
   .all_module{
    position:fixed;
    top:19%;
    right:0;
    width:100%;
    height:75%;
    overflow-y:auto;
    display:flex;
    flex-wrap:wrap;
    background-color: white;
    border-top:solid;
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
