const mongoose = require("mongoose");

const storySchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
        },
        genre: {
            type: String,
            enum: [
                "Fantasy",
                "Romance",
                "Sci-Fi",
                "Mystery",
                "Urban",
                "Eastern",
            ],
            required: true,
        },
        // author: {
        //     type: String,
        //     required: true,
        // },
        cover: {
            type: String,
            required: true,
        },
        contentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Content",
            required: true,
        },
    },
    { timestamps: true },
);

module.exports = mongoose.model("Story", storySchema);
