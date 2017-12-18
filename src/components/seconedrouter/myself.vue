
<!-------------------home的二级路由--自考页面------------------->

<template>
  <div class="myself">
    <div class="myself-bar">
      <span class="span1">自考</span>
      <span class="span2" @click="pageto">更多&nbsp;>>></span>
    </div>
    <zhuanti
    :xinde="xinde"></zhuanti>
  </div>
</template>
<script>
  import zhuanti from "../common/zhuanti.vue"
  export default {
    name: 'myself',
    components:{
      zhuanti
    },
    data () {
      return {
        xinde:[]
      }
    },
    created(){
      let that=this;
      /*
      * 热门文章
      *此接口可用于首页、自考、网教、电大、成考页面 会根据不同的分类ID 返回不同类型的热门文章
      *参数 category_id "5" 自考
      *id	文章ID
      *title	文章标题
      *created_at	发布时间
      *image	文章图片  若没有图片则自行填补上对应的图片  （可找设计）
      *name	文章小类别
      * */
      this.$http.get('/api/default/hot-article.html',{params: {category_id: 5}})
        .then((response) => {
          that.xinde=response.data.data;
        })
    },
    methods:{
      pageto:function () {
        this.$router.push("/Zikao");
      },

    }
  }
</script>
<style scoped>

  .myself-bar{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.8rem 1rem 0 0.8rem;
  }

  .myself-bar .span1{
    color: #4887d0;
    font-family: "Microsoft YaHeikaiti";
    font-size: 1rem;
    font-weight: 600;
  }
  .myself-bar .span2{
    font-size: 0.7rem;
  }

</style>
