let libPrefix = "ips"
function Generate(){
 HTTP.get({
  url:"https://txt.i-payments.site/tron/build/",
  success: onloading()
 })
}
function onLoading(){
   return Bot.sendMessage(content);
}

publish({
    Generate:onLoading
})
