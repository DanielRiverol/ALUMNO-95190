// http
const http = require("http");
const fs = require("fs");
const path = require("path");
const usersPath = path.join(__dirname, "data", "users.json");
// crear el servidor
const server = http.createServer((req, res) => {
  // responder a una solictud
  if (req.url === "/") {
    return res.end("HOME");
  }
  if (req.url === "/about") {
    return res.end("ABOUT");
  }
  if (req.url === "/contact") {
    return res.end("CONTACT");
  }
  if (req.url === "/users") {
    const users = fs.readFileSync(usersPath, "utf-8");
    res.setHeader("Content-Type", "application/json");

    return res.end(users);
  }

  res.end("404 - Page not found");
});
// http://localhost:3000 (numero de puerto)
// http://127.0.0.1:3000 (numero de puerto)

server.listen(3000, () => console.log("Server corriendo en el puerto 3000"));
