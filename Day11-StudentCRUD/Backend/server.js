const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Temporary DB
let students = [
  { id: 1, name: "Aman", age: 21 },
  { id: 2, name: "Riya", age: 22 }
];

// CRUD Routes
app.get("/students", (req, res) => res.json(students));

app.get("/students/:id", (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  student ? res.json(student) : res.status(404).json({ message: "Not found" });
});

app.post("/students", (req, res) => {
  const newStudent = { id: students.length + 1, ...req.body };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

app.put("/students/:id", (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).json({ message: "Not found" });

  student.name = req.body.name || student.name;
  student.age = req.body.age || student.age;
  res.json(student);
});

app.delete("/students/:id", (req, res) => {
  students = students.filter(s => s.id !== parseInt(req.params.id));
  res.json({ message: "Deleted" });
});

app.listen(5000, () => console.log("🚀 Backend running at http://localhost:5000"));
