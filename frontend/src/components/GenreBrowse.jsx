import { Link } from "react-router-dom";

const genres = [
    "Fantasy",
    "Romance",
    "Sci-Fi",
    "Mystery",
    "Thriller",
    "Drama",
    "Adventure",
    "Urban",
    "Eastern",
    "Horror",
];

export default function GenreBrowse() {
    return (
        <section className="py-12 px-4 max-w-screen-xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800">
                Explore by Genre
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4  gap-4">
                {genres.map((genre) => (
                    <Link
                        to={`/browse?genre=${encodeURI(genre.trim())}`}
                        key={genre}
                        className="bg-blue-50 text-blue-600 border border-blue-200 rounded-full px-4 py-2 text-sm font-medium hover:bg-blue-100 transition"
                    >
                        {genre}
                    </Link>
                ))}
            </div>
        </section>
    );
}
