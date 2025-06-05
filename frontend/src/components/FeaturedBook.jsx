export default function FeaturedBook({ imgUrl, title, category }) {
    return (
        <div className="w-60 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
            {/* Image */}
            <div className="w-full h-80 bg-gray-100">
                <img
                    src={imgUrl}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-1">
                    {title}
                </h2>
                <p className="text-sm text-blue-500">{category}</p>
            </div>
        </div>
    );
}
