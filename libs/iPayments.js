let libPrefix = "iPayments"
var price_api_url = "https://api.i-payments.site/check/price"
var build_api_url = "https://api.i-payments.site/v2/build"
var balance_api_url = "https://api.i-payments.site/v2/balance"

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

  if(!privateKey){ throw new Error("iPayments lib: no privateKey. You need to setup it") }
  if(!publicKey){ throw new Error("iPayments lib: no publicKey. You need to setup it") }

  return {
    publicKey: publicKey,
    privateKey: privateKey
  }
}
function checkPrice(from,to,amo){
let bbashkey = loadBashKey()
if((!from)||(!to)||(!amo)){
Bot.sendMessage('Use : `Libs.iPayments.CheckPrice("TRX","USDT","1");`');
 return
}
 HTTP.get({
  url:"https://api.i-payments.site/check/price/?key="+bbashkey+"&from="+from+"&to="+to+"&amo="+amo+"",
  success: libPrefix + 'Pricee'
 })
}

function Pricee(){
   return Bot.sendMessage(""+content);
}

function generateAddress(currency){
 let devkeys = loadKey();
  let prikey = devkeys.privateKey
  let pubkey = devkeys.publicKey
 if(!currency){
Bot.sendMessage('Use : `Libs.iPayments.generateAddress("TRX");`');
 return
}
 HTTP.get({
  url:""+build_api_url+"/?PrivateKey="+prikey+"&PublicKey="+pubkey+"&Currency="+currency+"",
  success: libPrefix + 'Generatee'
 })
}

function Generatee(){
   return Bot.sendMessage(""+content);
}

function checkBalance(currency){
  let devkeys = loadKey();
  let prikey = devkeys.privateKey
  let pubkey = devkeys.publicKey
 if(!currency){
Bot.sendMessage('Use : `Libs.iPayments.checkBalance("TRX");`');
 return
}
HTTP.get({
  url:""+balance_api_url+"/?PrivateKey="+prikey+"&PublicKey="+pubkey+"&Currency="+currency+"",
  success: libPrefix + 'Balancee'  
})
}

function Balancee(){
 return Bot.sendMessage(""+content);
} 

on(libPrefix + 'Generatee', Generatee);
on(libPrefix + 'Balancee', Balancee);
on(libPrefix + 'Pricee', Pricee);

publish({
 generateAddress:generateAddress,
 checkBalance:checkBalance,
 setBashKey:setBashKey,
 setPrivateKey:setPrivateKey,
 setPublicKey:setPublicKey,
 loadBashKey:loadBashKey,
 loadKey:loadKey,
 checkPrice:checkPrice
})

