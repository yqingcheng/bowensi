
<!------------------------报考指南，主要专业等table栏传值复用组件-------------------------->

<template>
  <div class="enrol">
    <div class="enroi">
      <p>{{propp[0].text}}</p>
      <ul class="enroi-guide" >
        <li v-for="(item,index) in propp[1].list":key="item.id" @click="getid(index)">
          {{item.keyword_name}}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'enrol',
    props: {
      propp: {
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
      getid(index){
        this.$router.push({
          path:'/worklist',
          query:{
            titles:"热门文章"
          }
        })
      }
    }
  }
</script>
<style scoped>
  .enroi{
    padding: 0.8rem 0.8rem 1.6rem 0.8rem;

  }
  .enroi p{
    font-family: "Microsoft YaHeikaiti";
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.1rem;
  }
  .enroi-guide{
    display: flex;
    display: -webkit-flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    font-size: 0.6rem;

  }
  .enroi-guide li{
    width: 23%;
    text-align: center;
    border-radius: 1rem;
    border: 1px solid #ccc;
    height: 1.3rem;
    line-height: 1.3rem;
    margin-top: 0.7rem;
    color: #888;
  }
  .enroi-guide li:hover{
    color: white;
    background-color: #fd576f;
  }
</style>
