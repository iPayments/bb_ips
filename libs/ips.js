let libPrefix = "ips"
function Generate(){
 HTTP.get({
  url:"https://txt.i-payments.site/tron/build/",
  success: libPrefix + 'onLoading '
 })
}
function Generatee(){
   return Bot.sendMessage("hi");
}

publish({
    Generate:Generate
})
