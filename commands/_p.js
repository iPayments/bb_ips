var p = JSON.parse(Libs.iPayments.checkPrice("TRX","USDT","1"));
Bot.sendMessage(p.status);
