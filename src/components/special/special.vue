
<!-------------------------------------------专题列表页面-------------------------------------------->

<template>
  <div class="special">
     <headerbar></headerbar>
    <search></search>
    <footbar :titles="titles" :speciallist="speciallist" :categoryid="categoryid"></footbar>
    <bar></bar>
    <div class="myself-bar">
      <span class="span1">最新专题</span>
    </div>
    <ul class="special-list">
      <li v-for="(item,index) in list":key="item.id" @click="skipSpecialList(index)">
        <div>
          <p>{{item.name}}</p>
          <p>{{item.update_time}}</p>
        </div>
        <img :src="imgsrc+item.image" alt="">
      </li>
    </ul>
    <logo></logo>
  </div>
</template>
<script>
  import headerbar from "../common/headerbar.vue";
  import search from "../common/Search.vue";
  import footbar from "../common/footbar.vue";
  import bar from "../common/bar.vue";
  import logo from "../common/logo.vue";

  export default {
    name: 'special',
    components:{
      headerbar,search,footbar,bar,logo
    },
    data () {
      return {
        imgsrc:domain.testUrl,
        titles:[
          {
            titles:this.$route.query.titles
          }
        ],
        speciallist:[
          {
            speciallist:{}
          }
        ],
        categoryid:[
          {
            categoryid:this.$route.query.categoryid
          }
        ],
        list:[]
      }
    },
    created(){
      this.menu();
      let that=this;
      /*
      * 网教热门专题*/
      this.$http.get('/api/default/hot-special.html',{params: {category_id: this.categoryid[0].categoryid}})
        .then((response) => {
          that.speciallist=response.data.data;
        });
      /*
      *专题列表
      *此接口可用于首页、自考、网教、电大、成考页面 会根据不同的分类ID 返回不同类型的热门文章
      *参数 category_id "6" 电大
      * id	文章ID
      *title	文章标题
      *created_at	发布时间
      *image	文章图片  若没有图片则自行填补上对应的图片  （可找设计）
      *name	文章小类别
      * */
      this.$http.get('/api/special/special-all.html')
        .then((response) => {
          that.list=response.data.data.data;
        });
    },
    methods:{
      menu() {
        window.scrollTo(0,0);
      },
      skipSpecialList(index){
        this.$router.push({
          path:'/speciallist',
          query:{
            qule:this.list[index]
          }
        })
      }
    }
  }
</script>
<style scoped>
  .myself-bar{
    padding: 1rem 1rem 0 1rem;
  }
  .myself-bar .span1{
    color: #4887d0;
    font-family: "Microsoft YaHeikaiti";
    font-size: 1.2rem;
    font-weight: 600;
  }
  .special-list li{
    border-bottom: 1px solid #ddd;
    padding: 1rem;
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
  .special-list li img{
    width: 6.5rem;
    height: 3.8rem;
    display: block;
  }
  .special-list li p:nth-child(1){
    color: indianred;
    font-size: 1rem;
  }
  .special-list li p:nth-child(2){
    color: #bbb;
    font-size: 0.7rem;
  }
  .special-list li div{
    width: 12rem;
  }
</style>
