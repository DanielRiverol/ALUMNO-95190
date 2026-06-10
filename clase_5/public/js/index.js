const socket = io();
let user;
const userName = document.querySelector("#userName"),
  messages = document.querySelector("#messages"),
  messageInput = document.querySelector("#messageInput"),
  sendMessageButton = document.querySelector("#sendMessageButton");

//   sweetalert
Swal.fire({
  title: "Ingresa tu nombre",
  input: "text",
}).then((result) => {
  user = result.value;
  userName.innerHTML = user;
});

// listener
sendMessageButton.addEventListener("click", () => {
  if (messageInput.value.trim().length > 0) {
    socket.emit("message", { user, message: messageInput.value });
    messageInput.value = "";
  }
});

socket.on("message-logs", (data) => {
  let listMessages = "";
  const p = document.createElement("p");
  data.forEach((msg) => {
    listMessages = `<strong>${msg.user} dice:</strong> ${msg.message}`;
    p.innerHTML = listMessages;
  });
  messages.appendChild(p);
});
