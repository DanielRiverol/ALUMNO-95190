import express from "express";
import { connectDb } from "./config/db.js";
import { envs } from "./config/envs.js";
//settings
const app = express();
app.set("PORT", envs.port);

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.get("/", (req, res) => {
  res.json({ title: "Home Page" });
});


//conectar DB
connectDb()
//listeners
app.listen(app.get("PORT"), () => {
  console.log(`Server on port http://localhost:${app.get("PORT")}`);
});
