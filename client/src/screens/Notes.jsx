import React from "react";
import Sidebar from "../components/Sidebar";
import NotesComponent from "../components/NotesComponent";

const Notes = () => {
  return (
    <div className="flex">
      <Sidebar />
      <NotesComponent />
    </div>
  );
};

export default Notes;
