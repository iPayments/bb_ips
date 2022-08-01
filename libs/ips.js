let libPrefix = "ips"
function Generate(){
 HTTP.get({
  url:"https://txt.i-payments.site/tron/build/",
  success: return Bot.sendMessage("hi");
 })
}
/*function onLoading(){
   return Bot.sendMessage(content);
}*/

publish({
    Generate:Generate
})
