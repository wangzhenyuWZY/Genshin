<template>
  <el-dialog
      title=""
      v-model="showAlert"
      :width="_isMobile?'90%':'420px'"
      custom-class="dialog_selct"
      :before-close="closePop">
    <span slot="title" class="select_size">
      <span>Connect to Wallet</span>
      <img class="select_title" src="../assets/icon_instructions.png" alt="">
    </span>
    <div class="conter">

      <div class="mag_list">
        <div class="currency_list" @click="tlink">
          <button class="con-but"> <img src="../assets/conter.png" alt=""> Tronlink wallet <i class="el-icon-loading" v-show="connect!=null"></i>
          </button>
        </div>
      </div>

    </div>
  </el-dialog>
</template>

<script>
export default {
  props:['showAlert'],
  data() {
    return {
      value: '',
      connect: null,
      index: 1,
      conter: 1
      // tokenList: tokenData.tokenList,
    }
  },
  computed: {
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
  created() {

  },
  methods: {
    tlink() {
      this.connectWill()
    },
    connectWill() {
      const that = this
      window.tronWeb.on('addressChanged', function() {
          that.$emit('contented')
      })
    },
    closePop() {
      this.$emit('closePop')
    }
  }
}
</script>

<style  scoped>
.con-p {
  width: 349px;
  height: 21px;
  font-size: 18px;
  font-family: roboto-mediumitalic;
  font-weight: 400;
  color: #878b97;
  line-height: 21px;
  margin-left: 32px;
}
.con-p1 {
  height: 21px;
  font-size: 18px;
  font-family: roboto-mediumitalic;
  font-weight: 400;
  color: #878b97;
  line-height: 21px;
}
.con-p2 {
  height: 21px;
  font-size: 18px;
  font-family: roboto-mediumitalic;
  font-weight: 400;
  color: #fc6446;
  line-height: 21px;
}
.conter {
  margin-top: 40px;
}


.search__box {
  margin-top: 25px;
  margin-bottom: 33px;
}
.select_title {
  height: 24px;
  font-size: 20px;
  font-family: Roboto-Medium, Roboto;
  font-weight: 500;
  color: #fff;
  line-height: 24px;
}
.select_size {
  font-size: 20px;
  color: #fff;
  font-weight: normal;
}
.currency_list {
  width: 260px;
  height: 40px;
  background: #fff;
  border-radius: 10px;
  overflow-y: scroll;
  margin:0 auto;
  display:flex;
  justify-content: center;
  align-item:center;
  cursor: pointer;
}
.con-but {
  height: 24px;
  font-size: 20px;
  font-family: roboto-mediumitalic;
  font-weight: 400;
  color: #0f1730;
  line-height: 24px;
  line-height:40px;
}

.currency_list::-webkit-scrollbar {
  width: 8px;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.currency_list::-webkit-scrollbar-thumb {
  border-radius: 4px;
}
</style>

<style lang="less" scoped>
@media screen and (max-width: 750px) {
  .currency_list {
    width: 100%;
    text-align: center;
    .con-but {
      margin-left: 0;
    }
  }
  .con-p1 {
    font-size: 0.37rem;
  }
  .con-p {
    margin-left: 0;
  }
  .conter {
    padding: 0 20px;
  }
}
</style>
<style>
.dialog_selct {
  width: 420px;
  height: 180px;
  background: #142028;
  border-radius: 20px;
}
.dialog_selct .el-icon-close {
  font-size: 28px;
  color: #fff;
}
.dialog_selct .el-icon-close:hover {
  color: #fff;
}
.el-dialog__body {
  padding: 0;
}
.conter {
  padding: 0 32px;
}
.el-dialog__header {
  padding: 28px 32px 0px;
}
.el-dialog__headerbtn {
  top: 24px;
  right: 34px;
}
 .search__input {
}
.search__input .el-input__inner {
  border-radius: 32px;
  border: 1px solid#FC6446;
  border-radius: 32px;
  padding-left: 77px;
  font-size: 18px;
}
.search__input .el-input__inner::placeholder {
  color: #b7bfc8;
  font-size: 18px;
}
</style>
