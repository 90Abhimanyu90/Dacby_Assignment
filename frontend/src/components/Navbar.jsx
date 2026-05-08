import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between">

      <Link
        to="/"
        className="text-2xl font-bold text-blue-600"
      >
    Dacby NewsHub
      </Link>

      <div className="flex gap-6 text-lg">

        <Link to="/">
          Home
        </Link>

        <Link to="/bookmarks">
          Bookmarks
        </Link>

        <Link to="/login">
          Login
        </Link>

        <Link to="/register">
          Register
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;