
<!--------------------------------一级页面------------------------------>

<template>
  <div class="hello">
    <div class="wrap">
      <div class="wrap-top">
        <span @click="backto">
          <img src="../../static/images/backp.png" alt="" v-show="isshow">
        </span>
        <span>博文思教育</span>
      </div>
      <ul class="uls" @click="homes">
        <li >
          <router-link to="/Home">
            <p>{{items[0]}}</p>
          </router-link>
        </li>
        <li>
          <router-link to="/Zikao">

            <p>{{items[2]}}</p>
          </router-link>
        </li>
        <li>
          <router-link to="/Wangjiao">

            <p>{{items[4]}}</p>
          </router-link>
        </li>
        <li>
          <router-link to="/Dianda">

            <p>{{items[3]}}</p>
          </router-link>
        </li>
        <li>
          <router-link to="/Chengkao">

            <p>{{items[5]}}</p>
          </router-link>
        </li>
        <li>
          <router-link to="/Yuanxiao">

            <p>{{items[6]}}</p>
          </router-link>
        </li>
        <li @click="skip" id="sto">
          <p>{{items[7]}}</p>
        </li>
      </ul>
    </div>
    <div class="top-wrap"></div>
    <div> <router-view></router-view> </div>
  </div>
</template>
<script>
  export default {
    name: 'hello',
    data () {
      return {
        isshow:false,
        items:[]
      }
    },
    created(){
      let that=this;
      /*
      *导航文字
      * 参数 label：导航名称
      * */
      this.$http.get('/api/default/index.html')
        .then((response) => {
          response.data.data.items.forEach((item) => {
            that.items.push(item.label)
          })
        });
    },
    methods:{
      /*跳转到题库页面*/
      skip:function () {
        this.$router.push("/Tiku")
      },
      /*返回上一个页面*/
      backto:function () {
        this.$router.back(-1)
      },
      /*控制返回icon是否显示*/
      homes:function (e) {
        if(!e){e=window.event}
        if(e.target.textContent==="首页"){
          this.isshow=false;
        }else{
          this.isshow=true;
        }
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .wrap{
     position: fixed;
    width: 100%;
    z-index: 99999999;
   }
  .wrap-top{
    background: rgb(51,123,205);
    width: 100%;
    height: 2.8rem;
    display: flex;
    align-items: center;
    color: white;
  }
  .wrap-top span:first-child{
    line-height: 100%;
    position: absolute;
    left: 1rem;
  }
  .wrap-top span:first-child img{
    height: 1.3rem;
    display: block;
  }
  .wrap-top span:last-child{
    font-size: 1.2rem;
    margin: auto;
  }
  .uls{
    display: flex;
    display: -webkit-flex;
    align-items: center;
    justify-content: space-around;
    font-size: 0.7rem;
    font-weight: 600;
    padding: 0 1rem;
    background: white;
  }
  #sto{
    font-size: 0.85rem;
  }
  .uls a{
    color: black;
    text-decoration: none;
  }
  .uls p{
    border-bottom: 1px solid #fff;
  }
  .router-link-active p{
    color: #73a1db;
    border-bottom: 1px solid #73a1db;
  }
  .uls li{
    height: 100%;
    text-align: center;
    line-height:2.5rem;
    color: black;
  }
  .top-wrap{
    width: 100%;
    height: 5.4rem;
  }

</style>
