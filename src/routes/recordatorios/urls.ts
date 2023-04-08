import { Router } from "express";
import { insertOne, listUsers } from "./usesCases";

const route = Router();

route.post("/create/", insertOne);
route.get("/", listUsers);
export { route };
