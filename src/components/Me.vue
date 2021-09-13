<!--组件Me.vue的代码-->
<template>
  <div id="div01">
    <!--    设置顶部标题-->
    <div id="h3div">
      <h3>个人中心</h3>
    </div>
<!--    设置简单的个人信息-->
    <div class="divfirst">
      <div id="imgdiv">
        <img id="img01" src="../assets/img/小男孩头像.jpg">
        <div class="divspan1">
          <div id="sname">{{myname}}</div><br>
          <div id="snumber">学号:{{number}}</div>
        </div>
      </div>
      <hr>
      <div id="divspan2">
        <span>班级</span><span class="rightSpan">{{classdata}}</span><br>
        <hr>
        <span>学校</span><span class="rightSpan">{{school}}</span>
      </div>
      <hr>
      <div id="divinput">
        <span>个人简介:</span><br>
        <textarea>{{personaldata}}</textarea>
      </div>
    </div>
    <Base/>
  </div>
</template>

<script>
    import Base from './base-template'
    export default {
        name: 'Me',
        components:{
          Base
        },
        data() {
          return {
            myname: '郭灿杰',
            number:201835020309,
            classdata:'2018级软件工程3班',
            school:'东莞城市学院',
            personaldata:'喜欢唱、跳、rap、篮球。'
          }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
<!--  设置样式-->
  #div01{
    margin:0px;
    padding:0px;
    background-color:#dedede;
  }

  /* 设置页面标题 */
  #h3div{
    text-align:center;
    background-color:white;
    width:100%;
    height:8%;
    position:fixed;
    top:0;
    left:0;
  }

  /* 设置页面信息大容器样式 */
  .divfirst{
    width:100%;
    position:fixed;
    height:80;
    left:0;
    top:8%;
    background-color:white;
    border:1px solid #ccc;
  }

  /* 设置头像姓名信息框样式 */
  #imgdiv{
    width:100%;
    height:80%;
    display:flex;
  }

  /* 设置头像样式 */
  #img01{
    width:30%;
    height:100%;
    border-radius:50%;;
    margin:5%;
  }

  /* 设置姓名学号框样式 */
  .divspan1{
    width:60%;
    height:80%;
    margin:5%;
  }
  #sname{
    font-size:30px;
  }
  #snumber{
    font-size:15px;
  }

  /* 设置左部信息样式 */
  .rightSpan{
    float:right;
  }
  hr{
    color:white;
  }
  textarea{
    margin-top:3%;
    width:100%;
    height:8em;
    font-size:15px;
  }
</style>
