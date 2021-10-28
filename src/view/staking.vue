<template>
    <div class="container">
        <Header></Header>
        <div class="banner">
            <img src="../assets/farm1.png" width="100%" v-show="!_isMobile">
            <img src="../assets/banner1.png" width="100%" v-show="_isMobile">
            <a class="toPlay"><img src="../assets/Image1.png"></a>
        </div>
        <div class="panel">
            <div class="dataPanel">
                <div class="dataItem">
                    <h2>NFTO earned</h2>
                    <h3>{{totalEarnNfto.toFixed(4)}}</h3>
                </div>
                <div class="dataItem">
                    <h2>Your NFTO wallet balance</h2>
                    <h3>{{nftoBalance}}</h3>
                </div>
            </div>
            <!--Pool1 started-->
            <div class="poolPanel pool1">
                <p class="poolTips">Stake SHERO、USDT、TRX、POSCHE、OSK  to earn yNFTO、NFTO</p>
                <div class="thead">
                    <div class="th">Token Name</div>
                    <!-- <div class="th">APR</div> -->
                    <div class="th">Earned</div>
                </div>
                <div class="poolList">
                    <!-- START-->
                    <div class="poolItem" v-show="item.active==mobActive && _isMobile || !_isMobile" v-for="(item,index) in pool1List" :key="index" @click="pool1Active=item.active">
                        <div class="poolTitle">
                            <div class="names">
                                <img :src="item.img">
                                {{item.name}}
                                <i class="seltoken" @click="selPop = true"></i>
                            </div>
                            <!-- <div class="apr">{{item.apr}}%</div> -->
                            <div class="earned">
                                <div>
                                    <p>{{item.earnsTotal.yNFTO}} yNFTO</p>
                                    <p>{{item.earnsTotal.NFTO}} NFTO</p>
                                </div>
                                <i class="downico"></i>
                            </div>
                        </div>
                        <div class="poolCon" v-show="pool1Active==item.active">
                            <div class="stakecon">
                                <div class="formPanel">
                                    <div class="formTitle">
                                        <p>Stake</p>
                                        <p>Balance:<span>{{item.balance}}</span></p>
                                    </div>
                                    <div class="formPut">
                                        <input v-model="item.stakePutNum">
                                        <span @click="item.stakePutNum = item.balance">MAX</span>
                                    </div>
                                    <div class="formBtns" v-show="isLogin">
                                        <el-button class="btn active" :loading="item.doApproved" :disabled="item.doApproved" v-show="!item.isApproved && item.name!=='TRX'" @click="toApprove(item,index,0)">Approve</el-button>
                                        <el-button class="btn" :class="item.isApproved || item.name == 'TRX'?'isAll active':''" :disabled="!item.isApproved && item.name!=='TRX'" @click="doDeposit(item,index)">Deposit</el-button>
                                    </div>
                                    <div class="formBtns" v-show="!isLogin">
                                        <el-button class="btn active isAll" @click="contPop = true">Unclock Wallet</el-button>
                                    </div>
                                </div>
                            </div>
                            <div class="unstakeCon">
                                <div class="formPanel">
                                    <div class="formTitle">
                                        <p>Unstake</p>
                                        <p>Balance:<span>{{item.unBalance}}</span></p>
                                    </div>
                                    <div class="formPut">
                                        <input v-model="item.withPutNum">
                                        <span @click="item.withPutNum = item.unBalance">MAX</span>
                                    </div>
                                    <div class="formBtns" v-show="isLogin">
                                        <el-button class="btn isAll" :class="item.unBalance>0?'active':''" :disabled="item.unBalance==0" @click="doExit(item,index)">Withdraw</el-button>
                                    </div>
                                    <div class="formBtns" v-show="!isLogin">
                                        <el-button class="btn active isAll" @click="contPop = true">Unclock Wallet</el-button>
                                    </div>
                                </div>
                            </div>
                            <div class="earnCon">
                                <div class="claimCon">
                                    <p class="nums">{{item.noWithdrow.yNFTO}}<span>yNFTO</span></p>
                                    <p class="nums">{{item.noWithdrow.NFTO}}<span>NFTO</span></p>
                                </div>
                                <div class="claimCon">
                                    <el-button class="claimbtn" @click="claimed(item,index)" v-show="isLogin">Claim</el-button>
                                    <el-button class="claimbtn" @click="contPop = true" v-show="!isLogin">Unclock Wallet</el-button>
                                    <p class="fee">2% fee for claiming</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- END-->
                </div>
            </div>
            <!--Pool1 end-->
            <!--Pool2 start-->
            <div class="poolPanel pool2">
                <p class="poolTips">Stake 5%NFT0/95%yNFT0 LP to earn NFT0</p>
                <div class="thead">
                    <div class="th">Token Name</div>
                    <div class="th">APR</div>
                    <div class="th">Earned</div>
                </div>
                <div class="poolList">
                    <!-- START-->
                    <div class="poolItem" v-for="(item,index) in pool2List" :key="index" @click="pool2Active=item.active">
                        <div class="poolTitle">
                            <div class="names">
                                <div class="logos">
                                    <img src="../assets/logo1.png">
                                    <img src="../assets/logo2.png">
                                </div>
                                {{item.name}}
                            </div>
                            <div class="apr">{{item.apr}}%</div>
                            <div class="earned">
                                <div>
                                    <p>{{item.earnsTotal.NFTO}} NFTO</p>
                                </div>
                                <i class="downico"></i>
                            </div>
                        </div>
                        <div class="poolCon" v-show="pool2Active==item.active">
                            <div class="stakecon">
                                <div class="formPanel">
                                    <div class="formTitle">
                                        <p>Stake</p>
                                        <p>Balance:<span>{{item.balance}}</span></p>
                                    </div>
                                    <div class="formPut">
                                        <input v-model="item.stakePutNum">
                                        <span @click="item.stakePutNum = item.balance">MAX</span>
                                    </div>
                                    <div class="formBtns" v-show="isLogin">
                                        <el-button class="btn active" :loading="item.doApproved" :disabled="item.doApproved" v-show="!item.isApproved" @click="toApprove(item,index,1)">Approve</el-button>
                                        <el-button class="btn" :class="item.isApproved?'isAll active':''" :disabled="!item.isApproved" @click="doDeposit(item,index)">Deposit</el-button>
                                    </div>
                                    <div class="formBtns" v-show="!isLogin">
                                        <el-button class="btn active isAll" @click="contPop = true">Unclock Wallet</el-button>
                                    </div>
                                </div>
                            </div>
                            <div class="unstakeCon">
                                <div class="formPanel">
                                    <div class="formTitle">
                                        <p>Unstake</p>
                                        <p>Balance:<span>{{item.unBalance}}</span></p>
                                    </div>
                                    <div class="formPut">
                                        <input v-model="item.withPutNum">
                                        <span @click="item.withPutNum = item.unBalance">MAX</span>
                                    </div>
                                    <div class="formBtns" v-show="isLogin">
                                        <el-button class="btn isAll" :class="item.unBalance>0?'active':''" :disabled="item.unBalance==0" @click="doExit(item,index)">Withdraw</el-button>
                                    </div>
                                    <div class="formBtns" v-show="!isLogin">
                                        <el-button class="btn active isAll" @click="contPop = true">Unclock Wallet</el-button>
                                    </div>
                                </div>
                            </div>
                            <div class="earnCon">
                                <div class="claimCon">
                                    <p class="unClaim">{{item.noWithdrow.NFTO}} NFTO</p>
                                    <el-button class="claimbtn" @click="claimed(item,index)" v-show="isLogin">Claim</el-button>
                                    <el-button class="claimbtn" @click="contPop = true" v-show="!isLogin">Unclock Wallet</el-button>
                                    <p class="fee">2% fee for claiming</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- END-->
                </div>
            </div>
            <!--Pool2 end-->
            <!--Pool3 start-->
            <div class="poolPanel pool3">
                <p class="poolTips">Stake NFTO/TRX LP to earn NFTO</p>
                <div class="thead">
                    <div class="th">Token Name</div>
                    <!-- <div class="th">APR</div> -->
                    <div class="th">Earned</div>
                </div>
                <div class="poolList">
                    <!-- START-->
                    <div class="poolItem" v-for="(item,index) in pool3List" :key="index" @click="pool3Active=item.active">
                        <div class="poolTitle">
                            <div class="names">
                                <div class="logos">
                                    <img src="../assets/logo1.png">
                                    <img src="../assets/farm6.png">
                                </div>
                                {{item.name}}
                            </div>
                            <!-- <div class="apr">{{item.apr}}%</div> -->
                            <div class="earned">
                                <div>
                                    <p>{{item.earnsTotal.NFTO}} NFTO</p>
                                </div>
                                <i class="downico"></i>
                            </div>
                        </div>
                        <div class="poolCon" v-show="pool3Active==item.active">
                            <div class="stakecon">
                                <div class="formPanel">
                                    <div class="formTitle">
                                        <p>Stake</p>
                                        <p>Balance:<span>{{item.balance}}</span></p>
                                    </div>
                                    <div class="formPut">
                                        <input v-model="item.stakePutNum">
                                        <span @click="item.stakePutNum = item.balance">MAX</span>
                                    </div>
                                    <div class="formBtns" v-show="isLogin">
                                        <el-button class="btn active" :loading="item.doApproved" :disabled="item.doApproved" v-show="!item.isApproved" @click="toApprove(item,index,2)">Approve</el-button>
                                        <el-button class="btn" :class="item.isApproved?'isAll active':''" :disabled="!item.isApproved" @click="doDeposit(item,index)">Deposit</el-button>
                                    </div>
                                    <div class="formBtns" v-show="!isLogin">
                                        <el-button class="btn active isAll" @click="contPop = true">Unclock Wallet</el-button>
                                    </div>
                                </div>
                            </div>
                            <div class="unstakeCon">
                                <div class="formPanel">
                                    <div class="formTitle">
                                        <p>Unstake</p>
                                        <p>Balance:<span>{{item.unBalance}}</span></p>
                                    </div>
                                    <div class="formPut">
                                        <input v-model="item.withPutNum">
                                        <span @click="item.withPutNum = item.unBalance">MAX</span>
                                    </div>
                                    <div class="formBtns" v-show="isLogin">
                                        <el-button class="btn isAll" :class="item.unBalance>0?'active':''" :disabled="item.unBalance==0" @click="doExit(item,index)">Withdraw</el-button>
                                    </div>
                                    <div class="formBtns" v-show="!isLogin">
                                        <el-button class="btn active isAll" @click="contPop = true">Unclock Wallet</el-button>
                                    </div>
                                </div>
                            </div>
                            <div class="earnCon">
                                <div class="claimCon">
                                    <p class="unClaim">{{item.noWithdrow.NFTO}} NFTO</p>
                                    <el-button class="claimbtn" @click="claimed(item,index)" v-show="isLogin">Claim</el-button>
                                    <el-button class="claimbtn" @click="contPop = true" v-show="!isLogin">Unclock Wallet</el-button>
                                    <p class="fee">2% fee for claiming</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- END-->
                </div>
            </div>
            <!--Pool3 end-->
        </div>
        <!--Pop-->
        <div class="successPop" v-show="sucPop">
            <i class="closeIco" @click="sucPop = false"></i>
            <p>{{tips}}</p>
        </div>
        <!--selPop-->
        <div class="selPopWrap" v-show="selPop">
            <div class="selPopInner">
                <ul class="poolList">
                    <li v-for="(item,index) in pool1List" :key="index" @click="mobActive = item.active;selPop = false;pool1Active = item.active">
                        <div class="names">
                            <img :src="item.img">
                            {{item.name}}
                        </div>
                        <i v-show="item.active == mobActive"></i>
                    </li>
                </ul>
            </div>
        </div>
        <Footer></Footer>
        <Ipopup :showAlert="contPop" @closePop="contPop=false" @contented="connectWallet"></Ipopup>
    </div>
