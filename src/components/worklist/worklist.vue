
<!-------------------------------------------文章列表页面-------------------------------------------->

<template>
  <div class="worklist">
    <headerbar></headerbar>
    <h2 class="worklist-title">{{titles}}</h2>
    <zhuanti
      :xinde="xinde"></zhuanti>
    <logo></logo>
  </div>
</template>
<script>
  import headerbar from "../common/headerbar.vue";
  import zhuanti from "../common/zhuanti.vue";
  import logo from "../common/logo.vue";

  export default {
    name: 'worklist',
    components:{
      headerbar,zhuanti,logo
    },
    data () {
      return {
        titles:"",
        xinde:[]
      }
    },
    created(){
      this.menu();
      let that=this;
      this.titles=this.$route.query.titles;
      /*
      * 热门文章
      *此接口可用于首页、自考、网教、电大、成考页面 会根据不同的分类ID 返回不同类型的热门文章
      *参数 category_id "5" 自考
       id	文章ID
      title	文章标题
      created_at	发布时间
      image	文章图片  若没有图片则自行填补上对应的图片  （可找设计）
      name	文章小类别
      *
      * */
      if(this.titles==='热门文章'){
        this.$http.get('/api/list/article-list.html',{params: {category_id: 5}})
          .then(function (response) {
            response.data.data.data.forEach((item) => {
              that.xinde.push(item)
            });
          });

        this.$http.get('/api/list/article-list.html',{params: {category_id: 6}})
          .then(function (response) {
            response.data.data.data.forEach((item) => {
              that.xinde.push(item)
            });
          });

        this.$http.get('/api/list/article-list.html',{params: {category_id: 7}})
          .then(function (response) {
            response.data.data.data.forEach((item) => {
              that.xinde.push(item)
            });
          });

        this.$http.get('/api/list/article-list.html',{params: {category_id: 8}})
          .then(function (response) {
            response.data.data.data.forEach((item) => {
              that.xinde.push(item)
            });
          });

      }else if(this.titles==='自考文章'){
        this.$http.get('/api/list/article-list.html',{params: {category_id: 5}})
          .then(function (response) {
            response.data.data.data.forEach((item) => {
              that.xinde.push(item)
            });
          });
      }else if(this.titles==='电大文章'){
        this.$http.get('/api/list/article-list.html',{params: {category_id: 6}})
          .then(function (response) {
            response.data.data.data.forEach((item) => {
              that.xinde.push(item)
            });
          });
      }else if(this.titles==='网教文章'){
        this.$http.get('/api/list/article-list.html',{params: {category_id: 7}})
          .then(function (response) {
            response.data.data.data.forEach((item) => {
              that.xinde.push(item)
            });
          });
      }else if(this.titles==='成考文章'){
        this.$http.get('/api/list/article-list.html',{params: {category_id: 8}})
          .then(function (response) {
            response.data.data.data.forEach((item) => {
              that.xinde.push(item)
            });
          });
      }

    },
    mounted(){

    },
    methods:{
      menu() {
        window.scrollTo(0,0);
      },
    }
  }
</script>
<style scoped>
  .worklist-title{
    font-size: 1rem;
    margin-top: 0.8rem;
    margin-left: 0.8rem;
  }
</style>
