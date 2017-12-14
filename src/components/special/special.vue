
<!-------------------------------------------专题列表页面-------------------------------------------->

<template>
  <div class="special">
     <headerbar></headerbar>
    <search></search>
    <footbar :titles="titles"></footbar>
    <bar></bar>
    <div class="myself-bar">
      <span class="span1">最新专题</span>
      <span class="span2">更多&nbsp;>>></span>
    </div>
    <zhuanti
    :xinde="xinde"></zhuanti>
    <logo></logo>
  </div>
</template>
<script>
  import headerbar from "../common/headerbar.vue";
  import search from "../common/Search.vue";
  import footbar from "../common/footbar.vue";
  import bar from "../common/bar.vue";
  import zhuanti from "../common/zhuanti.vue";
  import logo from "../common/logo.vue";

  export default {
    name: 'special',
    components:{
      headerbar,search,footbar,bar,zhuanti,logo
    },
    data () {
      return {
        titles:[
          {titles:'热门文章'}
        ],
        xinde:[]
      }
    },
    created(){
      this.menu();
      let that=this;
      /*
      * 热门文章
      *此接口可用于首页、自考、网教、电大、成考页面 会根据不同的分类ID 返回不同类型的热门文章
      *参数 category_id "6" 电大
       id	文章ID
      title	文章标题
      created_at	发布时间
      image	文章图片  若没有图片则自行填补上对应的图片  （可找设计）
      name	文章小类别
      *
      * */
      this.$http.get('/api/special/special-all.html',{params: {category_id: 5}})
        .then(function (response) {
          console.log(response.data.data)
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    methods:{
      menu() {
        window.scrollTo(0,0);
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
