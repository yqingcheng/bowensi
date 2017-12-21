
<!--------------------------------------网教页面---------------------------------------------->

<template>
  <div class="wangjiao">
    <search></search>
    <div class="myself">
      <div class="myself-bar">
        <span class="span1">网教</span>
        <span class="span2" @click="moress">更多&nbsp;>>></span>
      </div>
      <zhuanti
      :xinde="xinde"></zhuanti>
    </div>
    <bar></bar>
    <footbar :titles="titles" :speciallist="speciallist" :categoryid="categoryid"></footbar>
    <logo></logo>
  </div>
</template>
<script>
  import myself from "./seconedrouter/myself.vue";
  import bar from "./common/bar.vue";
  import search from "./common/Search.vue";
  import footbar from "./common/footbar.vue";
  import logo from "./common/logo.vue";
  import zhuanti from "./common/zhuanti.vue";
  export default {
    name: 'wangjiao',
    components:{
      search,myself,logo,footbar,bar,zhuanti
    },
    data () {
      return {
        xinde:[],
        titles:[
          {
            titles:'网教文章'
          }
        ],
        speciallist:[
          {
            speciallist:{}
          }
        ],
        categoryid:[
          {
            categoryid:'7'
          }
        ]
      }
    },
    created(){
      this.menu();
      let that=this;
      /*
       * 热门文章
       *此接口可用于首页、自考、网教、电大、成考页面 会根据不同的分类ID 返回不同类型的热门文章
       *参数 category_id "7" 网教
       *id	文章ID
       *title	文章标题
       *created_at	发布时间
       *image	文章图片  若没有图片则自行填补上对应的图片  （可找设计）
       *name	文章小类别
       * */
      this.$http.get('/api/default/hot-article.html',{params: {category_id: 7}})
        .then((response) => {
          that.xinde=response.data.data;
        });
      /*
      * 网教热门专题*/
      this.$http.get('/api/default/hot-special.html',{params: {category_id: 7}})
        .then((response) => {
          that.speciallist=response.data.data;
        })
    },
    methods:{
      menu() {
        window.scrollTo(0,0);
      },
      /*跳转到专题列表*/
      moress(){
        this.$router.push({
          path:'/special',
          query:{
            titles:'网教文章',
            categoryid:7
          }
        })
      },
    }
  }
</script>
<style scoped>
  .myself-bar{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1rem 0 1rem;
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
