<template>
    <div class="container">
        <Header></Header>
        <div class="topCon">
            <img src="../assets/portal3.png">
        </div>
        <div class="portalCon">
          <div class="topTab">
            <div class="tabImg" @click="tab = 0;btmtab = 0;">
              <img src="../assets/tab1.png" v-show="parseInt(tab)==0">
              <img src="../assets/tab1-1.png" v-show="parseInt(tab)!==0">
            </div>
            <div class="tabImg" @click="tab = 1;btmtab = 0;">
              <img src="../assets/tab2.png" v-show="parseInt(tab)==1">
              <img src="../assets/tab2-2.png" v-show="parseInt(tab)!==1">
            </div>
            <div class="tabImg" @click="tab = 2;btmtab = 0;">
              <img src="../assets/tab3.png" v-show="parseInt(tab)==2">
              <img src="../assets/tab3-3.png" v-show="parseInt(tab)!==2">
            </div>
          </div>
          <div class="portalPanel">
            <div class="panelImg" v-show="tab==0">
              <img src="../assets/bigimg1.png" v-show="btmtab==0"/>
              <img src="../assets/bigimg2.png" v-show="btmtab==1"/>
              <img src="../assets/bigimg3.png" v-show="btmtab==2"/>
            </div>
            <div class="panelImg" v-show="tab==1">
              <img src="../assets/bigimg4.png" v-show="btmtab==0"/>
              <img src="../assets/bigimg5.png" v-show="btmtab==1"/>
              <img src="../assets/bigimg6.png" v-show="btmtab==2"/>
            </div>
            <div class="panelImg" v-show="tab==2">
              <img src="../assets/bigimg7.png" v-show="btmtab==0"/>
              <img src="../assets/bigimg8.png" v-show="btmtab==1"/>
              <img src="../assets/bigimg9.png" v-show="btmtab==2"/>
            </div>
          </div>
          <div class="btmTab">
            <div class="btmTabList" v-show="tab==0">
              <div class="tabImg" @click="btmtab = 0">
                <img src="../assets/btmimg1.png" v-show="btmtab==0">
                <img src="../assets/btmimg1-1.png" v-show="btmtab!==0">
              </div>
              <div class="tabImg" @click="btmtab = 1">
                <img src="../assets/btmimg2.png" v-show="btmtab==1">
                <img src="../assets/btmimg2-2.png" v-show="btmtab!==1">
              </div>
              <div class="tabImg" @click="btmtab = 2">
                <img src="../assets/btmimg3.png" v-show="btmtab==2">
                <img src="../assets/btmimg3-3.png" v-show="btmtab!==2">
              </div>
            </div>
            <div class="btmTabList" v-show="tab==1">
              <div class="tabImg" @click="btmtab = 0">
                <img src="../assets/btmimg4.png" v-show="btmtab==0">
                <img src="../assets/btmimg4-4.png" v-show="btmtab!==0">
              </div>
              <div class="tabImg" @click="btmtab = 1">
                <img src="../assets/btmimg5.png" v-show="btmtab==1">
                <img src="../assets/btmimg5-5.png" v-show="btmtab!==1">
              </div>
              <div class="tabImg" @click="btmtab = 2">
                <img src="../assets/btmimg6.png" v-show="btmtab==2">
                <img src="../assets/btmimg6-6.png" v-show="btmtab!==2">
              </div>
            </div>
            <div class="btmTabList" v-show="tab==2">
              <div class="tabImg" @click="btmtab = 0">
                <img src="../assets/btmimg7.png" v-show="btmtab==0">
                <img src="../assets/btmimg7-7.png" v-show="btmtab!==0">
              </div>
              <div class="tabImg" @click="btmtab = 1">
                <img src="../assets/btmimg8.png" v-show="btmtab==1">
                <img src="../assets/btmimg8-8.png" v-show="btmtab!==1">
              </div>
              <div class="tabImg" @click="btmtab = 2">
                <img src="../assets/btmimg9.png" v-show="btmtab==2">
                <img src="../assets/btmimg9-9.png" v-show="btmtab!==2">
              </div>
            </div>
            
          </div>
        </div>
        <div class="portalCon portalConMob">
          <div class="topTab">
            <div class="tabImg" @click="tab = 0;btmtab = 0;">
              <img src="../assets/mobtab1.png" v-show="parseInt(tab)==0">
              <img src="../assets/mobtab1-1.png" v-show="parseInt(tab)!==0">
            </div>
            <div class="tabImg" @click="tab = 1;btmtab = 0;">
              <img src="../assets/mobtab2.png" v-show="parseInt(tab)==1">
              <img src="../assets/mobtab2-2.png" v-show="parseInt(tab)!==1">
            </div>
            <div class="tabImg" @click="tab = 2;btmtab = 0;">
              <img src="../assets/mobtab3.png" v-show="parseInt(tab)==2">
              <img src="../assets/mobtab3-3.png" v-show="parseInt(tab)!==2">
            </div>
          </div>
          <div class="portalPanel">
            <div class="panelImg" v-show="tab==0">
              <img src="../assets/bigimg10.png" v-show="btmtab==0"/>
              <img src="../assets/bigimg11.png" v-show="btmtab==1"/>
              <img src="../assets/bigimg12.png" v-show="btmtab==2"/>
            </div>
            <div class="panelImg" v-show="tab==1">
              <img src="../assets/bigimg13.png" v-show="btmtab==0"/>
              <img src="../assets/bigimg14.png" v-show="btmtab==1"/>
              <img src="../assets/bigimg15.png" v-show="btmtab==2"/>
            </div>
            <div class="panelImg" v-show="tab==2">
              <img src="../assets/bigimg16.png" v-show="btmtab==0"/>
              <img src="../assets/bigimg17.png" v-show="btmtab==1"/>
              <img src="../assets/bigimg18.png" v-show="btmtab==2"/>
            </div>
          </div>
          <div class="btmTab">
            <div class="btmTabList" v-show="tab==0">
              <div class="tabImg" @click="btmtab = 0">
                <img src="../assets/btmimg1.png" v-show="btmtab==0">
                <img src="../assets/btmimg1-1.png" v-show="btmtab!==0">
              </div>
              <div class="tabImg" @click="btmtab = 1">
                <img src="../assets/btmimg2.png" v-show="btmtab==1">
                <img src="../assets/btmimg2-2.png" v-show="btmtab!==1">
              </div>
              <div class="tabImg" @click="btmtab = 2">
                <img src="../assets/btmimg3.png" v-show="btmtab==2">
                <img src="../assets/btmimg3-3.png" v-show="btmtab!==2">
              </div>
            </div>
            <div class="btmTabList" v-show="tab==1">
              <div class="tabImg" @click="btmtab = 0">
                <img src="../assets/btmimg4.png" v-show="btmtab==0">
                <img src="../assets/btmimg4-4.png" v-show="btmtab!==0">
              </div>
              <div class="tabImg" @click="btmtab = 1">
                <img src="../assets/btmimg5.png" v-show="btmtab==1">
                <img src="../assets/btmimg5-5.png" v-show="btmtab!==1">
              </div>
              <div class="tabImg" @click="btmtab = 2">
                <img src="../assets/btmimg6.png" v-show="btmtab==2">
                <img src="../assets/btmimg6-6.png" v-show="btmtab!==2">
              </div>
            </div>
            <div class="btmTabList" v-show="tab==2">
              <div class="tabImg" @click="btmtab = 0">
                <img src="../assets/btmimg7.png" v-show="btmtab==0">
                <img src="../assets/btmimg7-7.png" v-show="btmtab!==0">
              </div>
              <div class="tabImg" @click="btmtab = 1">
                <img src="../assets/btmimg8.png" v-show="btmtab==1">
                <img src="../assets/btmimg8-8.png" v-show="btmtab !== 1">
              </div>
              <div class="tabImg" @click="btmtab = 2">
                <img src="../assets/btmimg9.png" v-show="btmtab==2">
                <img src="../assets/btmimg9-9.png" v-show="btmtab!==2">
              </div>
            </div>
            
          </div>
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
      tab:this.$route.query.tab,
      btmtab:0
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
    console.log(this.$route.query.tab)
  }
}
</script>
<style lang="less" scoped>
.topCon{
    height:311px;
    background:url(../assets/portal1.png) no-repeat center;
    background-size:100% 100%;
    text-align:center;
    img{
        margin-top:30px;
    }
}
.portalConMob{
  display:none;
}
.portalCon{
  position:relative;
  .topTab{
    position:absolute;
    top:-150px;
    left:0;
    right:0;
    display:flex;
    justify-content: center;
    .tabImg{
      cursor: pointer;
      margin:0 25px;
    }

  }
  .portalPanel{
    .panelImg{
      img{
        width:100%;
      }
    }
  }
}
.btmTab{
  position:absolute;
  width:100%;
  box-sizing: border-box;
  padding:0 10%;
  background:rgba(0,0,0,0.36);
  left:0;
  bottom:0;
  .btmTabList{
      display:flex;
      justify-content: flex-end;
      width:100%;
      padding-top:18px;
      .tabImg{
        margin-left:30px;
        cursor: pointer;
      }
  }
}
@media screen and (max-width:900px) {
  .portalCon{
    display:none;
  }
  .portalCon.portalConMob{
    padding-top:60px;
    display:block;
    .topTab{
      top:60px;
      justify-content: space-evenly;
      .tabImg{
        margin:0;
        
        img{
          width:112px;
        }
      }
    }
    .portalPanel{
      .panelImg{
        img{
          width:100%;
        }
      }
    }
  }
  .topCon{
    display:none;
  }
  .btmTab{
    padding:12px 20px;
    height:auto;
    box-sizing: border-box;
    .btmTabList{
      width:240px;
      .tabImg{
        margin-right:10px;
        margin-left:0;
        img{
          width:66px;
        }
      }
    }
  }
}
</style>
