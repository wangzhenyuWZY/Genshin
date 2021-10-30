<template>
    <div class="footer">
        <img src="../assets/panelimg39.png" class="footbg">
        <div class="footop">
            <div class="footopcon">
                <div class="left">
                    <p class="title">Index</p>
                    <div class="linklist">
                        <div>
                            <a>Home</a>
                            <a>Game Trailer</a>
                            <a>News</a>
                            <a>NFT Portal</a>
                        </div>
                        <div>
                            <a>Tokenomics</a>
                            <a>Getting Started</a>
                            <a>Whitepaper</a>
                            <a>Roadmap</a>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <img src="../assets/panelimg40.png">
                    <img src="../assets/panelimg41.png">
                    <img src="../assets/panelimg42.png">
                    <div class="contact">
                        <img src="../assets/panelimg43.png">
                        <img src="../assets/panelimg44.png">
                        <img src="../assets/panelimg45.png">
                        <img src="../assets/panelimg46.png">
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
        
    }
}
</style>