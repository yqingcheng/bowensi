
<!-------------------------------------院校页面-------------------------------->

<template>
  <div class="yuanxiao">
    <search></search>
    <!--iview下拉菜单-->
    <Dropdown trigger="click" class="selectc" @on-click="changes">
      <a href="javascript:void(0)" >
          地区
        <Icon type="arrow-down-b"></Icon>
      </a>
      <Dropdown-menu slot="list"  style="font-size: 18px">
        <Dropdown-item v-for="(item,index) in rows1" :key="item.id" :name="item.name">{{item.name}}</Dropdown-item>

      </Dropdown-menu>
      </Dropdown>
    <Dropdown trigger="click" class="selectc" @on-click="changes">
      <a href="javascript:void(0)">
        专业
        <Icon type="arrow-down-b"></Icon>
      </a>
      <Dropdown-menu slot="list">
        <Dropdown-item v-for="(item,index) in rows2" :key="item.id" :name="item.name">{{item.name}}</Dropdown-item>

      </Dropdown-menu>
    </Dropdown>
   <!--学院列表-->
    <div class="wrapcase">
      <div class="area-sch" v-for="(user,index) in users" :key="user.id">
        <div>
          <img :src="imgsrc+user.logo" alt="">
        </div>
        <div class="area-sch-div">
          <p><b>{{user.name}}</b></p>
          <p>本科线：{{user.fraction}}分</p>
        </div>
        <div class="xiangqing">
          <span @click="skipDetalis(index)">院校详情</span>
        </div>
      </div>
    </div>



  </div>
</template>
<script>
  import search from "./common/Search.vue";
  export default {
    name: 'yuanxiao',
    components:{
      search
    },

    data () {
      return {
        imgsrc:domain.testUrl,
        canshu:"",
        users:[],
        rows1:[

        ],
        rows2:[

        ]
      }
    },
    created(){
//      此时执行函数menu（）
      this.menu();
      let that=this;
      /*
      *院校列表检索
      * */
      this.$http.post('/api/school/index.html').then(response => {
        that.users=response.data.data.data.content;
        console.log(response.data.data.data.content)
      });
      /*
      * 城市列表
      * */
      this.$http.get('/api/school/city.html').then(response => {
//        console.log(response.data.data);
        that.rows1=response.data.data;
      });
      /*
      * 专业名称
      * */
      this.$http.post('/api/school/major.html').then(response => {

        that.rows2=response.data.data;
      });
    },
//    computed:{
//      /*
//      过滤器
//      过滤area列表 返回 与参数 canshu相匹配的 列表
//      */
//      filterName:function () {
//        let self=this;
//        return self.area.filter(function (user) {
//          return user.school.indexOf(self.canshu)!==-1 || user.mark.indexOf(self.canshu)!==-1
//        })
//      }
//    },
    methods:{
//      函数menu window 保持顶端展示
      menu() {
        window.scrollTo(0,0);
      },
      /*
      函数skipDetalis
      点击跳转到院校详情页
      用query传递参数
      */
      skipDetalis:function(index){
//        console.log(this.users[index].id)
        this.$router.push({
          path:'universitydetails/details',
          query:{
            id:this.users[index].id
          }
        })
      },
//      函数 change ：改变下拉菜单中选项时，把值传递给参数 canshu
      changes(name){
        this.canshu=name;
      }
    }
  }
</script>
<style scoped>
  .selectc{
    width: 50%;
    text-align: center;
    font-size: 0.8rem;
    padding: 0.8rem 0;
    float: left;
  }
  .ivu-dropdown-item{
    font-size: 0.8rem!important;
  }
  .selectc a{
    color: black;
  }
  .selectc a:hover{
    color: red;
  }
  .opactions{
    font-size: 1rem;
  }
  .area-sch{
    display: flex;
    padding: 1rem 0.8rem 0.8rem 0.8rem;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;
  }

  .area-sch img{
    width: 4.5rem;
    height: 4.5rem;
  }
  .area-sch div{
    text-align: center;
  }
  .area-sch-div p{
    line-height: 1.4rem;
    font-size: 0.8rem;

  }
  .area-sch-div p:nth-child(2){
    color: #888;
  }
  .xiangqing span{
    background: #e2364e;
    text-align: center;
    color: white;
    border-radius: 0.2rem;
    display: inline-block;
    padding: 0.3rem 1.1rem;
    font-size: 0.9rem;
  }
</style>
