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
    <div class="mvdetail">
      <div class="mv_name">
        <span>{{name}}</span>
      </div>
      <div class="mv_data">
        <span class="left_author">歌手:&nbsp;&nbsp;{{artistname}}</span><span class="rightspan">播放:&nbsp;&nbsp;{{(playcount/10000).toFixed(2)}}万</span>
      </div>
    </div>
    <hr>
<!--    用循环设置评论-->
    <div class="comment_title">评论区:</div>
    <hr>
    <div class="all_comment">
        <div class="comment_detail" v-for="(value1,index) in comments" :key="index">
          <div class=comment_user>
            <img :src="value1.user.avatarUrl"><div class="user_name">{{value1.user.nickname}}</div>
          </div>
          <div class="comments_content">{{value1.content}}</div>
        </div>
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

/* 设置标题按钮盒子样式 */
  #h3div{
    background-color:white;
    width:100%;
    height:8%;
    position:fixed;
    top:0;
    left:0;
    display:flex;
    border-bottom:solid;
  }

  /* 设置按钮样式 */
  .div01{
    margin-left:4px;
    padding:0px;
    flex:1;
    height:100%;
  }

  /* 设置标题样式 */
  .div02{
    padding-left:28%;
    background-color:white;
    flex:8;
    height:100%;
  }

  /* 设置视频样式 */
  video{
    width:100%;
    height:35%;
    position:fixed;
    top:7%;
    left:0;
  }

  /* 设置mv详细信息设置 */
  .mvdetail{
    width:100%;
    height:10%;
    position:fixed;
    top:41.5%;
    left:0;
    border-bottom:solid;
  }
  /* 设置mv名样式 */
  .mv_name{
    width:100%;
    height:55%;
    font-size:150%;
  }
  /* 设置mv歌手和播放量盒子样式 */
  .mv_data{
    width:100%;
    height:45%;
  }
  .left_author{
    color:deepskyblue;
  }
  .rightspan{
    color:rosybrown;
    float:right;
  }
  .comment_title{
    width:100%;
    height:4%;
    position:fixed;
    left:0;
    top:52%;
    border-bottom:solid;
  }
  .all_comment{
    width:100%;
    height:40%;
    position:fixed;
    left:0;
    top:56%;
    overflow:scroll;
  }
  .comment_detail{
    width:100%;
    height:50%;
    border-bottom:solid;
    border-left:solid;
  }
  .comment_user{
    width:100%;
    height:50%;
    display:flex;
  }
  .comment_user img{
    width:17%;
    height:80%;
    margin:2%;
    border-radius: 50%;;
  }
  .user_name{
    margin-top:10%;
    width:83%;
    height:50%;
  }
</style>
