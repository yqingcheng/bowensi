
<!-----------------------------底部超人归来专题------------------------>

<template>
  <div class="footbar">
    <div class="footbar-img">
      <p><b>依托互联网数据资源和自然语言处理技术优势</b></p>
      <img src="../../../static/images/logoimg.jpg" alt="">
      <span>2017/05/03</span>
      <div class="bar-v"></div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'footbar',
    components:{

    },
    data () {
      return {

      }
    }
  }
</script>
<style scoped>
  .footbar-img p{
    color: #1769c6;
    margin-bottom: 1rem;
    font-size: 0.8rem;
    line-height: 0.9rem;
  }
  .footbar-img{
    padding: 0.8rem 1rem 0 0.8rem;
  }
  .footbar-img img{
    width: 100%;
    height: 9.3rem;
  }
  .footbar-img span{
    color: #cccccc;
    font-size: 0.7rem;

    /*margin-top: -0.2rem;*/
    display: block;
  }
  .bar-v{
    width: 100%;
    height: 0.1rem;
    background: #f1f1f1;
    margin-top: 0.7rem;
  }

</style>
