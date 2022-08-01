let libPrefix = "ips"

function Generate(Address){
  HTTP.get( {
    url: "https://txt.i-payments.site/tron/build/",
    success: libPrefix + 'onLoading '
    // headers: headers - if you need headers
  } )
}

function onLoading(){
  publish({
    Generate: content
})
   //Bot.sendMessage(content);
}

on(libPrefix + 'onLoading', onLoading );
