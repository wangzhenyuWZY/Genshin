<template>
  <div class="container">
    <Header @toGame='toGame' @toNews='toNews' @toNft='toNft' @toToken='toToken' @toMap='toMap' @toContact='toContact'></Header>
    <div class="panel1">
      <img src="../assets/ren.png" class="ren">
      <img src="../assets/ren1.png" class="ren1">
      <div class="bannerinfo">
        <img src="../assets/logo.png" class="logo">
        <div class="text"><img src="../assets/bannerinfo.png"></div>
        <div class="btns">
          <a class="btn" @click="comesoon"><img src="../assets/btn1.png"></a>
          <a class="btn" target="_black" href="https://medium.com/@GenshinNFT"><img src="../assets/btn2.png"></a>
        </div>
      </div>
    </div>
    <div class="panel2">
      <div class="titlebox" id="game">
        <img src="../assets/title1.png">
      </div>
      <div class="panel1con">
        <div class="video">
          <iframe width="100%" height="100%" src="https://youtu.be/QRjzdT1RsmI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="right">
          <img src="../assets/panelimg2.png">
          <img src="../assets/panelimg3.png">
          <img src="../assets/panelimg4.png">
        </div>
      </div>
    </div>
    <div class="panel3">
      <div class="titlebox" id="news">
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
        <div class="right1">
          <img src="../assets/panelimg8.png" class="img1">
          <img src="../assets/mobimg3.png" class="img2">
          <img src="../assets/mobimg4.png" class="img2">
          <img src="../assets/panelimg9.png" class="img4">
        </div>
      </div>
    </div>
    <div class="panel4" id="nft">
      <div class="titlebox"></div>
      <div class="panel4list">
        <div class="panel4item" @click="checktab(0)">
          <img src="../assets/panelimg10.png">
          <img src="../assets/panelimg11.png">
        </div>
        <div class="panel4item" @click="checktab(1)">
          <img src="../assets/panelimg12.png">
          <img src="../assets/panelimg13.png">
        </div>
        <div class="panel4item" @click="checktab(2)">
          <img src="../assets/panelimg14.png">
          <img src="../assets/panelimg15.png">
        </div>
      </div>
    </div>
    <div class="panel5">
      <div class="titlebox" id="token">
        <img src="../assets/title3.png">
      </div>
      <img class="panel5img1" src="../assets/panelimg16.png">
      <img class="panel5img1-1" src="../assets/mobimg7.png">
      <div class="tokeninfo">
        <img class="panel5img2" src="../assets/panelimg17.png">
        <img class="panel5img2" src="../assets/panelimg18.png">
        <img class="panel5img2" src="../assets/panelimg19.png">
      </div>
      <div class="tokeninfo1">
        <img class="panel5img2" src="../assets/mobimg8.png">
        <img class="panel5img2" src="../assets/mobimg9.png">
        <img class="panel5img2" src="../assets/mobimg10.png">
      </div>
      <img class="panel5img3" src="../assets/panelimg20.png">
      <div class="network">
        <img class="panel5img4" src="../assets/panelimg21.png">
        <img class="panel5img4" src="../assets/panelimg22.png">
        <img class="panel5img4" src="../assets/panelimg23.png">
      </div>
      <div class="panel5img5">
        <img src="../assets/panelimg24.png">
        <img src="../assets/mobimg11.png">
      </div>
      <img class="panel5img6" src="../assets/panelimg25.png">
      <img class="panel5img6-1" src="../assets/mobimg12.png">
    </div>
    <div class="panel6" id="map">
      <div class="titlebox">
        <img src="../assets/title4.png">
      </div>
      <img class="panel6img1" src="../assets/panelimg26.png">
      <img class="panel6img1-1" src="../assets/mobimg14.png">
    </div>
    <div class="panel7">
      <div class="titlebox">
        <img src="../assets/title5.png">
      </div>
      <ul class="partnerList">
        <img src="../assets/panelimg27.png">
        <img src="../assets/panelimg28.png">
        <img src="../assets/panelimg29.png">
        <img src="../assets/panelimg30.png">
        <img src="../assets/panelimg31.png">
        <img src="../assets/panelimg32.png">
        <img src="../assets/panelimg33.png">
        <img src="../assets/panelimg34.png">
        <img src="../assets/panelimg35.png">
        <img src="../assets/panelimg36.png">
        <img src="../assets/panelimg37.png">
        <img src="../assets/panelimg38.png">
      </ul>
    </div>
    <Footer id="contact"></Footer>
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
    comesoon(){
      this.$message.success("Coming Soon!");
    },
    linkTo(i){
      localStorage.setItem('active',i)
      this.$router.push('/staking')
    },
    checktab(n){
      this.$router.push({
         path: '/portalA',
         query: {
             tab: n
         }
     })
    },
    toGame(){
      this.$el.querySelector('#game').scrollIntoView({
          behavior: "smooth",  // 平滑过渡
          block: "start"  // 上边框与视窗顶部平齐。默认值
      });
    },
    toNews(){
      this.$el.querySelector('#news').scrollIntoView({
          behavior: "smooth",  // 平滑过渡
          block: "start"  // 上边框与视窗顶部平齐。默认值
      });
    },
    toNft(){
      this.$el.querySelector('#nft').scrollIntoView({
          behavior: "smooth",  // 平滑过渡
          block: "start"  // 上边框与视窗顶部平齐。默认值
      });
    },
    toToken(){
      this.$el.querySelector('#token').scrollIntoView({
          behavior: "smooth",  // 平滑过渡
          block: "start"  // 上边框与视窗顶部平齐。默认值
      });
    },
    toMap(){
      this.$el.querySelector('#map').scrollIntoView({
          behavior: "smooth",  // 平滑过渡
          block: "start"  // 上边框与视窗顶部平齐。默认值
      });
    },
    toContact(){
      this.$el.querySelector('#contact').scrollIntoView({
          behavior: "smooth",  // 平滑过渡
          block: "start"  // 上边框与视窗顶部平齐。默认值
      });
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
    .ren1{
      display:none;
    }
    .bannerinfo{
      width:40%;
      .logo{
        display:none;
      }
      .text{
        img{
          width:650px;
        }
      }
      .btns{
        display:flex;
        justify-content: center;
        padding-top:30px;
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
      .video{
        width:600px;
        height:370px;
      }
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
      .right1{
        display:none;
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
    .panel5img1-1{
      display:none;
    }
    .tokeninfo1{
      display:none;
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
        &:last-child{
          display:none;
        }
      }
    }
    .panel5img6-1{
      display:none;
    }
  }
  .panel6{
    min-height:1517px;
    background:url(../assets/panelbg6.png) no-repeat center;
    background-size:cover;
    text-align:center;
    position:relative;
    z-index:5;
    .titlebox{
      img{
        margin-top:-30px;
      }
    }
    .panel6img1{
      margin-left:365px;
    }
    .panel6img1-1{
      display:none;
    }
  }
  .panel7{
    position:relative;
    z-index:6;
    min-height:628px;
    background:url(../assets/panelbg5.png) no-repeat center;
    background-size:cover;
    .titlebox{
      img{
        margin-top:-30px;
      }
    }
    .partnerList{
      display:flex;
      justify-content: space-between;
      flex-wrap: wrap;
      width:800px;
      margin:130px auto;
      img{
        margin-bottom:36px;
      }
    }
  }
}
@media screen and (max-width:900px) {
  .container{
    .panel1{
      padding-top:0;
      background:url(../assets/banner1.png) no-repeat center;
      background-size:100% 100%;
      display:block;
      position:relative;
      height:896px;
      .ren{
        display:none;
      }
      .ren1{
        display:block;
        position:absolute;
        right:0;
        bottom:0;
        width:340px;
      }
      .bannerinfo{
        width:100%;
        margin-left:0;
        overflow:hidden;
        .logo{
          display:block;
          margin:72px auto 28px;
        }
        .text{
          img{
            width:345px;
          }
        }
        .btns{
          padding-left:0;
          .btn{
            width:150px;
            height:44px;
            line-height:44px;
            margin:0 12px;
            img{
              width:100%;
            }
          }
        }
      }
    }
    .titlebox{
      background:none;
      img{
        margin-top:34px;
        width:186px;
      }
    }
    .panel2{
      min-height:896px;
      background:url(../assets/mobimg1.png) no-repeat center;
      background-size:100% 100%;
      padding:0 20px;
      .panel1con{
        display:block;
        padding-top:0;
        margin-left:0;
        .video{
          width:100%;
          height:300px;;
        }
        img{
          width:100%;
          margin-top:20px;
        }
        .right{
          display:none;
        }
      }
    }
    .panel3{
      min-height:896px;
      background:url(../assets/mobimg2.png) no-repeat center;
      background-size:100% 100%;
      padding:0 20px;
      .titlebox{
        img{
          margin-top:35px;
        }
      }
      .panel3con{
        &>img{
          display:none;
        }
        .right{
          display:none;
        }
        .right1{
          display:block;
          .img1{
            width:100%;
          }
          .img2{
            width:100%;
            margin-top:14px;
            margin-bottom:18px;
          }
          .img4{
            margin-left: 160px;
            margin-top: 56px;
          }
        }
      }
    }
    .panel4{
      min-height:896px;
      background:url(../assets/mobimg5.png) no-repeat center;
      background-size:100% 100%;
      padding:0 20px;
      overflow:hidden;
      .panel4list{
        display:block;
        .panel4item{
          margin:0;
          width:100%;
          margin-bottom:180px;
          &:last-child{
            margin-bottom:140px;
          }
          img{
            width:100%;
          }
        }
      }
    }
    .panel5{
      min-height:896px;
      background:url(../assets/mobimg6.png) no-repeat center;
      background-size:100% 100%;
      .titlebox{
        img{
          margin-top:35px;
        }
      }
      .panel5img1{
        display:none;
      }
      .panel5img1-1{
        display:block;
        margin:10px auto;
      }
      .tokeninfo{
        display:none;
      }
      .tokeninfo1{
        display:block;
        .panel5img2{
          margin:0 0 46px;
        }
      }
      .network{
        .panel5img4{
          margin:0 6px;
          width:107px;
        }
      }
      .panel5img5{
        img{
          width:365px;
          margin:0 auto;
          display:none;
          &:last-child{
            display:block;
          }
        }
      }
      .panel5img6{
        display:none;
      }
      .panel5img6-1{
        width:215px;
        display:block;
        margin-left:20px;
      }
    }
    .panel6{
      min-height:1382px;
      background:url(../assets/mobimg13.png) no-repeat center;
      background-size:100% 100%;
      padding:0 10px;
      .titlebox{
        img{
          margin-top:35px;
        }
      }
      .panel6img1{
        display:none;
      }
      .panel6img1-1{
        display:block;
        margin-top:70px;
        width:100%;
      }
    }
    .panel7{
      min-height:896px;
      background:url(../assets/mobimg15.png) no-repeat center;
      background-size:100% 100%;
      padding:0 20px;
      .titlebox{
        img{
          margin-top:35px;
        }
      }
      .partnerList{
        width:100%;
        margin:36px auto;
        img{
          width:109px;
          margin-bottom:22px;
        }
      }
    }
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