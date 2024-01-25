import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Profile from "./Profile";
import Notes from "./Notes";

const user = {
  firstName: "John",
  lastName: "Doe",
  username: "johndoe",
  email: "john.doe@example.com",
};

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Main Content */}
      <div className="flex-1">
        <Routes>
          <Route path="/dashboard/profile" element={<Profile user={user} />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
