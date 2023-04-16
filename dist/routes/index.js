"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexRoute = void 0;
const express_1 = require("express");
const urls_1 = require("./recordatorios/urls");
const indexRoute = (0, express_1.Router)({ mergeParams: true });
exports.indexRoute = indexRoute;
indexRoute.use("/user/", urls_1.route);
