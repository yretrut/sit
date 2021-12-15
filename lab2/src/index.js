var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var array = [];

app.use(bodyParser.text());
app.get("/", (req, res) => res.send("Жду запрос =)"));
app.get("/list", function (req, res) {
  res.send(array.toString());
});
app.post("/create", function (req, res) {
  array.push(req.body);
  console.log(req.body);
  res.send("Good");
});
app.listen();
