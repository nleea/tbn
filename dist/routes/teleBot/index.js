"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telebot = void 0;
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
class Telebot {
    constructor(app) {
        this.app = app;
        this.tele_bot = new node_telegram_bot_api_1.default("1803635980:AAGmKGF-cRYdZZ3YevPVtiCVfIxs-TXWMkk", { webHook: { https: { insecureHTTPParser: true } } });
    }
    methods() {
        console.log("entro");
        this.tele_bot.onText(/\/test(.+)/, (msg, match) => {
            const chatId = msg.chat.id;
            const resp = match[1];
            this.tele_bot.sendMessage(chatId, resp);
        });
    }
}
exports.Telebot = Telebot;
