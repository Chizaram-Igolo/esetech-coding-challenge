import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({ title: "", content: "" });

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await axios.get("http://localhost:8000/notes");
      setNotes(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  const handleAddNote = async () => {
    try {
      const response = await axios.post("http://localhost:8000/notes", newNote);
      setNotes((prevNotes) => [...prevNotes, response.data]);
      setNewNote({ title: "", content: "" });
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  const handleDeleteNote = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/notes/${id}`);
      setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-8">Notes</h2>

      {/* Form to add a new note */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Title"
          value={newNote.title}
          onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
          className="border mb-2 p-2 mr-2 w-full"
        />
        <textarea
          placeholder="Content"
          value={newNote.content}
          onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
          className="border mb-2 p-2 mr-2 w-full"
        />
        <button
          onClick={handleAddNote}
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        >
          Add Note
        </button>
      </div>

      {/* List of notes */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {notes.map((note, id) => (
          <li key={note.title + id} className="border p-4 rounded">
            <div className="mb-4">
              <Link to={`/dashboard/notes/${note.id}`}>
                <strong className="text-xl block mb-2">{note.title}</strong>
              </Link>
              <p>{note.content}</p>
            </div>
            <button
              onClick={() => handleDeleteNote(note.id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
