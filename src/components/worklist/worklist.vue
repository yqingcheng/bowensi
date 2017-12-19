
<!-------------------------------------------文章列表页面-------------------------------------------->

<template>
  <div class="worklist">
    <headerbar></headerbar>
    <h2 class="worklist-title">{{msg}}</h2>
    <!--<p id="nodata">{{msg}}</p>-->
    <zhuanti
      :xinde="xinde"></zhuanti>
    <!--<logo></logo>-->
  </div>
</template>
<script>
  import headerbar from "../common/headerbar.vue";
  import zhuanti from "../common/zhuanti.vue";
//  import logo from "../common/logo.vue";

  export default {
    name: 'worklist',
    components:{
      headerbar,zhuanti,
//      logo
    },
    data () {
      return {
        titles:"",
        xinde:[],
        categoryid:'',
        inputval:'',
        msg:''
      }
    },
    created(){
      this.menu();
      let that=this;
      this.titles=this.$route.query.titles;
      this.categoryid=this.$route.query.categoryid;
      this.inputval=this.$route.query.inputval;
      /*
      * 判断 热门文章列表，自考文章列表，电大文章列表，网教文章列表，成考文章列表
      * 根绝不同分类ID获取不同数据
      * */
      if(this.inputval){
        this.$http.get('/api/search/index.html',{params: {q:that.inputval}})
          .then((response) => {
            if(response.data.data.code==='500'){
              that.msg=response.data.data.msg;
            }else{
              that.xinde=response.data.data.data;
              that.msg=that.inputval;
            }
          })
      }else if(this.categoryid){
        this.$http.get('/api/list/article-list.html',{params: {category_id: that.categoryid}})
          .then((response) =>{
            that.xinde=response.data.data.data;
            if(that.categoryid==='5'){
              that.msg='自考文章';
            }else if(that.categoryid==='6'){
              that.msg='电大文章';
            }else if(that.categoryid==='7'){
              that.msg='网教文章';
            }else if(that.categoryid==='8'){
              that.msg='成考文章';
            }
          })
      }else{
        this.$http.get('/api/list/article-list.html',{params: {category_id: 5}})
          .then((response) => {
            response.data.data.data.forEach((item) => {
              that.xinde.push(item)
              that.msg='热门文章'
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
      }
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
