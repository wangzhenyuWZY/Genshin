
// var ethers = require('ethers');
// const initWeb3 = () => {
//   return new Promise(function (resolve, reject) {
//       // const web3 = new Web3('https://http-testnet.hecochain.com')
//       var web3Provider
//       if (window.ethereum) {
//           web3Provider = window.ethereum
//           try {
//               // 请求用户授权
//               window.ethereum.enable().then(res => {
//                   let provider = new ethers.providers.Web3Provider(web3Provider);
//                   web3js.eth.defaultAccount = res[0]
//                   resolve(web3js)
//               })
//           } catch (error) {
//               // 用户不授权时
//               console.error('User denied account access')
//           }
//       } else if (window.web3) { // 老版 MetaMask Legacy dapp browsers...
//           web3Provider = window.web3.currentProvider
//           let web3js = new Web3(web3Provider)// web3实例

//           web3js.eth.getAccounts(function (error, result) {
//               web3js.eth.defaultAccount = result[0]
//               resolve(web3js)
//           })
//       }
//   })
// }
const plusXing = (str,frontLen,endLen) => { 
  var len = str.length-frontLen-endLen;
  var xing = '';
  for (var i=0;i<len;i++) {
    xing ='...';
  }
  return str.substring(0,frontLen)+xing+str.substring(str.length-endLen);
}
export {
  plusXing
}
// export default initWeb3
