
<!-------------------------------home页轮播图swiper--------------------------->

<template>
  <div class="lunbo">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="item in imsg" :key="item.id"><img :src="imgsrc+item.image" alt=""></swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
  </div>

</template>
<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import VueAwesomeSwiper from 'vue-awesome-swiper'

  require('swiper/dist/css/swiper.css');

  export default {
    name: 'lunbo',
    components:{
      swiper,swiperSlide

    },
    data () {
      return {
        imgsrc:domain.testUrl,
        imsg:[],
        swiperOption: {
          //手动滑动之后继续自动轮播
          autoplayDisableOnInteraction : false,
          notNextTick: true,
          autoplay: 3000,
          grabCursor : true,
          setWrapperSize :true,
          autoHeight: true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          mousewheelControl : true,
          observeParents:true,
          onTransitionStart(swiper){
//            console.log(swiper)
          }
        }
      }
    },
    computed: {

    },
    created(){
      let that=this;
      this.$http.get('/api/home/figure.html')
        .then((response) => {
          that.imsg=response.data.data;
        })
    },
  }
</script>
<style scoped>
  .lunbo{
    width:100%;
    height:10.4rem
  }
  .swiper-slide img{
    width:100%;
    height: 10.4rem
  }
</style>
