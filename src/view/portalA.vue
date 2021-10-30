<template>
    <div class="container">
        <Header></Header>
        <div class="topCon">
            <img src="../assets/portal3.png">
        </div>
        <div></div>
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
<style lang="less" scoped>
.topCon{
    height:225px;
    background:url(../assets/portal1.png) no-repeat center;
    background-size:100% 100%;
    text-align:center;
    img{
        margin-top:30px;
    }
}
</style>
