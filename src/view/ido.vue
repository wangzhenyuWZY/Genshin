<template>
  <div class="idoContainer">
    <Header></Header>
    <div class="idoPanel">
      <div class="title"><img src="../assets/idoico.png"></div>
      <div class="idoCon">
        <h2 class="idotitle"><img src="../assets/idotitle.png"></h2>
        <p class="idotext text1"> The IDO will be open, you will be able to swap the token without being on Whitelist.</p>
        <p class="idotext text2">{{isOpen?'Sale is opening':'Public Sale will be open in'}}</p>
        <p class="downtime">{{day}}: {{hour}} : {{min}}: {{second}}</p>
        <p class="idotext text3">
          Swap Ratio:1BNB=3,533,568 GENSHIN<br>
          Sale Supply:1000,000,000 GENSHIN<br>
          Allocation
        </p>
        <div class="swap">
          <div class="swapput">
            <input placeholder="Amount of BNB" v-model="bnbval">
            <input placeholder="Amount of GENSHIN " v-model="genshinval">
          </div>
          <div class="swaptokens">
            <p>Balance:{{balance}}</p>
            <p>BNB</p>
            <img src="../assets/swapico.png">
            <p>GENSHIN</p>
          </div>
        </div>
        <div class="purchase">
          <img src="../assets/purchasebtn.png" @click="toTransfer">
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import { ethers } from 'ethers'
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
      btmtab:0,
      day: "00",
      hour: "00",
      min: "00",
      second: "00",
      balance:0,
      defaultAccount:'',
      web3:null,
      downTime:1635868800000,
      isOpen:false,
      bnbval:'',
      genshinval:''
    }
  },
  watch: {
      '$i18n.locale'(newValue) {
          if (this.$i18n.locale === 'en') {
              this.lang = false
          } else if (this.$i18n.locale === 'ch') {
              this.lang = true
          }
      },
      bnbval(newValue){
        if(newValue<1){
          this.bnbval = 1
          this.$message.error('The minimum value is 1')
        }else if(newValue>3){
          this.bnbval = 3
          this.$message.error('The maximum is 3')
        }
        this.genshinval = newValue*3533568
      }
  },
  methods: {
    add0(m) {
      return m < 10 ? "0" + m : m;
    },
    format(shijianchuo) {
      //shijianchuo是整数，否则要parseInt转换
      var time = new Date(shijianchuo);
      var y = time.getFullYear();
      var m = time.getMonth() + 1;
      var d = time.getDate();
      var h = time.getHours();
      var mm = time.getMinutes();
      var s = time.getSeconds();
      return (
        y +
        "-" +
        this.add0(m) +
        "-" +
        this.add0(d) +
        " " +
        this.add0(h) +
        ":" +
        this.add0(mm) +
        ":" +
        this.add0(s)
      );
    },
    countTime() {
      let date = new Date();
      let now = date.getTime();
      let end = this.downTime;
      let leftTime = end - now;
      if (leftTime >= 0) {
        this.day = Math.floor(leftTime / 1000 / 60 / 60 / 24);
        let h = Math.floor((leftTime / 1000 / 60 / 60) % 24);
        this.hour = h < 10 ? "0" + h : h;
        let m = Math.floor((leftTime / 1000 / 60) % 60);
        this.min = m < 10 ? "0" + m : m;
        let s = Math.floor((leftTime / 1000) % 60);
        this.second = s < 10 ? "0" + s : s;
      } else {
        this.day = 0;
        this.hour = "00";
        this.min = "00";
        this.second = "00";
      }
      if (
        Number(this.hour) === 0 &&
        Number(this.day) === 0 &&
        Number(this.min) === 0 &&
        Number(this.second) === 0
      ) {
        this.isOpen = true
        return;
      } else {
        setTimeout(this.countTime, 1000);
      }
    },
    async toTransfer(){
      if(parseFloat(this.bnbval)>parseFloat(this.balance)){
        this.$message.error('Insufficient funds for transfer')
        return
      }
      const tx = await this.signer.sendTransaction({ to: "0x063be8c38f2b44751730ce20f902978a401480c7", value: ethers.utils.parseEther(this.bnbval) });
      if(tx){
        this.$message.success('Success!');
      }
    }
  },
  async created(){
    let that = this
    let provider
    let signer
    if (!window.ethereum) {
        return
    }
    provider = new ethers.providers.Web3Provider(window.ethereum)
    signer = provider.getSigner()
    const rpcProvider = new ethers.providers.JsonRpcProvider('https://data-seed-prebsc-1-s1.binance.org:8545/')
    that.defaultAddress  = await signer.getAddress()
    let balance = await provider.getBalance(that.defaultAddress)
    this.balance = (balance/Math.pow(10,18)).toFixed(4)
    this.provider = provider
    this.signer = signer
    this.countTime()
  }
}
</script>
<style lang="less" scoped>
.idoContainer{
  .idoPanel{
    background:url(../assets/idobg.png) no-repeat center;
    background-size:cover;
    min-height:80vh;
    padding-bottom:100px;
    .title{
      text-align:center;
      padding-top:30px;
      img{
        margin-left:-24%;
      }
    }
    .idoCon{
      position:relative;
      left:-13%;
      width:575px;
      height:596px;
      background:url(../assets/idoconbg.png) no-repeat center;
      background-size:100% 100%;
      padding:38px 70px;
      margin:50px auto;
      box-sizing: border-box;
      .idotitle{
        text-align:center;
      }
      .idotext{
        font-size:16px;
        color:#643912;
        line-height:28px;
        width:420px;
        text-align:left;
        &.text2{
          text-align:center;
          padding-top:10px;
          font-size:18px;
        }
        &.text3{
          padding-top:10px;
          padding-bottom:20px;
        }
      }
      .downtime{
        font-size:24px;
        color:#643912;
        line-height:30px;
        font-weight:bold;
      }
      .swap{
        display:flex;
        justify-content: left;
        .swapput{
          width:50%;
          margin-right:20px;
          input{
            width:100%;
            height:38px;
            line-height:38px;
            border:none;
            outline:none;
            background:#643912;
            font-size:14px;
            color:#fff;
            margin-bottom:30px;
            text-indent:10px;
            &::-webkit-input-placeholder{
              color:rgba(255,255,255,0.6);
            }
          }
        }
        .swaptokens{
          text-align:center;
          p{
            font-size:14px;
            color:#643912;
            line-height:28px;
          }

        }
      }
      .purchase{
        text-align:left;
        cursor: pointer;
      }
    }
  }
}
@media screen and (max-width:900px) {
  .idoContainer{
    
    .idoPanel{
      background:url(../assets/idobgmob.png) no-repeat center;
      background-size:cover;
      padding:0 25px 358px;
      .title{
        img{
          width:232px;
          margin-left:0;
        }
      }
      .idoCon{
        left:0;
        width:100%;
        height:396px;
        padding:12px 10px 30px 30px;
        margin:0;
        .idotitle{
          padding-bottom:10px;
          img{
            width:155px;
          }
        }
        .idotext {
          font-size:13px;
          line-height:19px;
          width:100%;
        }
        .swap{
          .swapput{
            input{
              height:36px;
              line-height:36px;
              font-size:13px;
              margin-bottom:10px;
            }
          }
        }
        .purchase{
          padding-top:10px;
        }
      }
    }
  }
}
</style>