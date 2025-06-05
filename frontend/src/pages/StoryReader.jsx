import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

export default function StoryReader() {
    const { id } = useParams();
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(true);

    const backend = import.meta.env.VITE_BACKEND_URL;
    useEffect(() => {
        const fetchContent = async () => {
            try {
                const res = await fetch(
                    `${backend}/api/content/${id}`,
                );
                const data = await res.text(); // content is raw markdown or plain text
                setContent(data);
            } catch (err) {
                console.error("Error loading content:", err);
                setContent("Failed to load story content.");
            } finally {
                setLoading(false);
            }
        };

        fetchContent();
    }, [id]);

    if (loading) {
        return <div className="p-8 text-center text-gray-500">Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-6 sm:px-10">
            <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md prose prose-indigo prose-lg">
                <ReactMarkdown
                    components={{
                        pre: ({ node, ...props }) => (
                            <pre
                                {...props}
                                className="overflow-auto max-w-full rounded-md bg-gray-100 p-4"
                            />
                        ),
                    }}
                >
                    {content}
                </ReactMarkdown>
            </div>
        </div>
    );
}
