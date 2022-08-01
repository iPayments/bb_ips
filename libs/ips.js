let libPrefix = "ips"

function Generate(){
 HTTP.get({
  url:"https://txt.i-payments.site/tron/build/",
  success: libPrefix + 'onLoading '
 })
}
function onLoading(){
   return Bot.sendMessage(content);
}

//on(libPrefix + 'onLoading', onLoading );
publish({
    Generate:onLoading
})
