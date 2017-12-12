
<!-------------------------------首页-------------------------------------->

<template>
  <div class="home">
    <search></search>
    <lunbo></lunbo>
    <div class="gonggao">
    </div>
    <ul class="notic-list" v-for="item in notic">
      <li>
        <p>{{item.text}}</p>
        <span>{{item.data}}</span>
      </li>
    </ul>
    <bar></bar>
    <enrol
        :propp="propp"></enrol>
    <bar></bar>
    <div class="academy">
      <div class="academy-bar">
        <span class="span1">院校推荐</span>
        <span class="span2" @click="more">更多&nbsp;>>></span>
      </div>
      <div class="academy-wrap">
        <swiper :options="swiperOption" ref="mySwiper">
          <!-- slides -->
          <swiper-slide >
            <ul >
              <li v-for="(item,index) in school" :key="item.id" @click="skipDetalis(index)">
                <img :src="item.img" alt="">
                <p > {{item.sc}}</p>
              </li>
            </ul>
          </swiper-slide>
          <swiper-slide >
            <ul >
              <li v-for="(item,index) in school" :key="item.id" @click="skipDetalis(index)">
                <img :src="item.img" alt="">
                <p >{{item.sc}}</p>
              </li>
            </ul>
          </swiper-slide>
          <swiper-slide >
            <ul >
              <li v-for="(item,index) in school" :key="item.id" @click="skipDetalis(index)">
                <img :src="item.img" alt="">
                <p >{{item.sc}}</p>
              </li>
            </ul>
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination" id="qier">

          </div>
        </swiper>

      </div>

    </div>
    <ul class="myself-sc">
        <li>
          <router-link to="/myself">
            <p>自考</p>
          </router-link>
        </li>
        <li>
          <router-link to="/network">
            <p>网教</p>
          </router-link>
        </li>
        <li>
          <router-link to="/utv">
            <p>电大</p>
          </router-link>
        </li>
        <li>
          <router-link to="/adult">
            <p>成考</p>
          </router-link>
        </li>
    </ul>
    <div> <router-view></router-view> </div>
    <bar></bar>
    <div class="footbar">
      <div class="footbar-img">
        <p><b>依托互联网数据资源和自然语言处理技术优势</b></p>
        <img src="../../static/images/logoimg.jpg" alt="" @click="skipWorkList">
        <span class="mores">
        <span>2017/05/03</span>
        <span @click="moress">更多&nbsp;&nbsp;&nbsp;>>></span>
      </span>

        <div class="bar-v"></div>
      </div>
    </div>

    <logo></logo>
  </div>

</template>
<script>
  import Search from "./common/Search.vue";
  import Lunbo from "./common/lunbo.vue";
  import enrol from "./common/enrol.vue";
  import bar from "./common/bar.vue";
  import logo from "./common/logo.vue";
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import VueAwesomeSwiper from 'vue-awesome-swiper'

  //加载swipercss文件
  require('swiper/dist/css/swiper.css');
  export default {
    name: 'home',
    components:{
      Lunbo,
      Search,
      swiper,swiperSlide,
      enrol,bar,logo
    },
    data () {
      return {
        imsg:[
          {"img":"http://www.hangowa.com/data/upload/mobile/special/s1/s1_05327186142976760.jpg"},
          {"img":"http://www.hangowa.com/data/upload/mobile/special/s1/s1_05345109604997733.jpg"},
          {"img":"http://www.hangowa.com/data/upload/mobile/special/s1/s1_05330562712030759.jpg"}
        ],
        swiperOption: {
          //手动滑动之后继续自动轮播
//          autoplayDisableOnInteraction : false,
          notNextTick: true,
          autoplay: false,
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
        },
        notic:[
          {
            "text":"国家隐含施蒂利克上岛咖啡抗裂砂浆大富科技框架水电费卫生法律框架我耳机问",
            "data":"2017/05/03"
          },
          {
            "text":"国家隐含施蒂利克上岛咖啡抗裂砂",
            "data":"2017/05/03"
          },
          {
            "text":"含施蒂利克上岛咖啡抗裂砂国家隐含施蒂利克上岛咖啡抗裂砂国家隐含施蒂利克上岛咖啡抗裂砂",
            "data":"2017/05/03"
          },
          {
            "text":"国家隐含施蒂利克上岛咖啡抗裂砂",
            "data":"2017/06/03"
          }
        ],
        propp:[
          {text:"报考指南"},
          {
            list:[
              {"zhinan":"招生简章"},
              {"zhinan":"热门专业"},
              {"zhinan":"考试报名"},
              {"zhinan":"考试时间"},
              {"zhinan":"证书查询"},
              {"zhinan":"院校推荐"},
              {"zhinan":"招生简章"},
              {"zhinan":"录取分数线"}

            ]
          }
        ],
        school:[
          {
            "sc":"清华大学",
            "img":"../../static/images/schoo.jpg"
          },
          {
            "sc":"北京大学",
            "img":"../../static/images/schoo.jpg"
          },
          {
            "sc":"清华大学",
            "img":"../../static/images/schoo.jpg"
          },
          {
            "sc":"清华大学",
            "img":"../../static/images/schoo.jpg"
          },
          {
            "sc":"清华大学",
            "img":"../../static/images/schoo.jpg"
          },
          {
            "sc":"清华大学",
            "img":"../../static/images/schoo.jpg"
          },
          {
            "sc":"清华大学",
            "img":"../../static/images/schoo.jpg"
          },
          {
            "sc":"清华大学",
            "img":"../../static/images/schoo.jpg"
          },
        ]
      }
    },
    created(){
      this.menu();
    },
    methods:{
      menu() {
        window.scrollTo(0,0);
      },
      /*
      * 函数detalis
      * 跳转到院校详情
      * query 传参数
      * */
      skipDetalis:function (index) {
        this.$router.push({
          path:'universitydetails/details',
          query:{
            schoole:this.school[index].sc,
            img:this.school[index].img,
          }
        })
      },
      more:function () {
        this.$router.push("/yuanxiao");
      },
      moress(){
        this.$router.push('/special')
      },
      skipWorkList(){
        this.$router.push({
          path:'/worklist',
//          query:{
//            titles:"文章列表总览"
//          }
        })

      }
    }
  }
