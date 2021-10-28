<template>
  <div class="container">
    <Header @toFea='scrollFeature' @toFaq="scrollFaq"></Header>
    <div class="panel1">
      <div class="btns">
        <a class="btn" target="_black"><img src="../assets/b.png"></a>
        <a class="btn" target="_black"><img src="../assets/c.png"></a>
      </div>
      <a @click="linkTo(1)" class="play">
        <img src="../assets/a.png">
      </a>
    </div>
    <div class="panel2" id="feature">
      <img src="../assets/img_05.png">
    </div>
    <div class="panel3">
      <img src="../assets/img02.png">
    </div>
    <div class="panel4" id="faq">
      <img src="../assets/img_07.png">
    </div>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'Home',
  components:{Header,Footer},
  computed: {
    language() {
      return this.$i18n.locale
    },
    _isMobile() {
      let flag = false;
      if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        flag = true // 手机端
      } else {
        flag = false // alert('PC端')
      }
      return flag;
    }
  },
  data() {
    return {
      drawer:false,
      lang:false
    }
  },
  watch: {
      '$i18n.locale'(newValue) {
          if (this.$i18n.locale === 'en') {
              this.lang = false
          } else if (this.$i18n.locale === 'ch') {
              this.lang = true
          }
      }
  },
  methods: {
    linkTo(i){
      localStorage.setItem('active',i)
      this.$router.push('/staking')
    },
    scrollFeature(){
      this.$el.querySelector('#feature').scrollIntoView({
                    behavior: "smooth",  // 平滑过渡
                    block:    "start"  // 上边框与视窗顶部平齐。默认值
                });
    },
    scrollFaq(){
      this.$el.querySelector('#faq').scrollIntoView({
                    behavior: "smooth",  // 平滑过渡
                    block:    "start"  // 上边框与视窗顶部平齐。默认值
                });
    }
  },
  created(){
    
  }
}
</script>
<style lang="less">
.container{
  width: 100%;
  min-height:100vh;
  background:#000;
  font-family: DFPYaSongW9;
  .panel1{
    background:url(../assets/img_01.png) no-repeat center;
    background-size:100% 100%;
    height: 937px;
    display: flex;
    justify-content: center;
    .btns{
      margin-top:38%;
      margin-right:10px;
      .btn{
        display:block;
        margin-bottom:10px;
        cursor: pointer;
        img{
          width:350px;
        }
      }
    }
    .play{
      margin-top:38%;
      img{
        width:388px;
      }
    }
  }
  .panel2{
    height:1244px;
    background:url(../assets/img_02.png) no-repeat center;
    background-size:100% 100%;
    text-align:center;
    img{
      width:1200px;
      margin-top:86px;
    }
  }
  .panel3{
    height:1667px;
    background:url(../assets/farm12.png) no-repeat center;
    background-size:100% 100%;
    text-align:center;
    padding:80px 0 115px;
    box-sizing: border-box;
    img{
      width:1400px;
    }
  }
  .panel4{
    height:1282px;
    background:url(../assets/img_04.png) no-repeat center;
    background-size:100% 100%;
    text-align:center;
    img{
      width:1200px;
      margin-top:86px;
    }
  }
}
@media screen and (max-width:900px) {
  .container{
    .panel1{
      height:auto;
      .btns{
        .btn{
          img{
            width:160px;
          }
        }
      }
      .play{
        img{
           width:186px;
        }
      }
    }
    .panel2{
      height:auto;
      padding:0 10px;
      img{
        width:100%;
        margin:30px 0;
      }
    }
    .panel3{
      height:auto;
      padding:30px 10px;
      img{
        width:100%;
      }
    }
    .panel4{
      height :auto;
      padding:0 10px;
      img{
        width:100%;
      }
    }
  }
}
@media screen and (max-width:1400px) {
  .container .panel1 .play,.container .panel1 .btns{margin-top:35%;}
}
@media screen and (max-width:1920px) {
  .container .panel1 .play,.container .panel1 .btns{margin-top:35%;}
}
@media screen and (min-width:1920px) {
  .container .panel1 .play,.container .panel1 .btns{margin-top:30%;}
}
</style>
<style >
  .el-drawer,.drawer_body {
      width: 60% !important;
      height: 100% !important;
      /* background: url(/src/assets/itembg.png) center center / 100% 100% no-repeat; */
      outline: 0;
  }
  /*.el-drawer__wrapper {*/
  /*    z-index: 2001;*/
  /*}*/
  </style>