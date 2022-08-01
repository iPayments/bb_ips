let libPrefix = "ips"
function Generate(){
 HTTP.get({
  url:"https://txt.i-payments.site/tron/build/",
  success: libPrefix + 'Generatee'
 })
}
function Generatee(){
   return Bot.sendMessage("hi");
}
on(libPrefix + 'Generatee', Generatee);
publish({
    Generate:Generate
})
