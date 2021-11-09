<template>
    <div class="footer">
        <img src="../assets/panelimg39.png" class="footbg">
        <div class="footop">
            <div class="footopcon">
                <div class="left">
                    <p class="title">Index</p>
                    <div class="linklist">
                        <div>
                            <a @click="toLink(0)">Home</a>
                            <a @click="toLink(1)">Game Trailer</a>
                            <a @click="toLink(2)">News</a>
                            <a @click="toLink(3)">NFT Portal</a>
                        </div>
                        <div>
                            <a @click="toLink(4)">Tokenomics</a>
                            <a @click="comesoon">Getting Started</a>
                            <a target="_black" href="https://medium.com/@GenshinNFT">Whitepaper</a>
                            <a @click="toLink(6)">Roadmap</a>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <img src="../assets/panelimg40.png">
                    <img src="../assets/panelimg41.png">
                    <img src="../assets/panelimg42.png">
                    <div class="contact">
                        <a href="https://twitter.com/GenshinNFT"><img src="../assets/panelimg43.png"></a>
                        <a href="https://t.me/GENSHIN_OFFICIAL"><img src="../assets/panelimg44.png"></a>
                        <img src="../assets/panelimg45.png">
                        <a href="https://medium.com/@GenshinNFT"><img src="../assets/panelimg46.png"></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="footbtm">
            <p>©2021 By Genshinnft.finance<br>
All rights reserved.</p>
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
  },
  data() {
    return {
    }
  },
  watch: {
      
  },
  methods: {
      comesoon(){
      this.$message.success("Coming Soon!");
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
              this.$router.push('/portalA')
          }else if(i==4){
              this.$router.push('/')
              this.$emit('toToken')
          }else if(i==6){
              this.$router.push('/')
              this.$emit('toMap')
          }else if(i==7){
              this.$router.push('/')
              this.$emit('toContact')
          }
          this.drawer = false
      }
  },
  created() {
    
  },
}
</script>
<style lang="less" scoped>
// @font-face { // 正常
//     font-family: DFPBuDingW12; 
//     src:url('../assets/DFPBuDingW12.ttf');
// }
.footer{
    position:relative;
    .footbg{
        position:absolute;
        left:10%;
        bottom:0;
    }
    .footop{
        background:#303030;
        height:264px;
        .footopcon{
            width:1200px;
            margin:0 auto 0;
            display:flex;
            justify-content: space-between;
            padding-top:34px;
            padding-bottom:30px;
            .left{
                margin-left:300px;
                .title{
                    font-size:18px;
                    color:#fff;
                    line-height:31px;
                    font-weight:bold;
                    text-align:left;
                    padding-bottom:22px;
                }
                .linklist{
                    display:flex;
                    justify-content: space-between;
                    font-size:12px;
                    color:#fff;
                    line-height:100%;
                    text-align:left;
                    div{
                        margin-right:90px;
                    }
                    a{
                        padding-bottom:10px;
                        color:#fff;
                        display:block;
                    }
                }
            }
            .right{
                img{
                    display:block;
                }
                .contact{
                    display:flex;
                    justify-content: space-between;
                    img{
                        width:43px;
                    }
                }
            }
        }
    }
    .footbtm{
        background:#222121;
        padding:16px 0;
        height:66px;
        box-sizing: border-box;
        p{
            font-size:12px;
            color:#808080;
            line-height:100%;
        }
    }
}
@media screen and (max-width:900px) {
    .footer{
        .footbg{
            width:135px;
            left:auto;
            right:0;
        }
        .footop{
            height:384px;
            .footopcon{
                width:100%;
                display: block;
                padding-top:62px;
                .left{
                    margin-left:20px;
                    .title{
                        padding-bottom:8px;
                    }
                    .linklist{
                        font-size:12px;
                    }
                }
                .right{
                    margin-left:20px;
                    &>img{
                        &:first-child{
                            display:none;
                        }
                        &:nth-child(2){
                            width:100px;
                            margin-top:25px;
                        }
                        &:nth-child(3){
                            display:none;
                        }
                    }
                    .contact{
                        justify-content: left;
                        img{
                            margin-right:16px;
                        }
                    }
                }
            }
        }
    }
}
</style>