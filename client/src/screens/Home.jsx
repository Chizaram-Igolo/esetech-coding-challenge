import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-semibold mb-4">Welcome to Notley</h1>
        <p className="text-gray-600 mb-8">Your note-taking app.</p>
        <div className="space-x-4">
          <Link to="/signup">
            <button className="inline-block w-36 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
              Sign Up
            </button>
          </Link>
          <Link to="/signin">
            <button className="inline-block w-36 bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600">
              Sign In
            </button>
          </Link>
        </div>
      </div>

      {/* Responsive buttons at the top right */}
      <div className="absolute top-4 right-4 space-x-2">
        <Link to="/signup">
          <button className="text-blue-500 hover:underline">Sign Up</button>
        </Link>
        <Link to="/signin">
          <button className="text-gray-500 hover:underline">Sign In</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
