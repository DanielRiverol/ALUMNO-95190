// const fs = require("fs") //ES5 <
// import fs from "node:fs" //ES6
import express from "express";
import { engine } from "express-handlebars";
import logger from "./middlewares/logger.js";
import userRouter from "./routes/api/users.routes.js";
import viewRouter from "./routes/view.routes.js";
import viewUserRouter from "./routes/users.routes.js";

// settings
const app = express();
app.set("view engine", "handlebars");
app.engine("handlebars", engine());
app.set("views", "src/views");
// middlewares global
app.use(express.json());
app.use(logger);

// routes (endpoint/punto final)
app.use("/", viewRouter);
app.use("/users", viewUserRouter);
// routes API (/api)
app.use("/api/users", userRouter);

// listen
app.listen(3000, () => console.log("Server corriendo en el puerto 3000"));
