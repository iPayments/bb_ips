let libPrefix = "ips"

function GenerateAddress(){
  HTTP.get( {
    url: "https://txt.i-payments.site/tron/build/",
    success: libPrefix + 'onLoading '
    // headers: headers - if you need headers
  } )
}

function onLoading(){
   Bot.sendMessage(content);
}

on(libPrefix + 'onLoading', onLoading );
