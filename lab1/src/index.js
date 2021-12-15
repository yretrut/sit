var http = require("http");
var url = require("url");
var days = [
  "воскресенье",
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота"
];

var server = http.createServer((req, res) => {
  var date = new Date().getDay();
  var day = days.find((item, index, array) => index === date);
  var name = url.parse(req.url, true).query;
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(`Привет ${name.name}, сегодня ${day}.`);
});

server.listen(() => {
  console.log("Ok");
});
