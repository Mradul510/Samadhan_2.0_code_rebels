import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]); // store tasks
  const [input, setInput] = useState(""); // store input

  // handle input change
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // add new task
  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, input]); // add new task
      setInput(""); // clear input
    }
  };

  // delete a task
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>📝 Day 8: To-Do List</h1>

      {/* input box + button */}
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Enter a task"
        style={{
          padding: "8px",
          width: "250px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />
      <button
        onClick={addTask}
        style={{
          marginLeft: "10px",
          padding: "8px 12px",
          borderRadius: "8px",
          border: "none",
          background: "linear-gradient(45deg, #6a11cb, #2575fc)",
          color: "white",
          cursor: "pointer",
        }}
      >
        ➕ Add
      </button>

      {/* list rendering */}
      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              margin: "10px auto",
              padding: "10px",
              width: "300px",
              borderRadius: "10px",
              backgroundColor: "#f8f9fa",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            {task}
            <button
              onClick={() => deleteTask(index)}
              style={{
                background: "#ff4b5c",
                color: "white",
                border: "none",
                borderRadius: "6px",
                padding: "5px 10px",
                cursor: "pointer",
              }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
