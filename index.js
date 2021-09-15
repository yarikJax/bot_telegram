// import Telegrambot from ='node-telegram-bot-api'

require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

 const TOKEN = process.env.TELEGRAM_TOKEN || process.env.TELEGRAM_TOKEN;
//  const TelegramBot = require('..');
//  const request = require('request');
 const options = {
   polling: true
 };
 const bot = new TelegramBot(TOKEN, options);
 
 
 // Matches /tokenomics
 bot.onText(/\/tokenomics/, function onLoveText(msg) {
   const opts = {
     reply_to_message_id: msg.message_id,
   };
   bot.sendMessage(msg.chat.id, 'https://docs.google.com/spreadsheets/u/1/d/1Ld5S2dN9Ej5sE-jNkcJJD8YSIQUCccHKJjGhwOScTwo/edit#gid=1627582296', opts);
 });

  // Matches /tokenomiks
  bot.onText(/\/burnt/, function onLoveText(msg) {
    const opts = {
      reply_to_message_id: msg.message_id,
    };
    bot.sendMessage(msg.chat.id, 'https://jax.network/wp-content/uploads/2021/09/Burnt-WJXN.pptx.pdf', opts);
  });

   // Matches /tokenomiks
 bot.onText(/\/charts/, function onLoveText(msg) {
    const opts = {
      reply_to_message_id: msg.message_id,
    };
    bot.sendMessage(msg.chat.id, 'BSC - https://www.dextools.io/app/bsc/pair-explorer/0xd55ffea201e689d052e504fbe40ebbe16d3da240 \n \nETH - https://www.dextools.io/app/ether/pair-explorer/0x6ffca04b61a69a10c8076e72c68036cf0222311f ', opts);
  });

   // Matches /tokenomiks
 bot.onText(/\/chart/, function onLoveText(msg) {
    const opts = {
      reply_to_message_id: msg.message_id,
    };
    bot.sendMessage(msg.chat.id, 'BSC - https://www.dextools.io/app/bsc/pair-explorer/0xd55ffea201e689d052e504fbe40ebbe16d3da240 \n \nETH - https://www.dextools.io/app/ether/pair-explorer/0x6ffca04b61a69a10c8076e72c68036cf0222311f ', opts);
  });

   // Matches /tokenomiks
 bot.onText(/\/price/, function onLoveText(msg) {
    const opts = {
      reply_to_message_id: msg.message_id,
    };
    bot.sendMessage(msg.chat.id, 'BSC - https://www.dextools.io/app/bsc/pair-explorer/0xd55ffea201e689d052e504fbe40ebbe16d3da240 \n \nETH - https://www.dextools.io/app/ether/pair-explorer/0x6ffca04b61a69a10c8076e72c68036cf0222311f    ', opts);
  });

   // Matches /tokenomiks
 bot.onText(/\/contract/, function onLoveText(msg) {
    const opts = {
      reply_to_message_id: msg.message_id,
    };
    bot.sendMessage(msg.chat.id, 'Contract Address ERC-20:'+"\n \n"+'0xCA1262E77FB25C0A4112CFC9BAD3FF54F617F2E6(Uniswap)'+"\n"+'https://etherscan.io/token/0xcA1262e77Fb25c0a4112CFc9bad3ff54F617f2e6'+"\n \n"+'BEP-20: 0xCA1262E77FB25C0A4112CFC9BAD3FF54F617F2E6 (Pancakeswap)'+"\n"+'https://bscscan.com/address/0xcA1262e77Fb25c0a4112CFc9bad3ff54F617f2e6', opts);
  });
 
  
 

 
 
 
 