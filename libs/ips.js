let libPrefix = "ips"

function Generate(){
 HTTP.get({
  url:"https://txt.i-payments.site/tron/build/",
  success: libPrefix + 'onLoading '
 })
}
function onLoading(){
   Bot.sendMessage(content);
}

on(libPrefix + 'onLoading', onLoading );
/*publish({
    Generate:onGenerated
})*/
