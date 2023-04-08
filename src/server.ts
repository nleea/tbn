import dotenv from "dotenv";

dotenv.config();

import("./app").then((e) => {
  new e.App().listen();
});
