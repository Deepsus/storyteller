function FeaturedBook({ imgUrl, title, category }) {
    return (
        <div>
            {/* Image */}
            <div className="">
                <img
                    src={imgUrl}
                    alt=""
                    className="max-h-48"
                />
            </div>
            {/* Title */}
            <p>{title}</p>

            {/* Category */}
            <p>{category}</p>
        </div>
    );
}
export default FeaturedBook;
