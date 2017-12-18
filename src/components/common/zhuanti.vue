
<!----------------------------专题列，传值复用组件----------------------------->

<template>
  <div class="zhuanti">
    <div class="myself-list" >
      <div class="xinde" v-for="(item,index) in xinde":key="item.id" @click="JumpDetails(index)">
        <div class="ss">
          <p class="texxx">{{item.title}}</p>
          <p class="xinde-fn">
            <span><b>{{item.name}}</b></span>
            <span>{{new Date(parseInt(item.created_at) * 1000).toLocaleDateString()}}</span>
          </p>
        </div>
        <img :src="item.image" alt="">
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'zhuanti',
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
      JumpDetails(index){
        this.$router.push({
          path:'/article',
          query:{
            ids:this.xinde[index].id
          }
        });
      },
    }

  }
</script>
<style scoped>
  .xinde{
    display: flex;
    padding: 0.8rem 1rem 0.92rem 0.8rem;
    border-bottom: 1px solid #ccc;
    align-items: center;
    justify-content: space-between;

  }
  .texxx{
    font-size: 0.8rem;
    padding: 0 0.5rem 0 0;

  }
  .xinde .ss{
    flex: 0 1 12rem;
    /*width: 10rem;*/

  }
  .xinde .ss p:first-child{
    line-height: 1rem;
  }
  .xinde img{

    width: 6.5rem;
    height: 3.8rem;
    display: block;
  }

  .xinde .xinde-fn span:nth-child(1){
    color: #1769c6;
    font-size: 0.7rem;

  }
  .xinde .xinde-fn span{
    display: inline-block;
    margin-top: 1rem;
    line-height: 1rem;
    float: left;
  }
  .xinde .xinde-fn span:nth-child(2){
    color: #cccccc;
    font-size: 0.7rem;
    float: right;
    margin-right: 1rem;
  }
</style>
