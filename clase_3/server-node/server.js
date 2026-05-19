// http
const http = require("http");

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

  res.end('404 - Page not found')
});

server.listen(3000, () => console.log("Server corriendo en el puerto 3000"));
