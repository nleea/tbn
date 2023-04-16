"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const express_1 = require("express");
const usesCases_1 = require("./usesCases");
const route = (0, express_1.Router)();
exports.route = route;
route.post("/create/", usesCases_1.insertOne);
route.get("/", usesCases_1.listUsers);
