import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";
import SearchBar from "./SearchBar.jsx";

export default function Header() {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="bg-gray-900 text-white h-16 flex items-center px-6 shadow-md">
      {/* Logo and Left Nav */}
      <div className="flex items-center gap-6 flex-1">
        <h1 className="text-xl font-bold text-blue-400 tracking-wide">
          <Link to="/">StoryTeller</Link>
        </h1>
        <nav className="hidden sm:flex gap-4 text-sm text-gray-300 hover:text-white">
          <Link to="/browse" className="hover:text-white transition">
            Browse
          </Link>
        </nav>
      </div>

      {/* Right Nav */}
      <div className="flex items-center gap-4 text-sm text-gray-300">
        <SearchBar />
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="bg-blue-500 rounded-md text-white px-4 py-1 hover:bg-blue-600 transition"
          >
            Logout
          </button>
        ) : (
          <div className="flex items-center bg-blue-500 rounded-md text-white text-sm select-none">
            <Link to="/login" className="px-2 py-1 hover:bg-blue-600 transition">
              Sign In
            </Link>
            <span className="px-1 select-none">/</span>
            <Link to="/register" className="px-2 py-1 hover:bg-blue-600 transition">
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
