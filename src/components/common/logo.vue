
<!-----------------------底部logo图------------------------>

<template>
    <div class="logo">
      <img :src="imgsrc+'/image/logo_2.png'" alt="" >
    </div>
</template>
<script>
  export default {
    name: 'logo',
    components:{

    },
    data () {
      return {
        imgsrc:domain.testUrl,
      }
    }
  }
</script>
<style scoped>
  .logo{
    width: 100%;
    height: 4.5rem;
    padding: 1rem 0.8rem ;
    box-sizing: border-box;
  }
  .logo img{
    width: 100%;
    height: 100%;
  }
</style>
