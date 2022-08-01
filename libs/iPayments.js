let libPrefix = "iPayments"
var price_api_url = "https://api.i-payments.site/check/price/?"
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

on(libPrefix + 'Generatee', Generatee);
publish({
    GenerateAddress:GenerateAddress,
 setPrivateKey:setPrivateKey,
 setPublicKey:setPublicKey,
})