</script>
<style scoped>
  .gonggao{
    width: 100%;
    height: 3.5rem;
    background-image: url("../../static/images/notice.jpg");
    background-size: percentage(50%,50%);
    background-repeat: no-repeat;
    background-position: 50% 8%;
  }
  .notic-list li{
    border: 1px solid #f1f1f1;
    font-family: "Microsoft YaHeikaiti";
    font-size: 0.8rem;
    padding: 0.7rem ;
    line-height: 1.2rem;
  }
  .notic-list li span{
    color: #bbb;
    font-size: 0.8rem;
  }
  .academy .academy-bar{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.8rem;
  }
  .academy div .span1{
    color: #4887d0;
    font-family: "Microsoft YaHeikaiti";
    font-size: 1rem;
    font-weight: 600;
  }
  .academy div .span2{
    font-size: 0.7rem;
  }

  .academy ul li{
    border-right: 1px solid #ddd;
    border-top: 1px solid #ddd;
    border-collapse: collapse;
    height: 7rem;
    width: 25%;
    float: left;
    box-sizing: border-box;
    text-align: center;
    padding: 1rem 0 0 0;

  }
  .academy ul li p{
    line-height: 1rem;
    font-size: 0.8rem;
  }
  .academy ul li img{
    height: 3.4rem;
    width: 3.4rem;
  }
  .swiper-pagination{
    position: relative;
    bottom: 0;
    background: #eee;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .myself-sc{
    display: flex;
    width: 100%;
    align-items: center;
    font-size: 0.8rem;
    box-sizing: border-box;
    font-weight: 600;
    padding: 0 0.8rem;
  }
  .myself-sc li{
    flex: 1;
    text-align: center;
  }
  .myself-sc a{
    color: black;
    text-decoration: none;
  }
  .myself-sc li p{
    height: 3rem;display: block;
    line-height: 3.3rem;
  }
  /*.academy-wrap{*/
    /*width:100%;*/
    /*height:18.6rem;*/
    /*border: 1px solid red;*/
  /*}*/
  .swiper-slide img{ width:100%;height: 12.6rem}
  .router-link-active p{
    color: #73a1db;
    border-bottom: 2px solid red;
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
    color: #cccccc;
    font-size: 0.7rem;
    display: flex;
    justify-content: space-between;
  }
  .mores span:last-child{
    color: black;
  }
  .bar-v{
    width: 100%;
    height: 0.1rem;
    background: #f1f1f1;
    margin-top: 0.7rem;
  }
  #mores{
    font-size: 0.8rem;
    color: black;
    position: absolute;
    right: 1rem;

  }
</style>
