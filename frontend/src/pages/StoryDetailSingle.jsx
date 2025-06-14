import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function StoryDetailSingle() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [storyDetail, setStoryDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const backend = import.meta.env.VITE_BACKEND_URL;

    useEffect(() => {
        const fetchStory = async () => {
            try {
                const res = await fetch(`${backend}/api/stories/${id}`);
                const data = await res.json();
                setStoryDetail(data);
            } catch (err) {
                console.error("Error fetching story:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchStory();
    }, [id]);

    const handleDelete = async () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this story?");
        if (!confirmDelete) return;

        try {
            const res = await fetch(`${backend}/api/stories/${id}`, {
                method: "DELETE",
            });
            const data = await res.json();

            if (res.ok) {
                alert(data.message || "Story deleted successfully.");
                navigate("/browse"); // Redirect to homepage
            } else {
                alert(data.message || "Failed to delete story.");
            }
        } catch (err) {
            console.error("Error deleting story:", err);
            alert("Error deleting story.");
        }
    };

    if (loading) return <div className="p-8 text-center text-gray-500">Loading...</div>;
    if (!storyDetail) return <div className="p-8 text-center text-red-500">Story not found.</div>;

    const { title, description, cover, genre, contentId } = storyDetail;

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto space-y-10">
                <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row gap-8">
                    <img
                        src={`${backend}/covers/${cover}`}
                        alt="Cover"
                        className="w-full md:w-64 h-auto object-cover rounded-xl border"
                    />

                    <div className="flex flex-col justify-between flex-1 space-y-6">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900 mb-2">
                                {title}
                            </h1>
                            <span className="inline-block bg-indigo-100 text-indigo-800 text-sm font-semibold px-4 py-1 rounded-full">
                                {genre}
                            </span>
                        </div>
                        <div className="flex gap-4">
                            <Link
                                to={`/read/${contentId._id}`}
                                className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-6 py-2 rounded-md shadow transition duration-200"
                            >
                                Read Story
                            </Link>
                            <button
                                onClick={handleDelete}
                                className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-6 py-2 rounded-md shadow transition duration-200"
                            >
                                Delete Story
                            </button>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">About</h2>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}
