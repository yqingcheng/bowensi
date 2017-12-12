
<!-----------------------------底部超人归来专题------------------------>

<template>
  <div class="footbar">
    <div class="footbar-img">
      <p><b>依托互联网数据资源和自然语言处理技术优势</b></p>
      <img src="../../../static/images/logoimg.jpg" alt="" @click="skipto">
      <span class="mores">
        <span>2017/05/03</span>
      </span>
      <div class="bar-v"></div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'footbar',
    props: {
      xinde: {
        type: Array,
        required: true
      }
    },
    components:{

    },
    data () {
      return {

      }
    },
    methods:{
      skipto(){
        console.log(this.xinde);
        this.$router.push({
          path:'/worklist',
          query:{
            titles:this.xinde[0].title,
            xindes:this.xinde
          }
        })
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
  .mores{
    color: #ccc;
    font-size: 0.7rem;
  }

  .bar-v{
    width: 100%;
    height: 0.1rem;
    background: #f1f1f1;
    margin-top: 0.7rem;
  }


</style>
