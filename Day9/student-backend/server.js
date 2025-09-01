const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let students = [
  { id: 1, name: "Shivani", marks: 78 },
  { id: 2, name: "Alisha", marks: 92 },
  { id: 3, name: "Sweety", marks: 65 }
];

// ✅ Get all students
app.get("/students", (req, res) => {
  res.json(students);
});

// ✅ Add student
app.post("/students", (req, res) => {
  const { name, marks } = req.body;
  const newStudent = { id: Date.now(), name, marks };
  students.push(newStudent);
  res.json(newStudent);
});

// ✅ Delete student
app.delete("/students/:id", (req, res) => {
  const { id } = req.params;
  students = students.filter(s => s.id != id);
  res.json({ success: true });
});

app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));
