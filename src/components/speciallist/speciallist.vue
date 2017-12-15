
<!-------------------------------------------专题列表页面-------------------------------------------->

<template>
  <div class="speciallist">
    <headerbar></headerbar>
    <search></search>
    <footbar :titles="titles"></footbar>
    <bar></bar>
    <div class="myself-bar">
      <span class="span1">专题文章</span>
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
  import logo from "../common/logo.vue";
  import zhuanti from "../common/zhuanti.vue";

  export default {
    name: 'speciallist',
    components:{
      headerbar,search,footbar,bar,logo,zhuanti
    },
    data () {
      return {

        imgsrc:domain.testUrl,
        titles:[
          {titles:'热门文章'}
        ],
        xinde:[],

      }
    },
    created(){
      this.menu();
      this.id=this.$route.query.id;
      let that=this;
      /*
      * 专题文章列表
      * */
      this.$http.get('/api/list/special-list.html',{params: {special_id: that.id}})
        .then(function (response) {
          that.xinde=response.data.data.data;
        });
    },
    methods:{
      menu() {
        window.scrollTo(0,0);
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
</style>
