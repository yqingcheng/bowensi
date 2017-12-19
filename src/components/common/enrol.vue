
<!------------------------报考指南，主要专业等table栏传值复用组件-------------------------->

<template>
  <div class="enrol">
    <div class="enroi">
      <p>报考指南</p>
      <ul class="enroi-guide" >
        <li v-for="(item,index) in list":key="item.id" @click="getid(index)">
          {{item.keyword_name}}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'enrol',
    components:{

    },
    data () {
      return {
        list:[]
      }
    },
    created(){
      let that=this;
      /*
      *报考指南
      *该关键字可点击可跳转  跳转页面是文章列表
      * keyword_name	关键字
      * */
      this.$http.get('/api/default/guide.html')
      .then((response) => {
        that.list=response.data.data
      });
    },
    methods:{
      getid(index){
        this.$router.push({
          path:'./worklist',
          query:{
            inputval:this.list[index].keyword_name
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
