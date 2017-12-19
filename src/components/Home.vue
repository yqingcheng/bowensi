
<!-------------------------------首页-------------------------------------->

<template>
  <div class="home">
    <search></search>
    <lunbo></lunbo>
    <div class="gonggao"></div>
    <ul class="notic-list" >
      <li @click="firstSkip">
        <p>{{first.title}}</p>
        <span>{{new Date(parseInt(first.created_at) * 1000).toLocaleDateString()}}</span>
      </li>
      <li v-for="(item,index) in other" :key="item.id" @click="otherSkip(index)">
        <p>{{item.title}}</p>
        <span>{{new Date(parseInt(first.created_at) * 1000).toLocaleDateString()}}</span>
      </li>
    </ul>
    <bar></bar>
    <enrol></enrol>
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
              <li v-for="(item,index) in schoolfirst" :key="item.id" @click="skipDetalis1(index)" >
                <img :src="imgsrc+item.logo" alt="">
                <p > {{item.name}}</p>
              </li>
            </ul>
          </swiper-slide>
          <swiper-slide >
            <ul >
              <li v-for="(item,index) in schooltwo" :key="item.id" @click="skipDetalis2(index)" >
                <img :src="imgsrc+item.logo" alt="">
                <p >{{item.name}}</p>
              </li>
            </ul>
          </swiper-slide>
          <swiper-slide >
            <ul >
              <li v-for="(item,index) in schoolthree" :key="item.id" @click="skipDetalis3(index)" >
                <img :src="imgsrc+item.logo" alt="">
                <p >{{item.name}}</p>
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
            <p>{{list[0]}}</p>
          </router-link>
        </li>
        <li>
          <router-link to="/network">
            <p>{{list[2]}}</p>
          </router-link>
        </li>
        <li>
          <router-link to="/utv">
            <p>{{list[1]}}</p>
          </router-link>
        </li>
        <li>
          <router-link to="/adult">
            <p>{{list[3]}}</p>
          </router-link>
        </li>
    </ul>
    <div> <router-view></router-view> </div>
    <bar></bar>
    <div class="footbar">
      <div class="footbar-img">
        <p><b>{{speciallist.name}}</b></p>
        <img :src="imgsrc + speciallist.image" alt="" @click="skipWorkList">
        <span class="mores">
          <span>{{new Date(parseInt(speciallist.create_time) * 1000).toLocaleDateString()}}</span>
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
  //需要手动加载swiper css文件
  require('swiper/dist/css/swiper.css');
  export default {
    name: 'home',
    components:{ Lunbo, Search, swiper, swiperSlide, enrol, bar, logo },
    data () {
      return {
        imgsrc:domain.testUrl,
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
        schoolfirst:[],
        schooltwo:[],
        schoolthree:[],
        first:[],
        other:[],
        list:[],
        speciallist:{}
      }
    },
    created(){
      this.menu();
      let that=this;
      /*
      * 公告栏
      *first	公告首位
      * other	其他公告
      * id	文章ID
      * title	文章标题
      * */
      this.$http.get('/api/home/notice.html')
        .then((response) => {
          that.first=response.data.data.first;
          that.other=response.data.data.other;

        });
      /*
      * 文章分类
      *此接口汉字可用于首页热门文章分类
      *id	类别ID
      * name	类别名称
      * */
      this.$http.get('/api/home/category.html')
        .then((response) => {
          response.data.data.forEach((item) => {
            that.list.push(item.name)
          });
        });
      /*
      *热门院校
      *该院校列表可点击跳转  跳转页面至 院校详情。
      *hot	热门院校内容
      * more	更多院校链接
      * id	院校ID
      * name	院校名称
      * logo	院校LOGO
      * */
      this.$http.get('/api/home/school.html')
        .then((response) => {
          that.schoolfirst=response.data.data.hot.slice(0,8);
          that.schooltwo=response.data.data.hot.slice(8,16);
          that.schoolthree=response.data.data.hot.slice(16,23);
        });
      /*
      * 首页热门专题*/
      this.$http.get('/api/home/hot-special.html')
        .then((response) => {
         that.speciallist=response.data.data;
        })
    },
    methods:{
      menu() {
        window.scrollTo(0,0);
      },
      /*
      * 函数detalis
      * 跳转到院校详情页面
      * query 传参数院校id
      * */
      skipDetalis1:function (index) {
        this.$router.push({
          path:'universitydetails/details',
          query:{
            id:this.schoolfirst[index].id
          }
        })
      },
      skipDetalis2:function (index) {
        this.$router.push({
          path:'universitydetails/details',
          query:{
            id:this.schooltwo[index].id
          }
        })
      },
      skipDetalis3:function (index) {
        this.$router.push({
          path:'universitydetails/details',
          query:{
            id:this.schoolthree[index].id
          }
        })
      },
      /*跳转到院校页面*/
      more:function () {
        this.$router.push("/yuanxiao");
      },
      /*跳转到专题列表*/
      moress(){
        this.$router.push('/special')
      },
      /*跳转到文章列表 */
      skipWorkList(){
        this.$router.push({
          path:'/worklist',
          query:{
            categoryid:''
          }
        })
      },
      /*跳转到文章详情*/
      firstSkip(){
        this.$router.push({
          path:'../article',
          query:{
            ids:this.first.id
          }
        })
      },
      otherSkip(index){
        this.$router.push({
          path:'../article',
          query:{
            ids:this.other[index].id
          }
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
    font-size: 0.7rem;
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
    color: #888;
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
