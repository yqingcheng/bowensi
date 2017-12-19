
<!---------------------------------------------题库页面------------------------------------->

<template>
  <div class="tiku">
    <headerbar></headerbar>
    <select v-model="selected" ref="onsss" @change="selectedd">
      <option>题库列表</option>
      <option v-for="item in fenlei">{{item.name}}</option>
    </select>
    <ul class="down-list" v-show="isshow1">
      <li v-for="(item,index) in list1" :key="item.id" @click="skipWenzhangliebaio1(index)">
        <p><b>{{item.title}}</b></p>
        <span class="spoan1">{{new Date(parseInt(item.created_at) * 1000).toLocaleDateString()}}</span>
        <span class="spoan2">{{keywords1}}</span>
      </li>
    </ul>
    <ul class="down-list" v-show="isshow2">
      <li v-for="(item,index) in list2" :key="item.id" @click="skipWenzhangliebaio2(index)">
        <p><b>{{item.title}}</b></p>
        <span class="spoan1">{{new Date(parseInt(item.created_at) * 1000).toLocaleDateString()}}</span>
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
      /*
      * 历年真题题库列表，模拟试题题库列表
      * 根据 分类category_id请求数据
      * */
      this.$http.get('/api/tiku/list.html',{params: {category_id: 182}})
        .then((response) => {
          that.list1=response.data.data.data.list;
          that.keywords1=response.data.data.data.keywords;
        });
      this.$http.get('/api/tiku/list.html',{params: {category_id: 181}})
        .then((response) => {
          that.list2=response.data.data.data.list;
          that.keywords2=response.data.data.data.keywords;
        });
      this.$http.get('/api/tiku/index.html')
        .then((response) => {
          that.fenlei=response.data.data;
        });
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
      /*
      * 下拉菜单
      * 判断选中内容改变显示内容
      * */
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
      },
      skipWenzhangliebaio1(index){
        this.$router.push({
          path:'./worklist',
          query:{
            inputval:this.list1[index].title
          }
        })
      },
      skipWenzhangliebaio2(index){
        this.$router.push({
          path:'./worklist',
          query:{
            inputval:this.list2[index].title
          }
        })
      },
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
