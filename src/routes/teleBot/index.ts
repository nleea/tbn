
import { Application } from "express";
import TelegramBot from "node-telegram-bot-api";

export class Telebot {
  tele_bot: TelegramBot;

  constructor(public app: Application) {
    this.tele_bot = new TelegramBot("1803635980:AAGmKGF-cRYdZZ3YevPVtiCVfIxs-TXWMkk");
  }

  methods() {
    this.tele_bot.onText(/\/test(.+)/, (msg, match) => {
      const chatId = msg.chat.id;
      const resp = match![1];
      this.tele_bot.sendMessage(chatId, resp);
    });
  }

  async setWedHook(){
    await this.tele_bot.setWebHook("https://146.190.216.254/bot1803635980:AAGmKGF-cRYdZZ3YevPVtiCVfIxs-TXWMkk");
  }
}
