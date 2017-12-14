
<!---------------------------------------------题库页面------------------------------------->

<template>
  <div class="tiku">
    <headerbar></headerbar>
    <select v-model="selected" ref="onsss" @change="selectedd">
      <option>题库列表</option>
      <option v-for="item in fenlei">{{keywords1}}</option>
    </select>
    <ul class="down-list" v-show="isshow1">
      <li v-for="item in list1">
        <p><b>{{item.title}}</b></p>
        <span class="spoan1">{{item.created_at}}</span>
        <span class="spoan2">{{keywords1}}</span>
      </li>
    </ul>
    <ul class="down-list" v-show="isshow2">
      <li v-for="item in list2">
        <p><b>{{item.title}}</b></p>
        <span class="spoan1">{{item.created_at}}</span>
        <span class="spoan2">{{keywords2}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
  import headerbar from "./common/headerbar.vue";
  export default {
    name: 'tiku',
    components:{
      headerbar
    },
    data () {
      return {
        zikao:true,
        fenlei:[],
        selected:"题库列表",
        keywords1:'',
        keywords2:'',
        list1:[],
        list2:[],
        isshow1:true,
        isshow2:true
      }
    },
    created(){
      this.menu();

      let that=this;
//      /*
//      * 题库列表
//      *此接口可用于首页、自考、网教、电大、成考页面 会根据不同的分类ID 返回不同类型的热门文章
//      *参数 category_id
//      page	分页信息
//      pageParam	获取下一页的的参数 e.g.  xxx/xxx.html?page=2
//      totalCount	一共数据量
//      defaultPageSize	一页数据量
//      data	数据
//      data > title	题库页面title
//      keywords	题库页面keywords
//      description	题库页面description
//      list	数据列表
//      list > title	文章标题
//      created_at	文章发布时间
//      *
//      * */
      this.$http.get('/api/tiku/list.html',{params: {category_id: 182}})
        .then(function (response) {
          that.list1=response.data.data.data.list;
          that.keywords1=response.data.data.data.keywords
        })
        .catch(function (error) {
          console.log(error)
        });
      this.$http.get('/api/tiku/list.html',{params: {category_id: 181}})
        .then(function (response) {
          that.list2=response.data.data.data.list;
          that.keywords2=response.data.data.data.keywords
        })
        .catch(function (error) {
          console.log(error)
        })
      this.$http.get('/api/tiku/index.html')
        .then(function (response) {
          console.log(response.data.data)
          that.fenlei=response.data.data
        })
        .catch(function (error) {
          console.log(error)
        })
    },
//    computed:{
//      /*
//      过滤器
//      过滤list列表 返回 与参数 canshu相匹配的 列表
//      */
//      filterName:function () {
//        let that=this;
//        return that.list.filter(function (user) {
//          if(that.canshu==="题库"){
//            return user;
//          }else{
//            return user.directroy.indexOf(that.canshu)!==-1
//          }
//        })
//      }
//    },

    methods:{
      backto:function () {
        this.$router.push("/home");
      },
      menu() {
        window.scrollTo(0,0);
      },
      selectedd() {
        if(this.selected===this.keywords1){
          this.isshow2=false;
          this.isshow1=true
        }else if(this.selected===this.keywords2){
          this.isshow2=true;
          this.isshow1=false
        }else if(this.selected==='题库列表'){
          this.isshow2=true;
          this.isshow1=true
        }

      }
    },

  }
</script>
<style scoped>

  select{

    border: 1px solid #ddd;
    color: #aaa;
    margin: 1.1rem auto;
    display: block;
    padding:0.2rem  5rem ;
    outline: none;
    font-size: 0.8rem;
  }
  option{
    text-align: center;
  }
  .down-list{
    padding: 0 1rem;
    font-size:0.6rem;
  }
  .down-list li{
    border-bottom: 1px solid #eee;
    padding: 0 0 0.9rem 0;
    margin-bottom: 1rem;
    line-height: 1.2rem;
  }
  .down-list li .spoan1{
    color: #aaa;
    font-size: 0.7rem;
  }
  .down-list li .spoan2{
    color: white;
    font-size: 0.7rem;
    background: cornflowerblue;
    padding: 0.1rem 0.3rem;
    position: absolute;
    right: 1rem;
    line-height: 0.8rem;
    height: 1rem;
    border-radius: 2px;
  }
  .down-list{
    list-style: none;
  }
  *{
    margin: 0;
    padding: 0;
  }

</style>
