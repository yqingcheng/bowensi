
<!------------------------------------文章详情页----------------------------------------------->

<template>
  <div class="backs">
sdsdssdsd
  </div>
</template>
<script>
  export default {
    name: 'backs',
    components:{

    },
    data () {
      return {

      }
    },
    created(){
      this.ids=this.$route.query.ids;
      this.$router.replace({
        path:'../article',
        query:{
          ids:this.ids
        }
      });
    }
  }
</script>
<style scoped>

</style>
