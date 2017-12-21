
<!-------------------------------------------专题列表页面-------------------------------------------->

<template>
  <div class="speciallist">
    <headerbar></headerbar>
    <search></search>
    <div class="footbar">
      <div class="footbar-img">
        <p><b>{{qule.name}}</b></p>
        <img :src="imgsrc + qule.image" alt="">
        <span class="mores">
        <span>{{qule.update_time}}</span>
      </span>
        <div class="bar-v"></div>
      </div>
    </div>
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
  import bar from "../common/bar.vue";
  import logo from "../common/logo.vue";
  import zhuanti from "../common/zhuanti.vue";
  export default {
    name: 'speciallist',
    components:{
      headerbar,search,bar,logo,zhuanti
    },
    data () {
      return {
        imgsrc:domain.testUrl,
        xinde:[],
        qule:this.$route.query.qule
      }
    },
    created(){
      this.menu();
      this.id=this.$route.query.qule.id;
      let that=this;
      /*
      /*
      * 专题文章列表
      * */
      this.$http.get('/api/list/special-list.html',{params: {special_id: that.id}})
        .then((response) => {
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
