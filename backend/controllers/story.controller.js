const Story = require("../models/story.model.js");
const Content = require("../models/content.model.js");

// @desc    Get all stories
exports.getStories = async (req, res) => {
    try {
        const stories = await Story.find().sort({ createdAt: -1 });
        res.json(stories);
    } catch (err) {
        console.error("Error fetching stories:", err);
        res.status(500).json({ error: "Failed to fetch stories" });
    }
};

// @desc    Get a single story by ID
exports.getStoryById = async (req, res) => {
    try {
        const story = await Story.findById(req.params.id).populate("contentId");
        if (!story) {
            return res.status(404).json({ error: "Story not found" });
        }
        res.json(story);
    } catch (err) {
        console.error("Error fetching story:", err);
        res.status(500).json({ error: "Failed to fetch story" });
    }
};

exports.createStory = async (req, res) => {
    try {
        const { title, description, genre, author } = req.body;

        const cover = req.files?.cover?.[0]?.filename;
        const filename = req.files?.file?.[0]?.filename;

        const newContent = new Content({
            filename,
        });

        const savedContent = await newContent.save();

        const newStory = new Story({
            title,
            description,
            genre,
            author,
            cover,
            contentId: savedContent._id,
        });

        const savedStory = await newStory.save();

        res.status(201).json(savedStory);
    } catch (err) {
        res.status(400).json({ error: "Invalid story data" });
    }
};

// @desc    Update an existing story
exports.updateStory = async (req, res) => {
    try {
        const updatedStory = await Story.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true },
        );

        if (!updatedStory) {
            return res.status(404).json({ error: "Story not found" });
        }

        res.json(updatedStory);
    } catch (err) {
        console.error("Error updating story:", err);
        res.status(400).json({ error: "Failed to update story" });
    }
};

// @desc    Delete a story
exports.deleteStory = async (req, res) => {
    try {
        const deleted = await Story.findByIdAndDelete(req.params.id);
        if (!deleted) {
            return res.status(404).json({ error: "Story not found" });
        }
        res.json({ message: "Story deleted successfully" });
    } catch (err) {
        console.error("Error deleting story:", err);
        res.status(500).json({ error: "Failed to delete story" });
    }
};
