
<!--------------------------------------院校详情页------------------------------------------>

<template>
  <div class="details">
    <div class="alerts" v-show="isshow">
      <div>
        <p>{{aleartval}}</p>
        <p @click="hiddens">ok</p>
      </div>
    </div>
    <headerbar></headerbar>
    <div class="school-name">
      <span>{{name}}</span>
      <span>{{label}}</span>
    </div>
    <div class="wap-selet">
      <img :src="imgsrc+logo" alt="">
      <div>
        {{description}}
      </div>
    </div>
    <div class="content" v-html="detail">

    </div>
    <bar></bar>
    <enrol></enrol>
    <bar></bar>
    <h2>报名咨询</h2>
    <input type="text" placeholder="姓名" ref="name">
    <input type="text" placeholder="电话" ref="phone">
    <textarea placeholder="说点什么吧..." ref="text"></textarea>
    <p class="baoming" @click="ImmediateConsultation">立即咨询</p>
    <div class="bar-v"></div>
    <logo></logo>
  </div>
</template>
<script>
  import bar from "../common/bar.vue";
  import enrol from "../common/enrol.vue";
  import logo from "../common/logo.vue";
  import headerbar from "../common/headerbar.vue";
  export default {
    name: 'details',
    components:{
      bar,enrol,logo,headerbar
    },
    data () {
      return {
        schoole:"",
        img:"",
        imgsrc:domain.testUrl,
        name:'',
        logo:'',
        description:'',
        label:'',
        detail:'',
        arr:[],
        isshow:false,
        aleartval:''
      }
    },
    created(){
      this.menu();
      this.id=this.$route.query.id;
      this.major=this.$route.query.major;
      let that=this;
      /*
      * 院校详情
      * 根据传入的院校ID参数 获取详细的院校信息
      * */
      this.$http.get('/api/item/school-item.html',{params: {id: this.id}})
        .then(response => {
          that.name=response.data.data.content.name;
          that.logo=response.data.data.content.logo;
          that.description=response.data.data.content.description;
          that.label=response.data.data.content.label;
          that.detail=response.data.data.content.detail;
          that.arr=response.data.data.content.major_major.split(',');
//          for(let i=0;i<that.arr.length;i++){
//            that.propp[1].list.push({keyword_name:that.arr[i]})
//          }
        })
    },
    methods:{
      menu() {
        window.scrollTo(0,0);
      },
      /*
      * 立即咨询函数
      * 点击按钮后向后台发送数据
      * */
      ImmediateConsultation(){
        this.isshow=true;
        let that=this;
        const data={
          name:this.$refs.name.value,
          mobile:this.$refs.phone.value
        };
        console.log(this.$qs.stringify(data));
        this.$http.post('/api/school/message.html',this.$qs.stringify({
          name:this.$refs.name.value,
          mobile:this.$refs.phone.value,
          progress:this.$refs.text.value
        }))
          .then(response => {
            that.aleartval=response.data.data.msg
          })
      },
      /*
      * 咨询之后重置输入框内容*/
      hiddens(){
        this.isshow=false;
        this.$refs.name.value='';
        this.$refs.phone.value='';
        this.$refs.text.value='';
      }
    }
  }
</script>
<style scoped>

  .school-name{
    background: #eee;
    padding: 1.2rem 0.8rem;
    width: 100%;
    height: 5.3rem;
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-wrap: wrap;
  }
  .school-name span:nth-child(1){
    flex: 1 0 100%;
    /*line-height: 2rem;*/
    font-size: 1.1rem;
    font-weight: 800;
  }
  .school-name span:nth-child(2){
    flex: 1 0 100%;
    color: #888;
    font-size: 0.8rem;
  }
  .wap-selet{
    padding: 1rem 0.8rem 1.2rem 0.8rem;
    /*display: flex;*/
    /*align-items: center;*/
  }
  .wap-selet img{
    width: 7rem;
    float: left;
    margin-right: 0.8rem;
  }
  .wap-selet div{
    width: 100%;
    color: #888;
    font-size: 0.8rem;
    line-height: 1.3rem;
  }
  .content{
    padding: 0 0.8rem 1rem 0.8rem;
    font-size: 0.8rem;
  }
  h2{
    text-align: center;
    line-height: 3.7rem;
    font-size: 1.2rem;
  }
  input,textarea{
    width: 90%;
    background: #eee;
    border: none;
    outline: none;
    padding: 0.6rem 1rem;
    display: block;
    margin: 0 auto 1.1rem ;
    font-size: 0.8rem;
  }
  textarea{
    height: 9.5rem;
  }
  .baoming{
    text-align: center;
    background: #c43c3c;
    width: 90%;
    font-size: 1rem;
    line-height: 2.3rem;
    color: white;
    display: block;
    margin: -0.7rem auto 1.3rem;
  }
  .bar-v{
    width: 100%;
    height: 0.1rem;
    background: #f1f1f1;
    margin-top: 2rem;
  }
  .alerts{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.2);
    z-index: 9999999999;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .alerts div{
    width: 75%;
    height: 7rem;
    background: white;
    border-radius: 1rem;
  }
  .alerts div p:first-child{
    color: black;
    text-align: center;
    height: 70%;
    border-bottom: 1px solid #ccc;
    font-size: 1rem;
    line-height: 5rem;
  }
  .alerts div p:last-child{
    color: blue;
    text-align: center;
    line-height: 2rem;
  }
</style>
