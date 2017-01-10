const path = require('path');
const http = require('https');
const fs = require('fs'), json;
const Web3 = require('web3');

/*
//sanity check
console.log("made it to the home.js")
if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}
var addr = web3.net.peercount;
console.log(addr)

var transaction= web3.eth.getTransactionFromBlock("pending",0)
console.log(transaction)
*/

exports.index = (req,res) => {
  res.render('home');
};
exports.vrphotos = (req,res) => {
  var photoIndex = JSON.parse(fs.readFileSync('./public/img/360/360.json'));
  //console.log(photoIndex);
  var data = {photoIndex};
  res.render('vrphotos', data);
};
