import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const NoteDetailComponent = () => {
  const { id } = useParams();
  const [note, setNote] = useState(null);

  useEffect(() => {
    const fetchNoteDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/notes/${id}`);
        setNote(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching note details:", error);
      }
    };

    fetchNoteDetail();
  }, [id]);

  return (
    <div className="container mx-auto p-8">
      {note ? (
        <div>
          <h2 className="text-3xl font-bold mb-4">{note.title}</h2>
          <p>{note.content}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default NoteDetailComponent;
