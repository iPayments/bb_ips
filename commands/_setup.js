let PrivateKey = "MyBRWrbJY6QJ"
let PublicKey = "gcDY6IDbQTQtERwlYyIs"
let BashKey = "SBRLOZXEqK6fPVi"
Libs.iPayments.setPrivateKey(""+PrivateKey+"");
Libs.iPayments.setPublicKey(""+PublicKey+"");
Libs.iPayments.setBashKey(""+BashKey+"");
Bot.sendMessage("Done");
