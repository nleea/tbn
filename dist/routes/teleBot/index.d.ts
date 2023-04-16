import { Telegraf } from "telegraf";
import { Application } from "express";
export declare class Telebot {
    app: Application;
    tele_bot: Telegraf;
    constructor(app: Application);
    methods(): void;
    webhook(webhook: string, path?: string): void;
}
//# sourceMappingURL=index.d.ts.map