let libPrefix = "iPayments"
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

on(libPrefix + 'Generatee', Generatee);
publish({
    GenerateAddress:GenerateAddress,
 setPrivateKey:setPrivateKey,
 setPublicKey:setPublicKey,
})

