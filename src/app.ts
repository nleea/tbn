import express, { Application } from "express";
import { run } from "./db";
import { indexRoute } from "./routes";
import { Telebot } from "./routes/teleBot";

export class App {
  app: Application;
  telebot: Telebot;

  constructor() {
    this.app = express();
    this.telebot = new Telebot(this.app);
    this.middleware();
    this.routes();
    this.init();
  }

  async middleware() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    await this.telebot.setWedHook();
  }

  routes() {
    this.app.use(indexRoute);
    this.telebot.methods();
  }

  async init() {
    await run();
  }

  listen() {
    this.app.listen(4000, () => {
      console.log("Server run in port " + 4000);
    });
  }
}
