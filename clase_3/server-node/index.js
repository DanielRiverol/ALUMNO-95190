const fs = require("fs");
const path = require("path");
const usersPath = path.join(__dirname, "data", "users.json");
console.log(usersPath);

// const users = fs.readFileSync("./data/users.json", "utf-8");
const users = fs.readFileSync(usersPath, "utf-8");
// PATH: linux y macos / | windows C:\
// convertimos a obj
const usersToObj = JSON.parse(users);

//  creo el usuario
const nuevoUsuario = { id: 1, nombre: "ali", edad: 23 };
//  agrego al array
usersToObj.push(nuevoUsuario);

// guardo en el archivo
fs.writeFileSync(usersPath, JSON.stringify(usersToObj, null, 2));
