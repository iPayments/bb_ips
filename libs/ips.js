
function Generate(){
 HTTP.get({
  url:"https://txt.i-payments.site/tron/build/",
  success:"onGenerated"
 })
}
function onGenerated(){
return Bot.sendMessage(content);
 }
publish({
    Generate:onGenerated
})
