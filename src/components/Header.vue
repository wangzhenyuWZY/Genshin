<template>
  <div class="headerContainer">
    <div class="header">
        <img src="../assets/logo_FoxDex.png" class="logo">
        <div class="menus">
            <a class="menu" @click="toLink(0)">Home</a>
            <a class="menu" @click="toLink(1)">Game Trailer</a>
            <a class="menu" @click="toLink(2)">News</a>
            <a class="menu" @click="toLink(3)">NFT Portal</a>
            <a class="menu" @click="toLink(4)">Tokenomics</a>
            <a class="menu" @click="toLink(5)">IDO</a>
            <a class="menu" @click="toLink(6)">Roadmap</a>
            <a class="menu" @click="toLink(7)">Contact</a>
        </div>
    </div>
    <div class="mobHeader">
      <img src="../assets/logo_FoxDex.png" class="logo">
      <div class="nav_merge">
          <img class="merge_img" src="../assets/mergeico.png" @click="drawer = true" alt="">
        </div>
        <el-drawer title="我是标题" v-model="drawer" :show-close="false" custom-class="drawer_body" :with-header="false" @click="tolerPop=false">
          <div class="drawer_logo">
            <div class="lt_logo"> <img src="../assets/logo_FoxDex.png" alt="" />
            </div>
            <!-- <div class="rg_colse"> <img src="../assets/closeicon1.png" alt="" @click.stop="drawer = false"> </div> -->
          </div>
          <!-- <div class="drawer_btn">
            <div class="nav-butt">
              <div class="login_wallet drawer_wallet">
                <img class="wallet_img" src="../assets/icon_wallet_green.png" alt="">
                <span class="wallet_addrs">{{defaultAddress}}</span>
              </div>
            </div>
          </div> -->
          <ul class="drawer_nav">
            <li @click="toLink(0)"><a class="menu">Home</a></li>
            <li @click="toLink(1)"><a class="menu">Game Trailer</a></li>
            <li @click="toLink(2)"><a class="menu">News</a></li>
            <li @click="toLink(3)"><a class="menu">NFT Portal</a></li>
            <li @click="toLink(4)"><a class="menu">Tokenomics</a></li>
            <li @click="toLink(5)"><a class="menu">IDO</a></li>
            <li @click="toLink(6)"><a class="menu">Roadmap</a></li>
            <li @click="toLink(7)"><a class="menu">Contact</a></li>
          </ul>
          <div class="langAndSet">
            <!-- <div class="setbox" @click.stop="tolerPop=true"><i class="setico"></i>Setting</div> -->
            <!-- <div class="setbox" @click="hdel"><i class="langico"></i>简体中文</div> -->
            <div class="cantactus">
              <a target="_black" href="/"><img src=""></a>
              <a target="_black" href="/"><img src=""></a>
              <a target="_black" href="/"><img src=""></a>
              <a target="_black" href="/"><img src=""></a>
              <a target="_black" href="/"><img src=""></a>
              <a target="_black" href="/"><img src=""></a>
          </div>
          </div>
        </el-drawer>
    </div>    
  </div>
