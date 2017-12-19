
<!-----------------------------底部超人归来专题------------------------>

<template>
  <div class="footbar">
    <div class="footbar-img">
      <p><b>{{speciallist[0].name}}</b></p>
      <img :src="imgsrc + speciallist[0].image" alt="" @click="skipto">
      <span class="mores">
        <span>{{new Date(parseInt(speciallist[0].create_time) * 1000).toLocaleDateString()}}</span>
      </span>
      <div class="bar-v"></div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'footbar',
    props: {
      titles: {
        type: Array,
        required: true
      },
      speciallist:{
        type: Array,
        required: true
      },
      categoryid:{
        type: Array,
        required: true
      }
    },
    components:{

    },
    data () {
      return {
        imgsrc:domain.testUrl
      }
    },

    methods:{
      skipto(){
        this.$router.push({
          path:'/worklist',
          query:{
            categoryid:this.categoryid[0].categoryid
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
