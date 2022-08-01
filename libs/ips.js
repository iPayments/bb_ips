let libPrefix = "ips"
function Generate(){
 return Bot.sendMessage("hi");
/* HTTP.get({
  url:"https://txt.i-payments.site/tron/build/",
  success: onloading()
 })*/
}
/*function onLoading(){
   return Bot.sendMessage(content);
}*/

publish({
    Generate:Generate
})
