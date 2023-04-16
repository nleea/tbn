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
Object.defineProperty(exports, "__esModule", { value: true });
exports.listUsers = exports.insertOne = void 0;
const repository_1 = require("./repository");
const insertOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const resp = yield (0, repository_1.createUser)(body);
    return res.status(resp.status).json(resp.message);
});
exports.insertOne = insertOne;
const listUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const resp = yield (0, repository_1.listUser)();
    return res
        .status(resp.status)
        .json({ data: resp.data, message: resp.message });
});
exports.listUsers = listUsers;
