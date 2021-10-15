const Web3 = require('web3');
const Token = require('./build/contracts/Token.json');
const ICO = require('./build/contracts/ICO.json');

const init = async () =>{
const web3 = await new Web3 ('http://127.0.0.1:9545/');
const token = await new web3.eth.Contract(Token.abi,'0xA065d270715db57FEAE3a32c69A2e36a46F9c119');
const ico = await new web3.eth.Contract(ICO.abi,'0xf616EC5Ee75AC1a15F9F5EDB3A2E85F3b5392b58');
const Tokenname = await token.methods.name().call();
const icoWallet = await ico.methods.wallet().call();
const IcoBalance = await token.methods.balanceOf('0xf616EC5Ee75AC1a15F9F5EDB3A2E85F3b5392b58').call();

console.log(Tokenname, icoWallet, IcoBalance);
}
init()