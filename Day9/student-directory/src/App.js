import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [marks, setMarks] = useState("");

  // ✅ Fetch students from backend
  useEffect(() => {
    fetch("http://localhost:5000/students")
      .then(res => res.json())
      .then(data => setStudents(data));
  }, []);

  // ✅ Add student
  const addStudent = async () => {
    if (!name || !marks) return alert("Enter name & marks!");
    const res = await fetch("http://localhost:5000/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, marks })
    });
    const newStudent = await res.json();
    setStudents([...students, newStudent]);
    setName("");
    setMarks("");
  };

  // ✅ Delete student
  const deleteStudent = async (id) => {
    await fetch(`http://localhost:5000/students/${id}`, { method: "DELETE" });
    setStudents(students.filter(s => s.id !== id));
  };

  return (
    <div className="app-container">
      <h1 className="main-title">🎓 Student Marks Portal</h1>

      {/* Add Form */}
      <div className="form-container">
        <input 
          type="text" 
          placeholder="Enter name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input 
          type="number" 
          placeholder="Enter marks"
          value={marks}
          onChange={e => setMarks(e.target.value)}
        />
        <button onClick={addStudent}>Add Student</button>
      </div>

      {/* Students List */}
      <div className="student-list">
        {students.map((s) => (
          <div key={s.id} className="student-card">
            <p><b>{s.name}</b> - {s.marks} marks</p>
            <button onClick={() => deleteStudent(s.id)}>❌ Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
