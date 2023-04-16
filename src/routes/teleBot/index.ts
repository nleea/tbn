
import { Application } from "express";
import TelegramBot from "node-telegram-bot-api";

export class Telebot {
  tele_bot: TelegramBot;

  constructor(public app: Application) {
    this.tele_bot = new TelegramBot(process.env.TELEGRAN_1!, { polling: true });
  }

  methods() {
    this.tele_bot.onText(/\/test(.+)/, (msg, match) => {
      const chatId = msg.chat.id;
      const resp = match![1];
      this.tele_bot.sendMessage(chatId, resp);
    });
  }
}
