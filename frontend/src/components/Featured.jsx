import FeaturedBook from "./FeaturedBook.jsx";

const featuredBook = [
    {
        title: "Ultimate Cash System",
        url: "https://covers.openlibrary.org/b/id/10192572-L.jpg",
        category: "Urban",
    },
    {
        title: "Titan King: Ascension",
        url: "https://covers.openlibrary.org/b/id/8225631-L.jpg",
        category: "Fantasy",
    },

    {
        title: "Ultimate Cash System",
        url: "https://covers.openlibrary.org/b/id/8228691-L.jpg",
        category: "Eastern",
    },
    {
        title: "Reborn with A",
        url: "https://covers.openlibrary.org/b/id/8108694-L.jpg",
        category: "Urban",
    },
];

function Featured() {
    return (
        <div className="flex flex-col space-y-6 justify-center items-center">
            <h3 className="font-bold text-2xl">Featured Book</h3>

            <section className="flex justify-center gap-x-5">
                {featuredBook.map((featureBook) => (
                    <FeaturedBook
                        key={featureBook.title}
                        title={featureBook.title}
                        imgUrl={featureBook.url}
                        category={featureBook.category}
                    />
                ))}

                <FeaturedBook />
            </section>
        </div>
    );
}
export default Featured;