</template>
<script>
import BigNumber from 'bignumber.js'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import ipConfig from '../config/contracts.js'
import Ipopup from '../components/ipopup.vue'
import {
  approved,
  allowance,
  bPoolAllowance,
  getMyBalanceInPool
} from '../utils/tronwebFn'

import sheroimg from '../assets/farm4.png'
import usdtimg from '../assets/farm5.png'
import trximg from '../assets/farm6.png'
import oskimg from '../assets/farm7.png'
import poscheimg from '../assets/farm8.png'

export default {
  name: 'staking',
  components:{Header,Footer,Ipopup},
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
      sucPop:false,
      selPop:false,
      contPop:false,
      pool1Active:0,
      pool2Active:1,
      pool3Active:1,
      mobActive:0,
      tips:'',
      nftoBalance:0,
      totalEarnNfto:0,
      isLogin:false,
      pool1List:[
          {
              poool:1,
              active:0,
              name:'SHERO(High APR)',
              img:sheroimg,
              apr:'0',
              balance:0,
              unBalance:0,
              stakePutNum:0,
              withPutNum:0,
              tokenAddress:ipConfig.SHERO,
              farmAddress:ipConfig.SheroFarmPool,
              earnsTotal:{'NFTO':'0','yNFTO':'0'},
              noWithdrow:{'NFTO':'0','yNFTO':'0'}
          },
          {
              poool:1,
              active:1,
              name:'SHERO(old)',
              img:sheroimg,
              apr:'0',
              balance:0,
              unBalance:0,
              stakePutNum:0,
              withPutNum:0,
              tokenAddress:ipConfig.SHERO,
              farmAddress:'TPhvzQiw6HW1hYRPbeMehcprFtR6EqA7Nq',
              earnsTotal:{'NFTO':'0','yNFTO':'0'},
              noWithdrow:{'NFTO':'0','yNFTO':'0'}
          },
          {
              poool:1,
              active:2,
              name:'USDT',
              img:usdtimg,
              apr:'0',
              balance:0,
              unBalance:0,
              stakePutNum:0,
              withPutNum:0,
              tokenAddress:ipConfig.USDT,
              farmAddress:ipConfig.UsdtFarmPool,
              earnsTotal:{'NFTO':'0','yNFTO':'0'},
              noWithdrow:{'NFTO':'0','yNFTO':'0'}
          },
          {
              poool:1,
              active:3,
              name:'TRX',
              img:trximg,
              apr:'0',
              balance:0,
              unBalance:0,
              stakePutNum:0,
              withPutNum:0,
              tokenAddress:'',
              farmAddress:ipConfig.TrxFarmPool,
              earnsTotal:{'NFTO':'0','yNFTO':'0'},
              noWithdrow:{'NFTO':'0','yNFTO':'0'}
          },
          {
              poool:1,
              active:4,
              name:'POSCHE',
              img:poscheimg,
              apr:'0',
              balance:0,
              unBalance:0,
              stakePutNum:0,
              withPutNum:0,
              tokenAddress:ipConfig.POSCHE,
              farmAddress:ipConfig.PoscheFarmPool,
              earnsTotal:{'NFTO':'0','yNFTO':'0'},
              noWithdrow:{'NFTO':'0','yNFTO':'0'}
          },
          {
              poool:1,
              active:5,
              name:'OSK',
              img:oskimg,
              apr:'0',
              balance:0,
              unBalance:0,
              stakePutNum:0,
              withPutNum:0,
              tokenAddress:ipConfig.OSK,
              farmAddress:ipConfig.OskFarmPool,
              earnsTotal:{'NFTO':'0','yNFTO':'0'},
              noWithdrow:{'NFTO':'0','yNFTO':'0'}
          },
          {
              poool:1,
              active:6,
              name:'USDT(old)',
              img:usdtimg,
              apr:'0',
              balance:0,
              unBalance:0,
              stakePutNum:0,
              withPutNum:0,
              tokenAddress:ipConfig.USDT,
              farmAddress:'TP24Ew7UQiEbXja5mzeCA2Q4kzXmcnUgBb',
              earnsTotal:{'NFTO':'0','yNFTO':'0'},
              noWithdrow:{'NFTO':'0','yNFTO':'0'}
          }
      ],
      pool2List:[
          {
              poool:2,
              active:1,
              name:'5%NFT0/95%yNFT0 LP',
              img:sheroimg,
              apr:'0',
              balance:0,
              unBalance:0,
              stakePutNum:0,
              withPutNum:0,
              tokenAddress:ipConfig.SheroswapLP1,
              farmAddress:ipConfig.TwoFarmPool,
              earnsTotal:{'NFTO':'0'},
              noWithdrow:{'NFTO':'0'}
          }
      ],
      pool3List:[
          {
              poool:3,
              active:1,
              name:'NFTO/TRX LP',
              img:sheroimg,
              apr:'0',
              balance:0,
              unBalance:0,
              stakePutNum:0,
              withPutNum:0,
              tokenAddress:ipConfig.JustswapLP2,
              farmAddress:ipConfig.ThreeFarmPool,
              earnsTotal:{'NFTO':'0'},
              noWithdrow:{'NFTO':'0'}
          }
      ]
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
     init(){
         this.getAllwance()
         this.getNftoBalance()
     },
     showLinkPop(){
      if(!this.isLogin){
        this.contPop = true
      }
    },
    connectWallet(){
      this.contPop = false
      const that = this
      this.$initTronWeb().then(function(tronWeb) {
          that.isLogin = true
        that.init()
      })
    },
     async getNftoBalance(){
        const tokenContract = await window.tronWeb.contract().at(ipConfig.NFTO)
        const tokenBalance = await tokenContract['balanceOf'](window.tronWeb.defaultAddress.base58).call()
        this.nftoBalance = (tokenBalance / Math.pow(10, 6)).toFixed(4)
     },
     getAllwance(){
         let that = this
         this.pool1List.forEach((item,index)=>{
             setTimeout(() => {
                 that.getAccountInfo(item,index,0)
             }, 1000);
             that.getBalance(item,index,0)
             that.getAllowance(item,index,0)
         })
        //  this.pool2List.forEach((item,index)=>{
        //     that.getAllowance(item,index,1)
        //     that.getBalance(item,index,1)
        //     that.getAccountInfo(item,index,1)
        //  })
         this.pool3List.forEach((item,index)=>{
            that.getAccountInfo(item,index,3)
            getMyBalanceInPool(item).then((res) => {
                let balance = res/Math.pow(10,6)
                balance = Math.floor(100*balance);
                item.balance = (balance/100).toFixed(2);
            })
            bPoolAllowance(item.tokenAddress, item.farmAddress).then((res) => {
                const isApproved = parseInt(res.constant_result[0], 16)
                if (isApproved == 0) {
                    item.isApproved = false
                } else {
                    item.isApproved = true
                }
            })
         })
     },
    getAllowance(item,index,type){
        if(item.name == 'TRX' || item.poool === 3){
            return
        }
        allowance(item.tokenAddress, item.farmAddress).then((res) => {
            if (res) {
                let hex = ''
                if (res._hex) {
                    hex = parseInt(res._hex, 16)
                } else if (res.remaining._hex) {
                    hex = parseInt(res.remaining._hex, 16)
                } else {
                    hex = parseInt(res.constant_result[0], 16)
                }
                if (hex == 0) {
                    item.isApproved = false
                } else {
                    item.isApproved = true
                }
                if(type==0){
                    this.pool1List[index] = item
                }else if(type==1){
                    this.pool2List[index] = item
                }else if(type==2){
                    this.pool3List[index] = item
                }
            }    
        })
    },
    async getBalance(item,index,type) { // 获取余额
        if(item.name == 'TRX'){
            var that = this
            window.tronWeb.trx.getAccount(window.tronWeb.defaultAddress.base58).then(function(account) {
                that.pool1List[index].balance = window.tronWeb.fromSun(account.balance)
            })
            return
        }
        if(item.poool == 3){
            const tokenContract = await window.tronWeb.contract().at(item.tokenAddress)
            debugger
            console.log(tokenContract)
        }
        const tokenContract = await window.tronWeb.contract().at(item.tokenAddress)
        const tokenBalance = await tokenContract['balanceOf'](window.tronWeb.defaultAddress.base58).call()
        let balance = (tokenBalance / Math.pow(10, 6))
        if(item.name == 'OSK' || item.name == 'OSK(old)'){
            balance = (tokenBalance / Math.pow(10, 18))
        }
        balance = Math.floor(100*balance);
        balance = (balance/100).toFixed(2);
        if(type==0){
            this.pool1List[index].balance = balance
        }else if(type==1){
            this.pool2List[index].balance = balance
        }else if(type==2){
            this.pool3List[index].balance = balance
        }
    },
    async getAccountInfo(item,index,type){//获取总收益及apr
      const farmContract = await window.tronWeb.contract().at(item.farmAddress)
      const totalEarn = await farmContract['earnedOf'](window.tronWeb.defaultAddress.base58).call()
      const claimEarn = await farmContract['claimOf'](window.tronWeb.defaultAddress.base58).call()
      const accountInfo = await farmContract['farmAccountOf'](window.tronWeb.defaultAddress.base58).call()
      item.unBalance = accountInfo.NowTotalJoinAmount / Math.pow(10,6)
      if(item.name == 'OSK' || item.name == 'OSK(old)'){
        item.unBalance = accountInfo.NowTotalJoinAmount / Math.pow(10,18)
      }
      item.apr = parseInt(totalEarn.Apr)
      item.earnsTotal.NFTO = (totalEarn.Earned / Math.pow(10,6)).toFixed(6)
      item.earnsTotal.yNFTO = (totalEarn.Earned * 57 / Math.pow(10,6)).toFixed(6)
      item.noWithdrow.NFTO = (claimEarn.ClaimAmount / Math.pow(10,6)).toFixed(6)
      item.noWithdrow.yNFTO = (claimEarn.ClaimAmount * 57 / Math.pow(10,6)).toFixed(6)
      this.totalEarnNfto += parseFloat(item.earnsTotal.NFTO)
      console.log(item.name,totalEarn.Apr)
        if(type==0){
            this.pool1List[index] = item
        }else if(type==1){
            this.pool2List[index] = item
        }else if(type==2){
            this.pool3List[index] = item
        }
    },
    async doDeposit(item,index){
        if(item.name == 'OSK(old)' || item.name == 'USDT(old)'){
            return
        }
        if(item.poool == 2){
            this.$message.success('Comming Soon!')
            return
        }
      let that = this  
      if(item.name == 'TRX'){
          let Contract = await window.tronWeb.contract().at(item.farmAddress)
          const res = await Contract['joinFarm']().send({
            feeLimit: 100000000,
            callValue: window.tronWeb.toSun(item.stakePutNum),
            tokenId: 0,
            shouldPollResponse: true
          })
          if(res){
              that.$message.success('Success')
              that.getBalance(item,index)
              that.getAccountInfo(item,index)
          }
          return
      }
      let num = new BigNumber(item.stakePutNum)
      num = item.name == 'OSK'?num.times(Math.pow(10,18)) :num.times(Math.pow(10,6))  
      var functionSelector = 'joinFarm(uint256)'
      var parameter = [
        { type: 'uint256', value: num.toFixed() }
      ]
      const transaction = await window.tronWeb.transactionBuilder.triggerSmartContract(item.farmAddress, functionSelector, {}, parameter)
      if (!transaction.result || !transaction.result.result) { return console.error('Unknown error: ' + transaction, null, 2) }
      window.tronWeb.trx.sign(transaction.transaction).then(function(signedTransaction) {
          window.tronWeb.trx.sendRawTransaction(signedTransaction).then(function(res) {
              that.tips =  'You have successfully deposited ' + item.name
            //   that.sucPop = true
              that.$message.success(that.tips)
              that.getBalance(item,index)
              that.getAccountInfo(item,index)
          })
      })
    },
    async claimed(item,index){
        if(item.name == 'OSK(old)' || item.name == 'USDT(old)'){
            return
        }
        if(item.poool == 2){
            this.$message.success('Comming Soon!')
            return
        }
      let that = this  
      let num = new BigNumber(item.stakePutNum)
    //   num = num.times(Math.pow(10,6))  
      num = item.name == 'OSK'?num.times(Math.pow(10,18)) :num.times(Math.pow(10,6))  
      var functionSelector = 'claim()'
      var parameter = [
      ]
      const transaction = await window.tronWeb.transactionBuilder.triggerSmartContract(item.farmAddress, functionSelector, {}, parameter)
      if (!transaction.result || !transaction.result.result) { return console.error('Unknown error: ' + transaction, null, 2) }
      window.tronWeb.trx.sign(transaction.transaction).then(function(signedTransaction) {
          window.tronWeb.trx.sendRawTransaction(signedTransaction).then(function(res) {
              let tiptoken = ''
              if(item.poool == 1){
                tiptoken = 'NFTO and yNFTO'
              }else{
                  tiptoken = 'NFTO'
              }
              that.tips =  'You have successfully claimed ' + tiptoken
              that.$message.success(that.tips)
              that.getBalance(item,index)
              that.getAccountInfo(item,index)
          })
      })
    },
    async doExit(item,index){
        if(item.poool == 2){
            this.$message.success('Comming Soon!')
            return
        }
      let that = this  
      let num = new BigNumber(item.withPutNum)
    //   num = num.times(Math.pow(10,6))  
      num = (item.name == 'OSK' || item.name == 'OSK(old)')?num.times(Math.pow(10,18)) :num.times(Math.pow(10,6))  
      var functionSelector = 'exitFarm(uint256)'
      var parameter = [
        { type: 'uint256', value: num+'' }
      ]
      const transaction = await window.tronWeb.transactionBuilder.triggerSmartContract(item.farmAddress, functionSelector, {}, parameter)
      if (!transaction.result || !transaction.result.result) { return console.error('Unknown error: ' + transaction, null, 2) }
      window.tronWeb.trx.sign(transaction.transaction).then(function(signedTransaction) {
          window.tronWeb.trx.sendRawTransaction(signedTransaction).then(function(res) {
              that.tips =  'You have successfully withdrawed ' + item.name
              that.$message.success(that.tips)
              that.getBalance(item,index)
              that.getAccountInfo(item,index)
          })
      })
    },
    async toApprove(item,index,type){//授权
        let that = this
        if(item.name == 'OSK(old)' || item.name == 'USDT(old)'){
            return
        }
        if(item.poool == 2){
            this.$message.success('Comming Soon!')
            return
        }
        if(item.poool == 3){
            var functionSelector = 'approve(address,uint256)'
            var parameter = [
                { type: 'address', value: item.farmAddress },
                { type: 'uint256', value: '1000000000000000000000000000000' }
            ]
            const transaction = await window.tronWeb.transactionBuilder.triggerSmartContract(
                item.tokenAddress,
                functionSelector,
                { shouldPollResponse: true },
                parameter
            )
            window.tronWeb.trx
                .sign(transaction.transaction)
                .then(function(signedTransaction) {
                window.tronWeb.trx
                    .sendRawTransaction(signedTransaction)
                    .then(function(res) {
                        that.pool3List[index].doApproved = false
                        that.pool3List[index].isApproved = true
                    })
                })
            return
        }
        
        if(type==0){
            this.pool1List[index].doApproved = true
        }else if(type==1){
            this.pool2List[index].doApproved = true
        }else if(type==2){
            this.pool3List[index].doApproved = true
        }
        approved(item.tokenAddress, item.farmAddress).then((res) => {
            if(type==0){
                that.pool1List[index].doApproved = false
                that.pool1List[index].isApproved = true
            }else if(type==1){
                that.pool2List[index].doApproved = false
                that.pool3List[index].isApproved = true
            }else if(type==2){
                that.pool3List[index].doApproved = false
                that.pool3List[index].isApproved = true
            }
            that.tips =  'You have successfully approved.'
            that.$message.success(that.tips)
        })
     }
  },
  created(){
    const that = this
    this.$initTronWeb().then(function(tronWeb) {
        that.contPop = false
        that.isLogin = true
      that.init()
    })
  }
}
</script>
<style lang="less" scoped>
@font-face { // 正常
    font-family: DFPBuDingW12; 
    src:url('../assets/DFPBuDingW12.ttf');
}
.successPop{
    position:fixed;
    z-index:999;
    width:687px;
    height:149px;
    top:30%;
    left:50%;
    margin-left:-344px;
    background:url(../assets/popBg.png) no-repeat center;
    background-size:100% 100%;
    .closeIco{
        position:absolute;
        right:11px;
        top:6px;
        width:36px;
        height:32px;
        background:url(../assets/close.png) no-repeat center;
        background-size:100% 100%;
        cursor: pointer;
    }
    p{
        padding-top: 60px;
        text-align: center;
        font-size:28px;
        color:#fff;
        line-height:33px;
        font-family: Roboto-Medium, Roboto;
    }
}
.formPanel{
    .formTitle{
        padding-top:6px;
        padding-bottom:12px;
        display:flex;
        justify-content: space-between;
        p{
            font-size:16px;
            color:#C4753A;
            line-height:19px;
            span{
                color:#fff;
            }
        }
    }
    .formPut{
        width:100%;
        height:72px;
        line-height:72px;
        padding:0 12px;
        background:#210801;
        border-radius:8px;
        display:flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        input{
            width:80%;
            line-height:72px;
            background:none;
            border:none;
            outline: none;
            font-size:26px;
            color:#FFFFFF;
        }
        span{
            background:#380E00;
            border-radius:18px;
            font-size:14px;
            color:#E5B72A;
            line-height:14px;
            cursor: pointer;
            padding:7px 0;
            width:56px;
            box-sizing: border-box;
        }
    }
    .formBtns{
        padding-top:32px;
        display:flex;
        justify-content: space-between;
        .btn{
            width:120px;
            height:56px;
            background:#210801;
            border-radius:8px;
            text-align:center;
            font-size:18px;
            color:#FFFFFF;
            border:none;
            font-family: DFPBuDingW12;
            &.isAll{
                width:100%;
            }
            &.active{
                background:#E5B72A;
                color:#280800;
            }
        }
    }
}
    .container{
        font-family: DFPBuDingW12;
        .banner{
            position:relative;
            img{
                width:100%;
            }
            .toPlay{
                position:absolute;
                top:75%;
                left:50%;
                margin-left:-347px;
                width:693px;
                height:96px;
                cursor: pointer;
                img{
                    width:100%;
                }
            }
        }
        .panel{
            background:url(../assets/img_03.png) no-repeat center;
            background-size:cover;
            overflow:hidden;
            padding-bottom:414px;
            .dataPanel{
                background:url(../assets/farm3.png) no-repeat center;
                background-size:100% 100%;
                width:1200px;
                height:606px;
                display:flex;
                justify-content:center;
                margin:86px auto 0;
                .dataItem{
                    text-align:center;
                    padding-top:273px;
                    width:42%;
                    h2{
                        font-size:32px;
                        color:#FFE1B8;
                        line-height:33px;
                        font-family: DFPBuDingW12;
                    }
                    h3{
                        font-size:56px;
                        line-height:56px;
                        color:#fff;
                        padding-top:42px;
                        padding-bottom:25px;
                    }
                    p{
                        font-size:20px;
                        line-height:20px;
                        color:#fff;
                    }
                }
            }
            .poolPanel{
                margin:0 auto;
                .poolTips{
                    font-size: 25px;
                    line-height:28px;
                    color:#FFE1B8;
                    text-align:center;
                    padding:138px 0 100px;
                }
                &.pool1{
                    width:1280px;
                    height:1330px;
                    background:url(../assets/farm9.png) no-repeat center;
                    background-size:100% 100%;
                    padding:0 170px 0;
                    box-sizing: border-box;
                    margin-top:56px;
                }
                &.pool2{
                    width:1280px;
                    height:769px;
                    background:url(../assets/farm10.png) no-repeat center;
                    background-size:100% 100%;
                    padding:0 170px 0;
                    box-sizing: border-box;
                    margin-top:56px;
                }
                &.pool3{
                    width:1280px;
                    height:786px;
                    background:url(../assets/farm11.png) no-repeat center;
                    background-size:100% 100%;
                    padding:0 170px 0;
                    box-sizing: border-box;
                    margin-top:56px;
                }
                .thead{
                    display:flex;
                    justify-content: space-between;
                    .th{
                        font-size:16px;
                        color:#fff;
                        line-height:19px;
                        padding:20px 0;
                        width:15%;
                        text-align:left;
                        &:nth-child(2){
                            text-align:center;
                        }
                        &:nth-child(3){
                            text-align:right;
                            padding-right:60px;
                            box-sizing: border-box;
                        }
                    }
                }
                .poolList{
                    .poolItem{
                        border-top:1px solid #9B5323;
                        cursor: pointer;
                        .poolTitle{
                            display:flex;
                            justify-content: space-between;
                            font-family: Roboto-Medium, Roboto;
                            .names{
                                display:flex;
                                align-items: center;
                                line-height:80px;
                                font-size:20px;
                                color:#fff;
                                width:16%;
                                text-align:left;
                                white-space: nowrap;
                                img{
                                    width:40px;
                                    height:40px;
                                    margin-right:8px;
                                }
                                .logos{
                                    margin-right:8px;
                                    img{
                                        margin-right:0;
                                        &:nth-child(2){
                                            margin-left:-20px;
                                        }
                                    }
                                }
                            }
                            .apr{
                                font-size:16px;
                                color:#fff;
                                line-height:80px;
                                width:15%;
                                text-align:center;
                            }
                            .earned{
                                display:flex;
                                align-items: center;
                                width:15%;
                                text-align:left;
                                i{
                                    width:32px;
                                    height:32px;
                                    background: url(../assets/icon_down.png) no-repeat center;
                                    background-size:100% 100%;
                                }
                                p{
                                    font-size:14px;
                                    color:#fff;
                                    line-height:19px;
                                }
                            }
                        }
                        .poolCon{
                            display:flex;
                            justify-content: space-between;
                            align-items: center;
                            padding-top:20px;
                            padding-bottom:60px;
                            .stakecon,.unstakeCon{
                                width:268px;
                            }
                            .earnCon{
                                padding-right:40px;
                               .claimCon{
                                   .unClaim{
                                       font-size:36px;
                                       text-align:center;
                                       color:#fff;
                                       line-height:100%;
                                       padding-top:24px;
                                   }
                                   .usdtclaim{
                                       padding-top:18px;
                                       font-size:16px;
                                       color:#fff;
                                       line-height:100%;
                                       padding-bottom:20px;
                                   }
                                   .nums{
                                       text-align:center;
                                       font-size:26px;
                                       color:#FFFFFF;
                                       line-height:100%;
                                       padding-bottom:9px;
                                       span{
                                           font-size:14px;
                                            font-family: Roboto-Medium, Roboto;
                                            padding-left:4px;
                                       }
                                   }
                                   .claimbtn{
                                       width:160px;
                                       height:44px;
                                       background:#E5B72A;
                                       border-radius:8px;
                                       font-size:18px;
                                       color:#280800;
                                       border:none;
                                       font-family: DFPBuDingW12;
                                       margin:20px 0;
                                   }
                                   .fee{
                                       font-size:16px;
                                       color:#fff;
                                       line-height:100%;
                                       padding-top:10px;
                                   }
                               } 
                            }
                        }

                    }
                }
            }
        }
    }
