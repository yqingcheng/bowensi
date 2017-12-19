
<!-------------------------------------院校页面-------------------------------->

<template>
  <div class="yuanxiao">
    <search></search>
    <!--iview下拉菜单-->
    <Dropdown trigger="click" class="selectc" @on-click="changes1">
      <a href="javascript:void(0)">
          {{area}}
        <Icon type="arrow-down-b"></Icon>
      </a>
      <Dropdown-menu slot="list"  class="hiddena1">
        <Dropdown-item v-for="(item,index) in rows1" :key="item.id" :name="item.name" :id="item.id">{{item.name}}</Dropdown-item>

      </Dropdown-menu>
      </Dropdown>
    <Dropdown trigger="click" class="selectc" @on-click="changes2">
      <a href="javascript:void(0)">
        {{majors}}
        <Icon type="arrow-down-b"></Icon>
      </a>
      <Dropdown-menu slot="list" class="hiddena2">
        <Dropdown-item v-for="(item,index) in rows2" :key="item.id" :name="item.name" :id="item.id">{{item.name}}</Dropdown-item>

      </Dropdown-menu>
    </Dropdown>
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
        rows1:[],
        rows2:[],
        canshu1:'',
        canshu2:'',
        area:'地区',
        majors:'专业'
      }
    },
    created(){
      this.menu();
      let that=this;
      /*
       *院校列表检索
       * */
      this.$http.post('/api/school/index.html').then(response => {
        that.users=response.data.data.data.content;
//        console.log(response)
      });
      /*
       * 城市列表
       * */
      this.$http.get('/api/school/city.html').then(response => {
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
       *函数skipDetalis
       *点击跳转到院校详情页
       *用query传递参数
      */
      skipDetalis:function(index){
        this.$router.push({
          path:'universitydetails/details',
          query:{
            id:this.users[index].id,
            major:this.users[index].major
          }
        })
      },
//      函数 change ：改变下拉菜单中选项时，把值传递给参数 canshu

      /*
      * 函数changes1()
      * 选择地区后 判断是否有选择专业
      * 根据城市ID，专业ID发起请求 给users重新赋值 刷新院校列表
      * */
      changes1(name,e){
        if(!e){e=window.event};
        let that=this;
        this.area=name;
        if(this.canshu2){
          this.$http.post('/api/school/index.html',this.$qs.stringify({
            city:e.target.getAttribute('id'),
            major:that.canshu2
          }))
            .then(response => {
              that.canshu1=e.target.getAttribute('id');
              that.users=response.data.data.data.content;
            })
        }else{
          this.$http.post('/api/school/index.html',this.$qs.stringify({
            city:e.target.getAttribute('id')
          }))
            .then(response => {
              that.canshu1=e.target.getAttribute('id');
              that.users=response.data.data.data.content;
            })
        }
      },
      /*
     * 函数changes2()
     * 选择专业后 判断是否有选择地区
     * 根据城市ID，专业ID发起请求 给users重新赋值 刷新院校列表
     * */
      changes2(name,e){
        if(!e){e=window.event};
        let that=this;
        this.majors=name;
        if(this.canshu1){
          this.$http.post('/api/school/index.html',this.$qs.stringify({
            city:that.canshu1,
            major:e.target.getAttribute('id')
          }))
            .then(response => {
              that.canshu2=e.target.getAttribute('id');
              that.users=response.data.data.data.content;
            })
        }else{
          this.$http.post('/api/school/index.html',this.$qs.stringify({
            major:e.target.getAttribute('id')
          }))
            .then(response => {
              that.canshu2=e.target.getAttribute('id');
              that.users=response.data.data.data.content;
            })
        }
      },
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
  .hiddena1{
    padding:0 0.8rem;
    width: 200%;
    background:#ddd;
    display: flex;
    flex-flow: row wrap;
    position: absolute;
    top:0;
  }
  .hiddena2{
    padding:0 0.8rem;
    width: 200%;
    background:#ddd;
    display: flex;
    flex-flow: row wrap;
    position: absolute;
    left: -100%;
    top:0;
  }
  .hiddena1 li,.hiddena2 li{
    flex: 0 0 33.3%;
  }
  .selectc a{
    color: black;
  }
  .selectc a:hover{
    color: red;
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
