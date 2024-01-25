import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Registration from "./screens/Registration";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Notes from "./screens/Notes";
import NoteDetail from "./screens/NoteDetail";

const App = () => {
  return (
    <Routes>
      <Route path="/signup" element={<Registration />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/dashboard/notes" element={<Notes />} />
      <Route path="/dashboard/notes" element={<Notes />} />
      <Route path="/dashboard/profile" element={<Profile />} />
      <Route path="/dashboard/notes/:id" element={<NoteDetail />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
