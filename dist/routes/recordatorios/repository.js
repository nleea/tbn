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
exports.listUser = exports.createUser = void 0;
const db_1 = require("../../db");
const createUser = (body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_1.client.connect();
        const database = db_1.client.db("db_0");
        const collection = database.collection("user");
        yield collection.insertOne(body);
        yield db_1.client.close();
        return { message: "Ok", status: 200 };
    }
    catch (error) {
        console.log(error);
        yield db_1.client.close();
        return { message: "Bad Request", status: 404 };
    }
});
exports.createUser = createUser;
const listUser = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_1.client.connect();
        const database = db_1.client.db("db_0");
        const collection = database.collection("user");
        const users = yield collection.find().toArray();
        yield db_1.client.close();
        return { message: "Ok", data: users, status: 200 };
    }
    catch (error) {
        console.log(error);
        yield db_1.client.close();
        return { message: "Bad Request", status: 404 };
    }
});
exports.listUser = listUser;