@media screen and (max-width:900px) {
    .successPop{
        width:300px;
        margin-left:-150px;
        height:110px;
        .closeIco{
            width:18px;
            height:16px;
        }
        p{
            font-size:16px;
            color:#fff;
            line-height:22px;
            padding-top:45px;
        }
    }
    .selPopWrap{
        position:fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background:rgba(0,0,0,0.5);
        z-index:999;
        .selPopInner{
            position:absolute;
            bottom:0;
            left:0;
            right:0;
            background:url(../assets/token.png) no-repeat center;
            background-size:100% 100%;
            padding:52px 38px 12px;
            .poolList{
                li{
                    margin-bottom:28px;
                    display:flex;
                    justify-content: space-between;
                    .names{
                        display:flex;
                        justify-content: center;
                        img{
                            width:32px;
                            height:32px;
                            margin-right:12px;
                        }
                        font-size:16px;
                        line-height:100%;
                        color:#fff;
                        align-items: center;
                    }
                    i{
                        width:28px;
                        height:28px;
                        background: url(../assets/img_jiantou1.png) no-repeat center;
                        background-size:100% 100%;
                    }
                }
            }
        }
    }
    .formPanel{
        .formTitle{
            padding:0 20px 15px;
            p{
                font-size:18px;
                font-weight:500;
            }
        }
        .formPut{
            height:86px;
            line-height:86px;
            span{
                line-height:19px;
                width:67px;
            }
        }
        .formBtns{
            padding-top:23px;
            .btn{
                width:144px;
                height:66px;
                font-size:22px;
            }
        }
    }
    .container{
        .banner{
            .toPlay{
                width:202px;
                height:28px;
                margin-left:-101px;
            }
        }
        .panel{
            padding-bottom:328px;
            
            .dataPanel{
                width:auto;
                height:710px;
                background:url(../assets/farm13.png) no-repeat center;
                background-size:100% 100%;
                display:block;
                margin-left:12px;
                margin-right:12px;
                box-sizing: border-box;
                .dataItem{
                    width:100%;
                    padding-top:180px;
                    h2{
                        font-size: 24px;
                        color:#FFE1B8;
                        line-height:24px;
                        width:80%;
                        margin:0 auto;
                    }
                    h3{
                        font-size:44px;
                        color:#fff;
                        line-height:100%;
                        padding:16px 0 30px;
                    }
                }
            }
            .poolPanel {
                padding:0 25px;
                .poolTips{
                    padding: 80px 0px 34px;
                    font-size:16px;
                }
                &.pool1{
                    width:100%;
                    height:1255px;
                    background:url(../assets/pool14.png) no-repeat center;
                    background-size:100% 100%;
                    padding:0 25px 0;
                }
                &.pool2{
                    width:100%;
                    height:1096px;
                    background:url(../assets/pool15.png) no-repeat center;
                    background-size:100% 100%;
                    padding:0 24px 0;
                     .poolTips{
                        padding: 80px 0px 34px;
                    }
                    .thead{
                        .th{
                            &:nth-child(2){
                                width:30%;
                                text-align:right;
                            }
                            &:nth-child(3){
                                width:16%;
                            }
                        }
                    }
                    .poolList{
                        .poolItem{
                            .earnCon{
                                .claimCon{
                                    .unClaim{
                                        padding-top:0;
                                        padding-bottom:40px;
                                    }
                                }
                            }
                        }
                    }
                }
                &.pool3{
                    width:100%;
                    height:1088px;
                    background:url(../assets/pool16.png) no-repeat center;
                    background-size:100% 100%;
                    padding:0 24px 0;
                    .thead{
                        .th{
                            &:nth-child(2){
                                width:15%;
                                text-align:right;
                            }
                            &:nth-child(3){
                                width:16%;
                            }
                        }
                    }
                    .poolList{
                        .poolItem{
                            .earnCon{
                                .claimCon{
                                    .unClaim{
                                        padding-top:0;
                                        padding-bottom:40px;
                                    }
                                }
                            }
                        }
                    }
                }
                .thead{
                    .th{
                        width:auto;
                        padding:26px 0 16px;
                        font-family: Roboto-Medium, Roboto;
                        &:last-child{
                            text-align:right;
                            padding-right:0;
                            width: 24%
                        }
                    }
                }
                .poolList{
                    .poolItem{
                        .poolTitle{
                            padding:10px 0 24px;
                            .names{
                                width:auto;
                                line-height:28px;
                                font-size:16px;
                                img{
                                    width:28px;
                                    height:28px;
                                    margin-right:4px;
                                }
                                .seltoken{
                                    width:20px;
                                    height:20px;
                                    background:url(../assets/img_jiantou.png) no-repeat center;
                                    background-size:100% 100%;
                                }
                            }
                            .apr{
                                width:auto;
                                font-size:14px;
                                line-height:28px;
                            }
                            .earned{
                                width:auto;
                                p{
                                    font-size:12px;
                                    line-height:17px;
                                    white-space: nowrap;
                                }
                                .downico{
                                    display:none;
                                }
                            }
                        }
                        .poolCon{
                            padding-top:0;
                            display:block;
                            .stakecon{
                                width:100%;
                            }
                            .unstakeCon{
                                width:100%;
                                padding-top:40px;
                            }
                            .earnCon{
                                width:100%;
                                padding-right:0;
                                .claimCon{
                                    &:first-child{
                                        padding-top:70px;
                                    }
                                    .nums{
                                        font-size:24px;
                                        line-height:24px;
                                        span{
                                            font-size:14px;
                                        }
                                        padding-bottom:36px;
                                    }
                                    .claimbtn{
                                        margin:0;
                                    }
                                    .fee{
                                        font-family: Roboto-Medium, Roboto;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}    
</style>>