const fs = require("fs");
const path = require("path");

const users = fs.readFileSync("./data/users.json", "utf-8");
// PATH: linux y macos / | windows C:\
// convertimos a obj
const usersToObj = JSON.parse(users);

//  creo el usuario
const nuevoUsuario = { id: 1, nombre: "ali", edad: 23 };
//  agrego al array
usersToObj.push(nuevoUsuario);

// guardo en el archivo
fs.writeFileSync("./data/users.json", JSON.stringify(usersToObj, null, 2));
