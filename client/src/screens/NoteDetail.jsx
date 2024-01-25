import React from "react";
import Sidebar from "../components/Sidebar";
import NoteDetailComponent from "../components/NoteDetailComponent";

const Notes = () => {
  return (
    <div className="flex">
      <Sidebar />
      <NoteDetailComponent />
    </div>
  );
};

export default Notes;
