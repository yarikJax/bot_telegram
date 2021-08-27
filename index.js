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
    bot.sendMessage(msg.chat.id, 'https://docs.google.com/presentation/d/14nGdtP8CeV1Oy-4330hEjnFmbjof3I10/edit?usp=sharing&ouid=100664305604975835247&rtpof=true&sd=true', opts);
  });

   // Matches /tokenomiks
 bot.onText(/\/charts/, function onLoveText(msg) {
    const opts = {
      reply_to_message_id: msg.message_id,
    };
    bot.sendMessage(msg.chat.id, 'Contract Address ERC-20:'+"\n \n"+'0xCA1262E77FB25C0A4112CFC9BAD3FF54F617F2E6(Uniswap)'+"\n"+'https://etherscan.io/token/0xcA1262e77Fb25c0a4112CFc9bad3ff54F617f2e6'+"\n \n"+'BEP-20: 0xCA1262E77FB25C0A4112CFC9BAD3FF54F617F2E6 (Pancakeswap)'+"\n"+'https://bscscan.com/address/0xcA1262e77Fb25c0a4112CFc9bad3ff54F617f2e6', opts);
  });

   // Matches /tokenomiks
 bot.onText(/\/chart/, function onLoveText(msg) {
    const opts = {
      reply_to_message_id: msg.message_id,
    };
    bot.sendMessage(msg.chat.id, 'Contract Address ERC-20:'+"\n \n"+'0xCA1262E77FB25C0A4112CFC9BAD3FF54F617F2E6(Uniswap)'+"\n"+'https://etherscan.io/token/0xcA1262e77Fb25c0a4112CFc9bad3ff54F617f2e6'+"\n \n"+'BEP-20: 0xCA1262E77FB25C0A4112CFC9BAD3FF54F617F2E6 (Pancakeswap)'+"\n"+'https://bscscan.com/address/0xcA1262e77Fb25c0a4112CFc9bad3ff54F617f2e6', opts);
  });

   // Matches /tokenomiks
 bot.onText(/\/price/, function onLoveText(msg) {
    const opts = {
      reply_to_message_id: msg.message_id,
    };
    bot.sendMessage(msg.chat.id, 'BSC - https://dex.guru/token/0xca1262e77fb25c0a4112cfc9bad3ff54f617f2e6-bsc \n \nETH - https://dex.guru/token/0xca1262e77fb25c0a4112cfc9bad3ff54f617f2e6-eth', opts);
  });

   // Matches /tokenomiks
 bot.onText(/\/contract/, function onLoveText(msg) {
    const opts = {
      reply_to_message_id: msg.message_id,
    };
    bot.sendMessage(msg.chat.id, 'Contract Address ERC-20:'+"\n \n"+'0xCA1262E77FB25C0A4112CFC9BAD3FF54F617F2E6(Uniswap)'+"\n"+'https://etherscan.io/token/0xcA1262e77Fb25c0a4112CFc9bad3ff54F617f2e6'+"\n \n"+'BEP-20: 0xCA1262E77FB25C0A4112CFC9BAD3FF54F617F2E6 (Pancakeswap)'+"\n"+'https://bscscan.com/address/0xcA1262e77Fb25c0a4112CFc9bad3ff54F617f2e6', opts);
  });
 
  // hello 
  bot.on('message', (msg) => {
    if (msg.text == 'hi') {
      bot.sendMessage(msg.chat.id, "Hi " + msg.chat.first_name)
    }
  });
  bot.on('message', (msg) => {
    if (msg.text == 'hello') {
      bot.sendMessage(msg.chat.id, "Hi " + msg.chat.first_name)
    }
  });
  bot.on('message', (msg) => {
    if (msg.text == 'hi jax') {
      bot.sendMessage(msg.chat.id, "Hi " + msg.chat.first_name)
    }
  });
  bot.on('message', (msg) => {
    if (msg.text == 'hi jax.network') {
      bot.sendMessage(msg.chat.id, "Hi " + msg.chat.first_name)
    }
  });
  bot.on('message', (msg) => {
    if (msg.text == 'Hi') {
      bot.sendMessage(msg.chat.id, "Hi " + msg.chat.first_name)
    }
  });
  bot.on('message', (msg) => {
    if (msg.text == 'Hello') {
      bot.sendMessage(msg.chat.id, "Hi " + msg.chat.first_name)
    }
  });
  bot.on('message', (msg) => {
    if (msg.text == 'Hi Jax') {
      bot.sendMessage(msg.chat.id, "Hi " + msg.chat.first_name)
    }
  });
  bot.on('message', (msg) => {
    if (msg.text == 'Hi Jax.network') {
      bot.sendMessage(msg.chat.id, "Hi " + msg.chat.first_name)
    }
  });
 
// test
 // Matches /echo [whatever]
//  bot.onText(/\/echo (.+)/, function onEchoText(msg, match) {
//    const resp = match[1];
//    bot.sendMessage(msg.chat.id, resp);
//  });
 
 
 
 