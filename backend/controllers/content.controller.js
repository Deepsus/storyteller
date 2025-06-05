const fs = require("fs");
const path = require("path");
const Content = require("../models/content.model");

exports.getContentById = async (req, res) => {
    try {
        const contentDoc = await Content.findById(req.params.id);
        if (!contentDoc) {
            return res.status(404).json({ error: "Content not found" });
        }

        const filePath = path.join(
            __dirname,
            "..",
            "uploads",
            "contents",
            contentDoc.filename,
        );

        fs.readFile(filePath, "utf-8", (err, data) => {
            if (err) {
                console.error("File read error:", err);
                return res.status(500).json({
                    error: "Error reading content file",
                });
            }

            res.send(data); // Send plain text / markdown content
        });
    } catch (err) {
        console.error("Error fetching content:", err);
        res.status(500).json({ error: "Internal server error" });
    }
};
