// const fs = require("fs") //ES5 <
// import fs from "node:fs" //ES6
import express from "express";
import logger from "./middlewares/logger.js";
import users from "./data/users.js";
// settings
const app = express();

// middlewares global
app.use(express.json());
app.use(logger);

// routes (endpoint/punto final)
app.get("/", (req, res) => {
  res.json({ message: "Hola, estás en la página principal" });
});

app.get("/about", (req, res) => {
  res.json({ message: "Hola, estás en la página ABOUT" });
});
// routes API (/api)
app.get("/api/users", (req, res) => {
  // const users = null error forzado
  if (!users)
    return res
      .status(400)
      .json({ sucess: false, error: "no existen usuarios" });

  res.status(200).json({ success: true, payload: users });
});

app.post("/api/users", (req, res) => {
  const { name } = req.body;
  if (!name)
    return res.status(400).json({ sucess: false, error: "name es requrido" });

  const newUser = {
    id: 3,
    name: name,
  };

  users.push(newUser);
  res.status(201).json({ success: true, payload: newUser });
});


// actualizar, ver por id, eliminar
// frontend = fecth=>data.payload
// listen
app.listen(3000, () => console.log("Server corriendo en el puerto 3000"));
