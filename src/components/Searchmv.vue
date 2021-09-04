<!--组件Searchmv.vue的代码-->
<template>
  <!--    设置顶部标题-->
  <div id="div01">
    <div id="h3div">
      <div class="div01"><button class="gobutton" v-on:click="goto()"><i class="fa fa-reply" aria-hidden="true"></i></button></div>
      <div class="div02"><h3>搜索结果</h3></div>
    </div>
    <!--    用循环的方式将axios请求到的数据进行循环生成mv列表-->
    <div class="mv_all">
      <ul>
        <li v-for="(value1,index) in mvdata">
          <div class="mv_module">
            <div  class="mv_background">
              <a v-on:click="lookmv(value1.id,value1.name,value1.artistName,value1.playCount)"><img class="mv_img" :src="value1.cover"></a>
            </div>
            <span class="mv_span1">{{value1.name}}</span><br>
            <span class="mv_span2">{{value1.artistName}}&nbsp{{(value1.playCount/10000).toFixed(2)}}万</span>
          </div>
        </li>
      </ul>
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
    background-color:#dddddd;
    width:350px;
    height:40px;
    margin-top:0px;
    border:solid;
    border-color:rgba(221,221,221,1);
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
  .mv_all{
    overflow: auto;
    width:100%;
    height:500px;
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
  .gobutton{
    border:none;
  }
</style>
