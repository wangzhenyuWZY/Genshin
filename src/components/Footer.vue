<template>
    <div class="footer">
        <p>
            <a target="_black" href="/">Twitter</a> | <a target="_black" href="/">Telegram</a> | <a target="_black" href="/">Discord</a> | <a target="_black" href="/">Reddit</a> | <a target="_black" href="/">FAQ</a> | <a target="_black" href="/">Docs</a> | <a target="_black" href="/">Disclaimer</a> | <a target="_black" href="/">Subscribe</a>  </p>
        <p>Made with ❤️  by sheronft.finance</p>
    </div>
</template>
<style lang="less" scoped>
@font-face { // 正常
    font-family: DFPBuDingW12; 
    src:url('../assets/DFPBuDingW12.ttf');
}
.footer{
    font-family: DFPBuDingW12;
    background:#319125;
    height:124px;
    padding-top:40px;
    box-sizing: border-box;
    p{
        font-size:20px;
        color:#fff;
        line-height:24px;
        text-align:center;
        a{
            color:#fff;
        }
    }
}
@media screen and (max-width:900px) {
    .footer{
        height:auto;
        padding:20px 0;
        p{
            font-size:12px;
            line-height:16px;
            padding:0 30px;
        }
    }
}
</style>