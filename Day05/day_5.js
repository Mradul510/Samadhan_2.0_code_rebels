const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

let students = [
  { id: 1, name: "Naman", course: "Node.js" },
  { id: 2, name: "Priya", course: "React" },
  { id: 3, name: "Rahul", course: "Express" }
];


app.get('/', (req, res) => {
  res.json({
    success: true,
    count: students.length,
    data: students
  });
});


app.get('/student/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(s => s.id === id);
  
  if (student) {
    res.json({ success: true, data: student });
  } else {
    res.status(404).json({ success: false, message: "Student not found" });
  }
});


app.post('/', (req, res) => {
  const newStudent = {
    id: students.length + 1,
    name: req.body.name,
    course: req.body.course
  };
  students.push(newStudent);
  res.status(201).json({ success: true, data: newStudent });
});


app.delete('/student/:id', (req, res) => {
  const id = parseInt(req.params.id);
  students = students.filter(s => s.id !== id);
  res.json({ success: true, message: `Student with id ${id} deleted` });
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
