<!--组件Lookmv.vue的代码-->
<template>
  <div id="div01">
    <!--    设置顶部标题-->
    <div id="h3div">
      <div class="div01"><button class="gobutton" v-on:click="goto()"><i class="fa fa-reply" aria-hidden="true"></i></button></div>
      <div class="div02"><h3>MV详情</h3></div>
    </div>
<!--    设置播放-->
    <video :src="urldata" controls></video>
    <hr>
<!--    设置mv详细信息-->
    <div class="divspan">
      <div style="text-align:center">
        <span style="font-size:25px">{{name}}</span>
      </div>
      <div>
        <span class="leftspan">歌手:&nbsp;&nbsp{{artistname}}</span><span class="rightspan">播放:&nbsp;&nbsp{{(playcount/10000).toFixed(2)}}万</span>
      </div>
    </div>
    <hr>
<!--    用循环设置评论-->
    <span>评论区</span>
    <hr>
    <div class="mv_all">
      <ul>
        <li v-for="(value1,index) in comments">
          <div class="mv_comments">
            <div comment_user>
              <img :src="value1.user.avatarUrl"><span class="user_name">{{value1.user.nickname}}</span>
            </div>
            <br>
            <span class="comments_content">{{value1.content}}</span>
            <hr>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Lookmv',
    //设置参数，用于接收数据
    data() {
      return {
        urldata: '',
        id:'',
        name:'',
        artistname:'',
        playcount:'',
        comments:[]
      }
    },
    //设置方法进行路由返回
    methods:{
      goto:function(){
        this.$router.go(-1)
      }
    },
    //用钩子函数将接收的参数赋值给组件参数
    mounted(){
      this.id=this.$route.params.id
      this.name=this.$route.params.name
      this.artistname=this.$route.params.artistname
      this.playcount=this.$route.params.playcount
      //用axios进行数据请求
      this.$axios({
        url:'http://localhost:3000/comment/mv?id='+this.id
      }).then(res=>{
        this.comments=res.data.comments
      })
      this.$axios({
        url:'http://localhost:3000/mv/url?id='+this.id
      }).then(res=>{
        this.urldata=res.data.data.url
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
  video{
    width:350px;
    height:200px;
  }
  img{
    width:40px;
    height:40px;
    border-radius:40px;
    margin:0px;
  }
  .user_name{
    font-size:13px;
  }
  .comments_content{
    font-size:17px;
  }
  ul,li{
    padding:0;margin:0;list-style:none;display:inline
  }
  .mv_all{
    overflow: auto;
    width:350px;
    height:190px;
  }
  .leftspan{
    color:deepskyblue;
  }
  .rightspan{
    color:rosybrown;
    float:right;
  }
  .divspan{
    width:350px;
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
