let libPrefix = "iPayments"
var price_api_url = "https://api.i-payments.site/check/price"
var build_api_url = "https://api.i-payments.site/v2/build"

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

  if(!publicKey){ Bot.sendMessaage("iPayments lib: no publicKey. You need to setup it") }
  if(!privateKey){ Bot.sendMessaage("iPayments lib: no privateKey. You need to setup it") }

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
Bot.sendMessage('Use : `generateAddress("TRX");`');
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

on(libPrefix + 'Generatee', Generatee);
on(libPrefix + 'Pricee', Pricee);
publish({
 generateAddress:generateAddress,
 setBashKey:setBashKey,
 setPrivateKey:setPrivateKey,
 setPublicKey:setPublicKey,
 loadBashKey:loadBashKey,
 loadKey:loadKey,
 checkPrice:checkPrice
})

