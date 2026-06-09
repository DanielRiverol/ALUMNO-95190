import express from "express";
import { engine } from "express-handlebars";
import { join, __dirname } from "./utils/index.js";
import viewRouter from "./routes/view.routes.js";

// import socket.io
import { Server } from "socket.io";
//settings
const app = express();
app.set("PORT", 3000);
//listeners
const serverHttp = app.listen(app.get("PORT"), () => {
  console.log(`Server on port http://localhost:${app.get("PORT")}`);
});
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", join(__dirname, "views"));

// console.log(join(__dirname, "views"));
// console.log(join(__dirname, "../public"));

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(join(__dirname, "../public")));

// init socket.io
const io = new Server(serverHttp);
//routes
app.use("/", viewRouter);
// ws
io.on("connection", (socket) => {
  console.log(socket);
});
