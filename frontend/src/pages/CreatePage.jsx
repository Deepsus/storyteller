import { useState } from "react";
import FileUpload from "../components/FileUpload";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LabeledInput from "../components/LabeledInput";
import SelectList from "../components/SelectList";

export default function CreatePage() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [genre, setGenre] = useState("");
    const [cover, setCover] = useState(null); // image file
    const [storyFile, setStoryFile] = useState(null); // .txt file
    const backend = import.meta.env.VITE_BACKEND_URL;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("genre", genre);
        formData.append("cover", cover); // image
        formData.append("file", storyFile); // text file

        try {
            const res = await fetch(`${backend}/api/stories`, {
                method: "POST",
                body: formData, // Don't set Content-Type manually!
            });

            const data = await res.json();
            console.log("Story uploaded successfully", data);
        } catch (err) {
            console.error("Error submitting story:", err);
        }
    };

    return (
        <>
            <Header />

            {/* Main Create Section goes here */}

            <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-md mt-10">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    Craft Your Next Epic Tale
                </h1>
                <form onSubmit={handleSubmit}>
                    <LabeledInput
                        label={"Enter Story Title"}
                        placeholder={"eg. Echoes Beyond the Stars"}
                        inputValue={title}
                        setInputValue={setTitle}
                    />

                    <LabeledInput
                        label={"Enter Story Description"}
                        placeholder={"eg. In a distant future where humanity’s survival hangs by a thread, a lone explorer uncovers secrets that could rewrite the fate of the universe."}
                        inputValue={description}
                        setInputValue={setDescription}
                    />

                    {/* Genre */}
                    <SelectList
                        label={"Enter Story Genre"}
                        inputValue={genre}
                        setInputValue={setGenre}
                    />

                    {/* Cover image */}
                    <FileUpload
                        label={"Upload Cover art"}
                        fileAccept={"image/*"}
                        setInputValue={setCover}
                    />

                    {/* Story Upload */}
                    <FileUpload
                        label={"Upload Story"}
                        fileAccept=".md"
                        setInputValue={setStoryFile}
                    />

                    {/* Submit Button (optional) */}
                    <button
                        type="submit"
                        className="mt-6 w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition"
                    >
                        Submit Story
                    </button>
                </form>
            </div>

            <Footer />
        </>
    );
}
