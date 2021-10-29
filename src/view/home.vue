<template>
  <div class="container">
    <Header></Header>
    <div class="panel1">
      <img src="../assets/ren.png" class="ren">
      <div class="bannerinfo">
        <div><img src="../assets/bannerinfo.png"></div>
        <div class="btns">
          <a class="btn"><img src="../assets/btn1.png"></a>
          <a class="btn"><img src="../assets/btn2.png"></a>
        </div>
      </div>
    </div>
    <div class="panel2">
      <div class="titlebox">
        <img src="../assets/title1.png">
      </div>
      <div class="panel1con">
        <img src="../assets/panelimg1.png">
        <div class="right">
          <img src="../assets/panelimg2.png">
          <img src="../assets/panelimg3.png">
          <img src="../assets/panelimg4.png">
        </div>
      </div>
    </div>
    <div class="panel3">
      <div class="titlebox">
        <img src="../assets/title2.png">
      </div>
      <div class="panel3con">
        <img src="../assets/panelimg5.png">
        <div class="right">
          <img src="../assets/panelimg6.png">
          <img src="../assets/panelimg7.png">
          <img src="../assets/panelimg8.png">
          <img src="../assets/panelimg9.png">
        </div>
      </div>
    </div>
    <div class="panel4">
      <div class="titlebox"></div>
      <div class="panel4list">
        <div class="panel4item">
          <img src="../assets/panelimg10.png">
          <img src="../assets/panelimg11.png">
        </div>
        <div class="panel4item">
          <img src="../assets/panelimg12.png">
          <img src="../assets/panelimg13.png">
        </div>
        <div class="panel4item">
          <img src="../assets/panelimg14.png">
          <img src="../assets/panelimg15.png">
        </div>
      </div>
    </div>
    <div class="panel5">
      <div class="titlebox">
        <img src="../assets/title3.png">
      </div>
      <img class="panel5img1" src="../assets/panelimg16.png">
      <div class="tokeninfo">
        <img class="panel5img2" src="../assets/panelimg17.png">
        <img class="panel5img2" src="../assets/panelimg18.png">
        <img class="panel5img2" src="../assets/panelimg19.png">
      </div>
      <img class="panel5img3" src="../assets/panelimg20.png">
      <div class="network">
        <img class="panel5img4" src="../assets/panelimg21.png">
        <img class="panel5img4" src="../assets/panelimg22.png">
        <img class="panel5img4" src="../assets/panelimg23.png">
      </div>
      <div class="panel5img5">
        <img src="../assets/panelimg24.png">
      </div>
      <img class="panel5img6" src="../assets/panelimg25.png">
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
    background:url(../assets/banner.png) no-repeat center;
    background-size:cover;
    position:relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top:40px;
    .ren{
      width:552px;
    }
    .bannerinfo{
      width:40%;
      margin-left:-100px;
      .btns{
        display:flex;
        justify-content: center;
        padding-top:30px;
        padding-left:250px;
        .btn{
          width:219px;
          cursor:pointer;
          margin-left:35px;
        }
      }
    }
  }
  .titlebox{
    background:url(../assets/line.png) no-repeat top center;
    background-size:100% 28px;
    text-align:center;
    min-height:30px;
    img{
      margin-top:-40px;
    }
  }
  .panel2{
    position:relative;
    z-index:2;
    min-height:704px;
    background:url(../assets/panelbg1.png) no-repeat center;
    background-size:cover;
    
    .panel1con{
      display:flex;
      justify-content: center;
      padding-top:70px;
      margin-left: -100px;
      .right{
        margin-left:30px;
        img{
          display:block;
          &:nth-child(2){
            margin:30px 0;
          }
          &:nth-child(3){
            cursor: pointer;
          }
        }
      }
    }
  }
  .panel3{
    min-height:643px;
    background:url(../assets/panelbg2.png) no-repeat center;
    background-size:cover;
    position:relative;
    z-index:3;
    .titlebox{
      img{
        margin-top:-60px;
      }
    }
    .panel3con{
      display:flex;
      justify-content: center;
      align-items: center;
      .right{
        img{
          display:block;
          margin-left:44px;
          &:nth-child(2){
            margin:17px 0 44px 44px;
          }
          &:nth-child(3){
            margin-left:0;
          }
        }
      }
    }
  }
  .panel4{
    min-height:776px;
    background:url(../assets/panelbg3.png) no-repeat center;
    background-size:cover;
    position:relative;
    z-index:3;
    .panel4list{
      display:flex;
      justify-content: center;
      .panel4item{
        text-align:center;
        margin:0 26px;
        width:375px;
        img:first-child{
          height:441px;
          margin-bottom:18px;
        }
      }
    }
  }
  .panel5{
    min-height:1228px;
    position:relative;
    z-index:4;
    background:url(../assets/panelbg4.png) no-repeat center;
    background-size:cover;
    text-align:center;
    .titlebox{
      img{
        margin-top:-25px;
      }
    }
    .panel5img1{
      margin:42px;
    }
    .panel5img2{
      margin:0 34px 34px;
    }
    .panel5img3{
      margin-bottom:24px;
    }
    .panel5img4{
      margin:0 23px;
    }
    .panel5img5{
      margin:40px auto;
      img{
        margin-left:-220px;
      }
    }
  }
  
}
@media screen and (max-width:900px) {
  .container{
    
  }
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