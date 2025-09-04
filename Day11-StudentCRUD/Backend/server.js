const express = require("express");
const cors = require("cors");

// Initialize the Express app
const app = express();

// --- Middleware ---
// 1. Enable Cross-Origin Resource Sharing (CORS) for all routes
app.use(cors());

// 2. Use Express's built-in JSON parser for request bodies (replaces body-parser)
app.use(express.json());

// --- In-Memory "Database" ---
let students = [
  { id: 1, name: "Aman Gupta", age: 21 },
  { id: 2, name: "Riya Sharma", age: 22 },
];

// Counter for generating new unique IDs. Start it higher than any existing ID.
let nextId = 3;

// --- API Routes ---

// A simple root route to confirm the API is running
app.get("/", (req, res) => {
  res.status(200).json({ message: "Student CRUD API is running successfully!" });
});

// [READ] GET all students
app.get("/students", (req, res) => {
  res.status(200).json(students);
});

// [READ] GET a single student by ID
app.get("/students/:id", (req, res) => {
  const studentId = parseInt(req.params.id);
  const student = students.find((s) => s.id === studentId);

  if (student) {
    res.status(200).json(student);
  } else {
    res.status(404).json({ message: "Student not found" });
  }
});

// [CREATE] POST a new student
app.post("/students", (req, res) => {
  const { name, age } = req.body;

  // --- Input Validation ---
  if (!name || !age) {
    return res.status(400).json({ message: "Error: 'name' and 'age' are required fields." });
  }
  if (typeof age !== 'number' || age <= 0) {
    return res.status(400).json({ message: "Error: 'age' must be a positive number." });
  }

  // Create new student object with a new unique ID
  const newStudent = {
    id: nextId,
    name: name,
    age: age,
  };

  // Increment the ID counter for the next student
  nextId++;

  students.push(newStudent);
  res.status(201).json(newStudent); // 201 Created is the correct status code
});

// [UPDATE] PUT a student's information by ID
app.put("/students/:id", (req, res) => {
  const studentId = parseInt(req.params.id);
  const studentIndex = students.findIndex((s) => s.id === studentId);

  if (studentIndex === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  const { name, age } = req.body;

  // --- Input Validation ---
  if (!name && !age) {
    return res.status(400).json({ message: "Error: At least 'name' or 'age' must be provided to update." });
  }

  // Update fields if they are provided in the request body
  if (name) {
    students[studentIndex].name = name;
  }
  if (age) {
    if (typeof age !== 'number' || age <= 0) {
        return res.status(400).json({ message: "Error: 'age' must be a positive number." });
    }
    students[studentIndex].age = age;
  }

  res.status(200).json(students[studentIndex]);
});

// [DELETE] DELETE a student by ID
app.delete("/students/:id", (req, res) => {
  const studentId = parseInt(req.params.id);
  const initialLength = students.length;

  // Create a new array without the student to be deleted
  students = students.filter((s) => s.id !== studentId)

  // Check if a student was actually deleted
  if (students.length === initialLength) {
    return res.status(404).json({ message: "Student not found" });
  }

  
  res.status(204).send();
});

// --- Start the Server ---
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Backend server is running and listening on http://localhost:${PORT}`);
});