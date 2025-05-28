function Hero() {
    return (
        <main className="px-8 h-screen flex items-center justify-center">
            <div className="flex-1 space-y-6">
                <h1 className="text-6xl text-blue-600">
                    <strong>StoryTeller</strong>
                </h1>
                <p>
                    Story Teller is an interactive website for you to upload
                    your own creations for the whole world to see. Imagine a
                    digital campfire where voices from every corner of the globe
                    gather to share tales of wonder, wisdom, and whim. Whether
                    you're a seasoned novelist, a budding poet, a visual artist,
                    a musician, or simply someone with a compelling idea to
                    share, Story Teller provides the platform.
                </p>

                <button
                    type="button"
                    className="border p-6 rounded-lg bg-lime-400"
                >
                    Explore Now
                </button>
            </div>
            <div className="flex-1"></div>
        </main>
    );
}
export default Hero;
