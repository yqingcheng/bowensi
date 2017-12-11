
<!-----------------------底部logo图------------------------>

<template>
    <div class="logo"></div>
</template>
<script>
  export default {
    name: 'logo',
    components:{

    },
    data () {
      return {

      }
    }
  }
</script>
<style scoped>
  .logo{
    width: 100%;
    height: 4.5rem;
    background-image: url("../../../static/images/logo.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: percentage(50%,50%);
  }
</style>
