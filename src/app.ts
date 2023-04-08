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

  middleware() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.telebot.webhook("");
  }

  routes() {
    this.app.use(indexRoute);
  }

  async init() {
    await run();
  }

  listen() {
    this.app.listen(process.env.PORT, () => {
      console.log("Server run in port " + process.env.PORT);
    });
  }
}
