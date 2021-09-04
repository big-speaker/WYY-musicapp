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
          <span id="sname">{{myname}}</span><br>
          <span id="snumber">学号:{{number}}</span>
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
  </div>
</template>

<script>
    export default {
        name: 'Me',
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
  }
  #h3div{
    text-align:center;
    background-color:#dddddd;
    width:350px;
    height:60px;
    margin-top:0px;
    border:solid;
    border-color:rgba(221,221,221,1);
  }
  #imgdiv{
    height:90px;
    margin-top:20px;
    margin-left:20px;
    margin-bottom:10px;
  }
  #img01{
    width:80px;
    height:80px;
    border-radius:80px;
    margin:0px;
  }
  .divspan1{
    display:inline-block;
    width:200px;
    height:90px;
    margin-left:30px;
  }
  .divfirst{
    width:350px;
  }
  #sname{
    display:block;
    top:5px;
    font-size:30px;
  }
  #snumber{
    display:block;
    bottom:0px;
    font-size:15px;
  }
  .rightSpan{
    float:right;
  }
  hr{
    color:#dddddd;
  }
  textarea{
    margin-top:5px;
    width:350px;
    height:8em;
    font-size:15px;
  }
</style>
