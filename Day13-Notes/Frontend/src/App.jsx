import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const res = await axios.get("http://localhost:5000/notes");
    setNotes(res.data);
  };

  const addNote = async () => {
    if (!title || !content) return;
    const res = await axios.post("http://localhost:5000/notes", { title, content });
    setNotes([...notes, res.data]);
    setTitle("");
    setContent("");
  };

  const deleteNote = async (id) => {
    await axios.delete(`http://localhost:5000/notes/${id}`);
    setNotes(notes.filter(n => n._id !== id));
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">📝 Notes App</h1>

      <div className="space-y-3 mb-6">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 rounded text-black"
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 rounded text-black"
        />
        <button
          onClick={addNote}
          className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded"
        >
          Add Note
        </button>
      </div>

      <ul className="space-y-4">
        {notes.map((note) => (
          <li key={note._id} className="bg-gray-800 p-4 rounded shadow flex justify-between">
            <div>
              <h2 className="font-semibold">{note.title}</h2>
              <p>{note.content}</p>
            </div>
            <button
              onClick={() => deleteNote(note._id)}
              className="text-red-400 hover:text-red-600"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
