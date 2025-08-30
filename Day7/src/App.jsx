import { useState, useEffect } from "react";
import "./index.css"; 

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  
  useEffect(() => {
    const savedCount = localStorage.getItem("count");
    const savedText = localStorage.getItem("text");

    if (savedCount) setCount(parseInt(savedCount, 10));
    if (savedText) setText(savedText);
  }, []);

  
  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

 
  useEffect(() => {
    localStorage.setItem("text", text);
  }, [text]);

  return (
    <div className="app-container">
      <h1 className="main-title">Day 7: State Management</h1>

      {/* Counter Section */}
      <div className="card">
        <h2 className="card-title">Counter</h2>
        <p className="counter-value">{count}</p>
        <div className="button-group">
          <button onClick={() => setCount(count - 1)} className="btn btn-red">-</button>
          <button onClick={() => setCount(count + 1)} className="btn btn-green">+</button>
          <button onClick={() => setCount(0)} className="btn btn-gray">Reset</button>
        </div>
      </div>

      {/* Live Text Preview Section */}
      <div className="card">
        <h2 className="card-title">Live Text Preview</h2>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
          className="input-box"
        />
        <p className="preview">
          <span className="highlight">Preview:</span> {text || "Nothing typed yet..."}
        </p>
      </div>
    </div>
  );
}
