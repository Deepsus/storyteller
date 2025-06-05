import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Header() {
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
                <button
                    type="button"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded-md transition"
                >
                    Sign In
                </button>
            </div>
        </header>
    );
}
