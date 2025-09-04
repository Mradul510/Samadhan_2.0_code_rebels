import { useState, useEffect } from "react";
import axios from "axios";
import StudentCard from "./components/StudentCard";
import "./App.css";
import "./components/StudentCard.css";

export default function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const res = await axios.get("http://localhost:5000/students");
    setStudents(res.data);
  };

  const addStudent = async (e) => {
    e.preventDefault();
    if (!name || !age) return;
    await axios.post("http://localhost:5000/students", { name, age });
    setName("");
    setAge("");
    fetchStudents();
  };

  const deleteStudent = async (id) => {
    await axios.delete(`http://localhost:5000/students/${id}`);
    fetchStudents();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">🎓 Student CRUD App</h1>

      {/* Add Student Form */}
      <form onSubmit={addStudent} className="mb-6 flex gap-2">
        <input
          type="text"
          placeholder="Name"
          className="border px-2 py-1 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          className="border px-2 py-1 rounded"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 py-1 rounded">Add</button>
      </form>

      {/* Student List */}
      <div className="space-y-3">
        {students.map((student) => (
          <StudentCard key={student.id} student={student} onDelete={deleteStudent} />
        ))}
      </div>
    </div>
  );
}
