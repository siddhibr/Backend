const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome siddhi.");
});
app.get("/hi", (req, res) => {
  res.send("Hello.");
});

app.get("/bye", (req, res) => {
    res.send("bye.");
  });

app.listen(3000, () => {
  console.log("Server listenging on port 3000.");
});