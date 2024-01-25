import { Link } from "react-router-dom";

const NavLink = () => {
  return (
    <Link
      to="/"
      className="text-lg font-bold text-blue-500 hover:text-blue-600"
    >
      Notely
    </Link>
  );
};

export default NavLink;