</template>
<script>
import {plusXing} from '../utils/tronwebFn'
export default {
  name: 'Header',
  computed: {
    language() {
      return this.$i18n.locale
    },
    _isMobile() {
      let flag = false;
      if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        flag = true // 
      } else {
        flag = false // 
      }
      return flag;
    }
  },
  data() {
    return {
      drawer:false,
      lang:false,
      tolerPop:false,
      active:localStorage.getItem('active'),
      defaultAddress:'',
      isLogin:false,
      contPop:false
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
    showLinkPop(){
      if(!this.isLogin){
        this.contPop = true
      }
    },
    connectWallet(){
      let that = this
      this.contPop = false
      this.$initTronWeb().then(function(tronWeb) {
        let defaultAddress = window.tronWeb.defaultAddress.base58
        that.defaultAddress = plusXing(defaultAddress,5,5)
        that.isLogin = true
      })
    },
      toLink(i){
          localStorage.setItem('active',i)
          this.active = i
          if(i==0){
              this.$router.push('/')
          }else if(i==1){
              this.$router.push('/')
              this.$emit('toGame')
          }else if(i==2){
              this.$router.push('/')
              this.$emit('toNews')
          }else if(i==3){
              this.$router.push('/')
              this.$emit('toNft')
          }else if(i==4){
              this.$router.push('/')
              this.$emit('toToken')
          }else if(i==5){
              this.$router.push('/')
              this.$emit('toIdo')
          }else if(i==6){
              this.$router.push('/')
              this.$emit('toMap')
          }else if(i==7){
              this.$router.push('/')
              this.$emit('toContact')
          }
          this.drawer = false
      },
    handleSetLanguage() {
      // 选择语言
      let lang = this.$i18n.locale
      if(lang=='ch'){
        this.$i18n.locale = 'en'
      }else{
        this.$i18n.locale = 'ch'
      }
      window.localStorage.setItem('lang', this.$i18n.locale)
      this.drawer = false
      this.scrollto = 0
    },
  },
  created() {
    let that = this
    this.$initTronWeb().then(function(tronWeb) {
      that.contPop = false
      let defaultAddress = window.tronWeb.defaultAddress.base58
      that.defaultAddress = plusXing(defaultAddress,5,5)
      that.isLogin = true
    })
  },
}
</script>
<style lang="less" scoped>
// @font-face { // 正常
//     font-family: DFPBuDingW12; 
//     src:url('../assets/DFPBuDingW12.ttf');
// }
.header{
    // font-family: DFPBuDingW12;
    height:82px;
    background: linear-gradient(180deg, #323131 0%, #000000 100%);
    display:flex;
    justify-content: center;
    opacity:1;
    .logo{
        width:160px;
    }
    .menus{
        display:flex;
        padding-top:24px;
        padding-left:120px;
        .menu{
            font-size:18px;
            color:#fff;
            line-height:20px;
            position:relative;
            margin:0 25px;
            cursor: pointer;
            height:20px;
            font-family: DFPBuDingW12;
        }
    }
}
.mobHeader{
  display:none;
}
.nav_merge{
    display:none;
}
@media screen and (max-width:900px) {
  .mobHeader{
    height:60px;
    background:url(../assets/headbg.png) no-repeat center;
    background-size:100% 100%;
    position: fixed;
    width: 100%;
    z-index:9;
    display:block;
    display:flex;
    justify-content: space-between;
    .logo{
      width:88px;
      height:38px;
      margin-left:15px;
      margin-top:8px;
    }
  }
    .header{
        display:none;
        height:40px;
        padding:0 15px;
        .logo{
            width:190px;
        }
        .menus{
            display:none;
        }
        .options{
            display:none;
        }
    }
    .nav_merge {
        display:block;
        background:none;
        text-align:right;
        padding-right:20px;
        img {
            vertical-align: middle;
            margin-top: 8px;
            cursor: pointer;
        }
        .merge_img {
            width: 42px;
            height: auto;
        }
    }
    .drawer_logo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  .lt_logo {
    padding-left: 10px;
    img {
      width: 138px;
    }
  }
  .rg_colse {
    padding-right: 10px;
    img {
      // width: 0.9rem;
      width: 23px;
    }
  }
}
.drawer_nav_aubt {
  position: absolute;
  left: 0;
  bottom: 0.7rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
  li {
    img {
      width: 0.58667rem;
    }
  }
}
.drawer_nav {
  // font-size: 0.5rem;
  font-size: 16px;
  margin-top: 15px;
  li {
    line-height: 52px;
    a{
        display:block;
        color:#fff;
        text-align:left;
        padding-left:33px;
        &.active{
            color:#fff;
            background:#05C98E;
        }
    }
  }
}
.drawer_nav_active {
  color: #fc6446;
  font-family: roboto-mediumitalic;
}
.cantactus{
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    img{
        width:22px;
    }
}
.langAndSet {
    position: absolute;
    bottom: 2rem;
    width: 100%;
    text-align: center;
  }
  .langAndSet .setbox {
    font-size: 0.37rem;
    line-height: 44px;
    text-align: left;
    padding-left: 24px;
    margin-bottom:30px;
  }
  .langAndSet .setbox.fr {
    float: right;
    padding-right: 24px;
  }
  // .langAndSet .setbox .setico {
  //   display: inline-block;
  //   vertical-align: middle;
  //   width: 24px;
  //   height: 24px;
  //   background: url(../assets/icon_setting.png) no-repeat center;
  //   background-size: 100% 100%;
  //   margin-right:5px;
  // }
  // .langAndSet .setbox .langico {
  //   display: inline-block;
  //   vertical-align: middle;
  //   width: 24px;
  //   height:24px;
  //   background: url(../assets/icon_lang.png) no-repeat center;
  //   background-size: 100% 100%;
  //   margin-right:5px;
  // }
}
</style>
<style >
.van_list{
  display:flex;
  justify-content: space-between;
  align-items: center;
}
.changeToler{
  width:100%;
  height:36px;
  background:#23323C;
  border-radius:15px;
  line-height:36px;
  padding-left:10px;
  box-sizing: border-box;
  font-size:18px;
  color:#fff;
}
.drawer_body {
  width: 69% !important;
  background: #319125;
  border-radius: 16px 0px 0px 16px;
  color: #ffffff;
  /* position: relative; */
  outline: 0;
}
.drawer_btn{
    padding-top:20px
}
.drawer_wallet{
    width:222px;
    height:34px;
    margin:0 auto;
    background:#1D7112;
    font-size:15px;
    line-height:34px;
   font-family: Roboto-Medium, Roboto;
   border-radius:24px;
}
.drawer_wallet img{
        width:20px;
        height:20px;
        margin-right:4px;
    }
</style>