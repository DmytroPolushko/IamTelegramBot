const TelegramBot = require('node-telegram-bot-api');

const token = '2019086311:AAG7fmvFJ6HtYx0FzVMyjYVoFbAaGGJAwpM';

const bot = new TelegramBot(token, { polling: true });

const arrBotMsg = ['hi', 'hello', 'waths up']

const randomWord = (min, max) => {
	let rand = min + Math.random() * (max + 1 - min)
	return Math.floor(rand)

	// let rand = min - 0.5 + Math.random() * (max - min + 1)
	// return Math.round(rand)
}

bot.on('message', msg => {
	const { id: id, first_name: userName } = msg.chat;

	if (msg.text == 'hello') {
		bot.sendMessage(id, `${arrBotMsg[randomWord(0,2)]} ${userName}`)
	}
}) 