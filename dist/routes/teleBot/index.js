"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telebot = void 0;
const telegraf_1 = require("telegraf");
const fs_1 = __importDefault(require("fs"));
class Telebot {
    constructor(app) {
        this.app = app;
        this.tele_bot = new telegraf_1.Telegraf("1803635980:AAGmKGF-cRYdZZ3YevPVtiCVfIxs-TXWMkk");
    }
    methods() {
        this.tele_bot.command("list", (ctx) => __awaiter(this, void 0, void 0, function* () {
            this.tele_bot.telegram.sendMessage(ctx.chat.id, "Test");
        }));
    }
    webhook(webhook, path = "/bot") {
        this.app.use(this.tele_bot.webhookCallback(path));
        try {
            const data = fs_1.default.readFileSync('/etc/nginx/ssl/nginx.crt', 'utf8');
            this.tele_bot.telegram.setWebhook(webhook + "bot", { ip_address: "146.190.216.254" });
        }
        catch (err) {
            console.error(err);
        }
    }
}
exports.Telebot = Telebot;
