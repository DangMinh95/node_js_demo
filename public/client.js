// connect to serve
var socket = io.connect('http://localhost:8080');
// submit text chatting to serve
$("form").submit(function () {
    var message = $("#message").val();
    socket.emit("messages", message);
    this.reset();
    return false;
});
// receive text from serve
socket.on("chat", function (data) {
    $("#thread").append("<li>" + data + "</li>");
});

let count = 0;
setInterval(() => {
  socket.emit("ping", ++count);
}, 1000);