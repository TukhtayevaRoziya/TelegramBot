const TelegramBot = require('node-telegram-bot-api');

const token = '5525412729:AAGzZOVndAroOoULT5mN6GhKSaKPrnDskpI';

const bot = new TelegramBot(token, {polling: true});

const keyboard = [
    [
      {
        text: 'I want a cat',
        callback_data: 'moreKeks'
      }
    ],
    [
        {
          text: 'I want a dog',
          callback_data: 'morePes'
        }
    ],
    [
        {
          text: 'I want information about the programmer',
          url: 'https://tukhtayevaroziya.github.io/My_Portfolio/'
        }
      ]
  ];

bot.on('message', (msg) => {
  const chatId = msg.chat.id; 

  bot.sendMessage(chatId, 'Hello Friend! what do you want?', { 
        reply_markup: {
            inline_keyboard: keyboard
        }
    });
});

bot.on('callback_query', (query) => {
    const chatId = query.message.chat.id;

    let img = '';

    if (query.data === 'moreKeks') {
        img = 'keks.png';
    }

    if (query.data === 'morePes') {
        img = 'pes.png';
    }

    if (img) {
        bot.sendPhoto(chatId, img, {
            reply_markup: {
                inline_keyboard: keyboard
            }
        });
    } else {
        bot.sendMessage(chatId, 'Непонятно, давай попробуем ещё раз?', {
            reply_markup: {
                inline_keyboard: keyboard
            }
        });
    }
  });