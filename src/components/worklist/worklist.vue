
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
    },
    mounted(){
      this.titles=this.$route.query.titles;
      this.xinde=this.$route.query.xindes;
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
