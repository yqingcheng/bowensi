
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
      * 判断 热门文章列表，自考文章列表，电大文章列表，网教文章列表，成考文章列表
      * 根绝不同分类ID获取不同数据
      * */
      if(this.titles==='热门文章'){
        this.$http.get('/api/list/article-list.html',{params: {category_id: 5}})
          .then((response) => {
            response.data.data.data.forEach((item) => {
              that.xinde.push(item)
            });
          });

        this.$http.get('/api/list/article-list.html',{params: {category_id: 6}})
          .then((response) => {
            response.data.data.data.forEach((item) => {
              that.xinde.push(item)
            });
          });

        this.$http.get('/api/list/article-list.html',{params: {category_id: 7}})
          .then((response) => {
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
          .then((response) => {
            response.data.data.data.forEach((item) => {
              that.xinde.push(item)
            });
          });
      }else if(this.titles==='电大文章'){
        this.$http.get('/api/list/article-list.html',{params: {category_id: 6}})
          .then((response) => {
            response.data.data.data.forEach((item) => {
              that.xinde.push(item)
            });
          });
      }else if(this.titles==='网教文章'){
        this.$http.get('/api/list/article-list.html',{params: {category_id: 7}})
          .then((response) => {
            response.data.data.data.forEach((item) => {
              that.xinde.push(item)
            });
          });
      }else if(this.titles==='成考文章'){
        this.$http.get('/api/list/article-list.html',{params: {category_id: 8}})
          .then((response) => {
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
