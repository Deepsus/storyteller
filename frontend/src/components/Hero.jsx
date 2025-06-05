import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className="bg-gray-950 text-white min-h-screen flex items-center justify-center px-6 py-16">
            <div className="max-w-3xl text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-blue-400 mb-6">
                    Unleash Your Imagination. Share Your World.
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-10">
                    <span className="text-blue-300 font-medium">
                        StoryTeller
                    </span>{" "}
                    is the home for storytellers, dreamers, and creators. Craft
                    immersive tales, inspire readers, and join a community where
                    your words matter.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to={"/user/create"}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg transition duration-300"
                    >
                        Start Writing
                    </Link>
                    <Link
                        to="/browse"
                        className="bg-transparent border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-6 py-3 rounded-2xl font-semibold transition duration-300"
                    >
                        Explore Stories
                    </Link>
                </div>
            </div>
        </section>
    );
}
export default Hero;
