import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="min-h-screen bg-gray-200 p-4 w-1/4">
      <ul>
        <li>
          <Link
            to="/dashboard/profile"
            className="text-blue-500 hover:underline"
          >
            Profile
          </Link>
        </li>
        <li>
          <Link to="/dashboard/notes" className="text-blue-500 hover:underline">
            Notes
          </Link>
        </li>
        <li>
          <Link to="/" className="text-red-500 hover:underline">
            Sign Out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
