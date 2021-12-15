const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use("/api", require("./students"));
app.get("/", (req, res) => res.send("Сервер подключен"));
app.all("*", (req, res) =>res.send("Такой ссылки нет"));

app.listen(port, () => { console.log(`http://localhost:${port}`); });