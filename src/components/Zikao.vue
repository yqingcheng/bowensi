
<!-------------------------------------------自考页面-------------------------------------------->

<template>
  <div class="zikao">
    <search></search>
    <enrol></enrol>
    <bar></bar>
    <div class="footbar">
      <div class="footbar-img">
        <p><b>{{name1}}</b></p>
        <img :src="imgsrc + img1" alt="" @click="skipto">
        <span class="mores">
        <span>{{new Date(parseInt(time1) * 1000).toLocaleDateString()}}</span>
      </span>
        <div class="bar-v"></div>
      </div>
    </div>
    <bar></bar>
    <div class="myself">
      <div class="myself-bar">
        <span class="span1">自考</span>
        <span class="span2" @click="moress">更多&nbsp;>>></span>
      </div>
      <zhuanti
      :xinde="xinde"></zhuanti>
    </div>
    <bar></bar>
    <div class="footbar">
      <div class="footbar-img">
        <p><b>{{name2}}</b></p>
        <img :src="imgsrc + img2" alt="" @click="skipto">
        <span class="mores">
        <span>{{new Date(parseInt(time2) * 1000).toLocaleDateString()}}</span>
      </span>
        <div class="bar-v"></div>
      </div>
    </div>
    <logo></logo>
  </div>
</template>
<script>
  import search from "./common/Search.vue";
  import enrol from "./common/enrol.vue";
  import bar from "./common/bar.vue";
  import myself from "./seconedrouter/myself.vue";
  import logo from "./common/logo.vue";
  import zhuanti from "./common/zhuanti.vue";
  export default {
    name: 'zikao',
    components:{
      search,enrol,bar,myself,logo,zhuanti
    },
    data () {
      return {
        imgsrc:domain.testUrl,
        xinde:[],
        titles:[
          {titles:'自考文章'}
        ],
        speciallist:[],
        name1:'',
        name2:'',
        img1:'',
        img2:'',
        time1:'',
        time2:''
      }
    },
    created(){
      this.menu();
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
        });
      /*
     * 自考热门专题*/
      this.$http.get('/api/default/hot-special.html',{params: {category_id: 5}})
        .then((response) => {
          that.speciallist=response.data.data;
          that.name1=response.data.data[0].name;
          that.name2=response.data.data[1].name;
          that.img1=response.data.data[0].image;
          that.img2=response.data.data[1].image;
          that.time1=response.data.data[0].create_time;
          that.time2=response.data.data[1].create_time;
        });
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
            titles:'自考文章',
            categoryid:5
          }
        })
      },
      skipto(){
        this.$router.push({
          path:'/worklist',
          query:{
            categoryid:'5'
          }
        })
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
