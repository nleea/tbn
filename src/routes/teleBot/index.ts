import { Telegraf } from "telegraf";
import { Application } from "express";

export class Telebot {
  tele_bot: Telegraf;

  constructor(public app: Application) {
    this.tele_bot = new Telegraf(process.env.TELEGRAN_1!);
  }

  methods() {
    this.tele_bot.command("list", async (ctx) => {
      this.tele_bot.telegram.sendMessage(ctx.chat.id, "Test");
    });
  }

  webhook(webhook: string, path: string = "/bot") {
    this.app.use(this.tele_bot.webhookCallback(path));
    this.tele_bot.telegram.setWebhook(webhook);
  }
}
