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
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const db_1 = require("./db");
const routes_1 = require("./routes");
const teleBot_1 = require("./routes/teleBot");
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.telebot = new teleBot_1.Telebot(this.app);
        this.middleware();
        this.routes();
        this.init();
    }
    middleware() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.telebot.webhook("https://146.190.216.254/");
    }
    routes() {
        this.app.use(routes_1.indexRoute);
        this.telebot.methods();
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, db_1.run)();
        });
    }
    listen() {
        this.app.listen(4000, () => {
            console.log("Server run in port " + 4000);
        });
    }
}
exports.App = App;
