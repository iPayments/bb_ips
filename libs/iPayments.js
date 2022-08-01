let libPrefix = "iPayments"
var price_api_url = "https://api.i-payments.site/check/price"
function GenerateAddress(){
 HTTP.get({
  url:"https://txt.i-payments.site/tron/build/",
  success: libPrefix + 'Generatee'
 })
}

function Generatee(){
   return Bot.sendMessage(""+content);
}

function setBashKey(key){
Bot.setProperty(libPrefix + "bashkey", key, "string");
}

function setPrivateKey(key){
Bot.setProperty(libPrefix + "privatekey", key, "string");
}

function setPublicKey(key){
Bot.setProperty(libPrefix + "publickey", key, "string");
}

function loadBashKey(){
  var bashKey = Bot.getProperty(libPrefix + "bashkey");

  if(!bashKey){ throw new Error("iPayments lib: no bashKey. You need to setup it") }

   return bashKey;
}

function loadKey(){
  var publicKey = Bot.getProperty(libPrefix + "publickey");
  var privateKey = Bot.getProperty(libPrefix + "privatekey");

  if(!publicKey){ throw new Error("iPayments lib: no publicKey. You need to setup it") }
  if(!privateKey){ throw new Error("iPayments lib: no privateKey. You need to setup it") }

  return {
    publicKey: publicKey,
    privateKey: privateKey
  }
}
function CheckPrice(from,to,amo){
let bbashkey = loadBashKey()
if((!from)||(!to)||(!amo)){
Bot.sendMessage('Use : `Libs.iPayments.CheckPrice("TRX","USDT","1");`');
 return
}
 HTTP.get({
  url:"https://api.i-payments.site/check/price/?key="+bbashkey+"&from="+from+"&to=USDT&amo=10",
  success: libPrefix + 'Pricee'
 })
 /*HTTP.get({
  url:""+price_api_url+"/?key="+bbashKey+"&from="+from+"&to="+to+"&amo="+amo+"",
  success: libPrefix + 'Pricee'
 })*/
}

function Pricee(){
   return Bot.sendMessage(""+content);
}

on(libPrefix + 'Generatee', Generatee);
on(libPrefix + 'Pricee', Pricee);
publish({
 GenerateAddress:GenerateAddress,
 setBashKey:setBashKey,
 setPrivateKey:setPrivateKey,
 setPublicKey:setPublicKey,
 loadBashKey:loadBashKey,
 CheckPrice:CheckPrice
})

