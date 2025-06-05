import { useEffect, useState } from "react";
import FeaturedBook from "./FeaturedBook.jsx";
import { Link } from "react-router-dom";

// Utility: get N random unique items from array
function getRandomSubset(array, count) {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

const backend = import.meta.env.VITE_BACKEND_URL;

export default function Featured() {
    // const [allBooks, setAllBooks] = useState([]);
    const [featuredBooks, setFeaturedBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const res = await fetch("http://localhost:5000/api/stories");
                if (!res.ok) throw new Error("Failed to fetch stories");
                const data = await res.json();
                // setAllBooks(data);

                const randomBooks = getRandomSubset(data, 3);
                setFeaturedBooks(randomBooks);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    return (
        <div className="py-12 px-4 text-center">
            <h3 className="font-bold text-3xl mb-8 text-gray-800">
                Featured Books
            </h3>

            {loading
                ? <p className="text-gray-500">Loading...</p>
                : error
                ? <p className="text-red-500">Error: {error}</p>
                : (
                    <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
                        {featuredBooks.map((book) => (
                            <Link to={`/story/${book._id}`} key={book._id}>
                                <FeaturedBook
                                    title={book.title}
                                    imgUrl={`${backend}/covers/${book.cover}`}
                                    category={book.genre}
                                />
                            </Link>
                        ))}
                    </section>
                )}
        </div>
    );
}
