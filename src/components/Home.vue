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
    <div id="mv_all">
      <ul>
        <li v-for="(value1,index) in goods">
          <div class="mv_module">
            <div  class="mv_background">
              <a v-on:click="lookmv(value1.id,value1.name,value1.artistName,value1.playCount)"><img class="mv_img" :src="value1.cover"></a>
            </div>
            <span class="mv_span1">{{value1.name}}</span><br>
            <span class="mv_span2">{{value1.artistName}}&nbsp{{(value1.playCount/10000).toFixed(2)}}万</span>
          </div>
        </li>
      </ul>
      <div>
      </div>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*  设置组件样式*/
  #h3div{
    text-align:center;
    background-color:#dddddd;
    width:350px;
    height:60px;
    margin-top:0px;
    border:solid;
    border-color:rgba(221,221,221,1);
  }
  .search_box{
    margin-top:1%;
    width:350px;
    height:50px;
    background:#dddddd;
    border-radius:50px;
  }
  .search_input{
    width:80%;
    height:80%;
    margin-top:1.5%;
    margin-left:3%;
    background-color:#dddddd;
    border:none;
    outline:none;
  }
  .search_button{
    width:11%;
    height:35px;
    border-radius:50%;
  }
  .mv_module{
    margin-top:5px;
    margin-left:6px;
    margin-right:5px;
    padding:0px;
    display:inline-block;
    vertical-align:text-top;
    width:150px;
    height:150px;
    border:solid;
    background-size:100% 100px;
    background-repeat:no-repeat;
  }
  .mv_background{
    margin:0px;
    display:inline-block;
    vertical-align:text-top;
    width:150px;
    height:90px;
    background-size:100% 90px;
    background-repeat:no-repeat;
  }
  .mv_span1{
    display:inline-block;
    width:150px;
    height:25px;
    font-size:17px;
    overflow:hidden;
    text-overflow:ellipsis;
  }
  .mv_span2{
    display:inline-block;
    font-size:14px;
    width:150px;
    height:25px;
    color:#A9A9A9;
    overflow:hidden;
    text-overflow:ellipsis;
  }
  .mv_img{
    width:150px;
    height:90px;
  }
  ul,li{
    padding:0;margin:0;list-style:none;display:inline
  }
  #mv_all{
    margin-left:8px;
    overflow: auto;
    width:350px;
    height:440px;
  }
</style>
