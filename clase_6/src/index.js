import express from "express";
import { connectDb } from "./config/db.js";
import { envs } from "./config/envs.js";
import userRouter from "./routes/user.routes.js";
import productRouter from "./routes/product.routes.js";
//settings
const app = express();
app.set("PORT", envs.port);

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.get("/", (req, res) => {
  res.json({ title: "Home Page" });
});

//conectar DB
connectDb();
//listeners
app.listen(app.get("PORT"), () => {
  console.log(`Server on port http://localhost:${app.get("PORT")}`);
});
