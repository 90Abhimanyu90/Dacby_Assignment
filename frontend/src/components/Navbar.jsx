import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between">
      <Link to="/" className="text-2xl font-bold text-blue-600">
        Dacby NewsHub
      </Link>

      <div className="flex gap-6 text-lg">
        <Link to="/">Home</Link>

        <Link to="/bookmarks">Bookmarks</Link>

        {user ? (
          <button onClick={logout} className="text-red-500">
            Logout
          </button>
        ) : (
          <>
            <Link to="/login">Login</Link>

            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
