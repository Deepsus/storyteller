const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema(
    {
        filename: {
            type: String,
            required: true,
        },
    },
    { timestamps: true },
);

module.exports = mongoose.model("Content", contentSchema);
