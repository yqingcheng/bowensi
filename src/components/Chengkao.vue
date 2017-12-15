
<!--------------------------------成考页面------------------------------------------>

<template>
  <div class="chengkao">
    <search></search>
    <enrol
    :propp="propp"></enrol>
    <bar></bar>
    <footbar :titles="titles"></footbar>
    <bar></bar>
    <div class="myself">
      <div class="myself-bar">
        <span class="span1">成考</span>
        <span class="span2" @click="moress">更多&nbsp;>>></span>
      </div>
      <zhuanti
      :xinde="xinde"></zhuanti>
    </div>
    <bar></bar>
    <footbar :titles="titles"></footbar>
    <logo></logo>
  </div>
</template>
<script>
  import search from "./common/Search.vue";
  import enrol from "./common/enrol.vue";
  import bar from "./common/bar.vue";
  import footbar from "./common/footbar.vue";
  import myself from "./seconedrouter/myself.vue";
  import logo from "./common/logo.vue";
  import zhuanti from "./common/zhuanti.vue";
  export default {
    name: 'chengkao',
    components:{
      search,enrol,bar,footbar,myself,logo,zhuanti
    },
    data () {
      return {
        propp:[
          {text:"主要专业"},
          {
            list:[
              {"zhinan":"招生简章"},
              {"zhinan":"热门专业"},
              {"zhinan":"考试报名"},
              {"zhinan":"考试时间"},
              {"zhinan":"证书查询"},
              {"zhinan":"院校推荐"},
              {"zhinan":"招生简章"},
              {"zhinan":"录取分数线"}

            ]
          }
        ],
        xinde:[],
        titles:[
          {
            titles:'成考文章'
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
      *参数 category_id "8" 成考
       id	文章ID
      title	文章标题
      created_at	发布时间
      image	文章图片  若没有图片则自行填补上对应的图片  （可找设计）
      name	文章小类别
      *
      * */
      this.$http.get('/api/default/hot-article.html',{params: {category_id: 8}})
        .then((response) => {
          that.xinde=response.data.data;
        })
    },
    methods:{
      menu() {
        window.scrollTo(0,0);
      },
      /*跳转到专题列表*/
      moress(){
        this.$router.push('/special')
      }
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
