
<!------------------------------------文章详情页----------------------------------------------->

<template>
  <div class="article">
    <headerbar></headerbar>
    <div class="title-h">
      <h2><b>{{title}}</b></h2>
      <h2>（深度好文）-简书</h2>
      <p class="title-p">
        <span>{{reprint}}</span>
        <span>{{time}}</span>
      </p>
      <p class="text-p" v-html="detail" ref="ssss">

      </p>
    </div>
    <bar></bar>
    <div class="myself">
      <div class="myself-bar">
        <span class="span1">推荐阅读</span>
        <span class="span2" >更多&nbsp;>>></span>
      </div>
      <zhuanti
      :xinde="xinde"></zhuanti>
    </div>
    <logo></logo>
  </div>
</template>
<script>
  import headerbar from "../common/headerbar.vue"
  import bar from "../common/bar.vue"
  import logo from "../common/logo.vue"
  import myself from "../seconedrouter/myself.vue"
  import zhuanti from "../common/zhuanti.vue"
  export default {
    name: 'article',
    components:{
      headerbar,bar,logo,myself,zhuanti
    },
    data () {
      return {
        ids:'',
        xinde:[],
        title:'',
        time:'',
        reprint:'',
        detail:''
      }
    },
    updated() {
//      console.log(this.$refs.ssss);
//      let img=document.getElementsByTagName('img');
//      console.log(img)
    },
    created(){
      this.ids=this.$route.query.ids;
      this.menu();
      let that=this;
      /*
      * 文章详情
      *参数 id
       参数	说明
        id	文章ID
        content > title	文章标题
        created_at	创建时间
        reprint	文章出处  若是为空 可填写“本站” 或者 “专本科学历网”
        hits	点击数
        detail	文章内容  html富文本
        data > title	网页title
         keywords	网页 keywords
        description	网页description
      *
      * */
      this.$http.get('/api/item/article-item.html',{params: {id: this.ids}})
        .then(function (response) {
          that.title=response.data.data.content[0].title;
          that.time=response.data.data.content[0].created_at;
          if(response.data.data.content[0].reprint){
            that.reprint=response.data.data.content[0].reprint;
          }else{
            that.reprint='专本科学历网'
          }
          that.detail=response.data.data.content[0].detail;
//          console.log(that.detail)
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    mounted(){


    },
    methods:{
      menu() {
        window.scrollTo(0,0);
      }
    }
  }
</script>
<style scoped>
  .title-h{
    padding: 0.8rem;
  }
  .title-h h2{
    color: black;
    font-size: 1.1rem;
    line-height: 1.8rem;
  }
  .title-p span{
    line-height: 2rem;
    margin-right: 1.5rem;
    font-size: 0.8rem;
    color: #888;
  }
  .text-p{
    padding: 0.5rem 0 0 0 ;
    color: #161415;
    font-size: 0.8rem;
  }
  .myself-bar{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.8rem 1rem 0 0.8rem;
  }

  .myself-bar .span1{
    color: #4887d0;
    font-family: "Microsoft YaHeikaiti";
    font-size: 1.2rem;
    font-weight: 600;
  }
  .myself-bar .span2{
    font-size: 0.8rem;
  }

</style>
