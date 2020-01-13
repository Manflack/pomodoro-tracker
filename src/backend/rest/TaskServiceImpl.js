const express = require("express");
const app = express();

app.listen(5000);

app.get("/listTaskTodo", (req, res) => {
  res.end("this is a execution");
});

app.post("/newTask", (req, res) => {
  res.end("this is a execution");
});
