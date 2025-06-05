import { useEffect, useState } from "react";
import FeaturedBook from "../components/FeaturedBook.jsx";
import { Link, useSearchParams } from "react-router-dom";

export default function BrowsePage() {
    const [searchParams] = useSearchParams();
    const [stories, setStories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const genre = searchParams.get("genre");
    const searchQuery = searchParams.get("search");

    const backend = import.meta.env.VITE_BACKEND_URL;

    useEffect(() => {
        const fetchStories = async () => {
            try {
                setLoading(true);
                const res = await fetch(`${backend}/api/stories`);
                if (!res.ok) throw new Error("Failed to fetch stories");
                const data = await res.json();
                setStories(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchStories();
    }, []);

    let filteredStories = stories;

    if (genre) {
        filteredStories = filteredStories.filter(
            (story) => story.genre?.toLowerCase() === genre.toLowerCase(),
        );
    }

    if (searchQuery) {
        filteredStories = filteredStories.filter(
            (story) =>
                story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                story.description.toLowerCase().includes(
                    searchQuery.toLowerCase(),
                ),
        );
    }

    if (loading) {
        return (
            <p className="text-center p-5 text-gray-500">Loading stories...</p>
        );
    }

    if (error) {
        return <p className="text-center p-5 text-red-500">Error: {error}</p>;
    }

    return (
        <section className="p-5">
            <div className="grid grid-cols-5 text-center mx-auto gap-5">
                {filteredStories.length > 0
                    ? (
                        filteredStories.map((story, index) => (
                            <Link to={`/story/${story._id}`} key={index}>
                                <FeaturedBook
                                    title={story.title}
                                    category={story.genre}
                                    imgUrl={`${backend}/covers/${story.cover}`}
                                />
                            </Link>
                        ))
                    )
                    : (
                        <p className="col-span-5 text-gray-500">
                            No stories found.
                        </p>
                    )}
            </div>
        </section>
    );
}
