import { Router } from "express";
import { route } from "./recordatorios/urls";

const indexRoute = Router({ mergeParams: true });

indexRoute.use("/user/", route);

export { indexRoute };
