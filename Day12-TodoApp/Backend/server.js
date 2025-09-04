const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Temporary DB
let todos = [
  { id: 1, task: "Learn React", done: false },
  { id: 2, task: "Build To-Do App", done: false },
];

// Routes
app.get("/todos", (req, res) => res.json(todos));

app.post("/todos", (req, res) => {
  const newTodo = { id: todos.length + 1, task: req.body.task, done: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.delete("/todos/:id", (req, res) => {
  todos = todos.filter((t) => t.id !== parseInt(req.params.id));
  res.json({ message: "Deleted" });
});

app.listen(5000, () => console.log("🚀 Backend running at http://localhost:5000"));
