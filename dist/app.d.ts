import { Application } from "express";
import { Telebot } from "./routes/teleBot";
export declare class App {
    app: Application;
    telebot: Telebot;
    constructor();
    middleware(): void;
    routes(): void;
    init(): Promise<void>;
    listen(): void;
}
//# sourceMappingURL=app.d.ts.map