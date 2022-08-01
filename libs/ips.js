
function Generate(){
 HTTP.get({
  url:"",
  success:"onGenerated"
}
function onGenerated(){
return Bot.sendMessage(content);
 }
publish({
    Generate:onGenerated
})
