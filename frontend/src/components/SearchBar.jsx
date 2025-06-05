import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

export default function SearchBar() {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const searchStory = (e) => {
        e.preventDefault();
        navigate(`/browse?search=${encodeURIComponent(search.trim())}`);
    };

    return (
        <form
            onSubmit={searchStory}
            className="flex justify-center items-center "
        >
            <input
                type="text"
                placeholder="Search stories..."
                className="w-full max-w-md px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-l-xl shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <button
                type="submit"
                className="bg-blue-600 text-white px-5 py-2 rounded-r-xl hover:bg-blue-700 transition"
            >
                Search
            </button>
        </form>
    );
}
