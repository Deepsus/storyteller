const express = require("express");
const multer = require("multer");
const path = require("path");
const {
    createStory,
    deleteStory,
    getStories,
    getStoryById,
    updateStory,
} = require("../controllers/story.controller.js");

// Configure disk storage with dynamic destination based on fieldname
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.fieldname === "cover") {
            cb(null, path.join(__dirname, "../uploads/covers"));
        } else if (file.fieldname === "file") {
            cb(null, path.join(__dirname, "../uploads/contents"));
        } else {
            cb(new Error("Unexpected field"));
        }
    },
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${file.originalname}`;
        cb(null, uniqueName);
    },
});

const upload = multer({ storage });

const router = express.Router();

router.post(
    "/",
    upload.fields([
        { name: "cover", maxCount: 1 },
        { name: "file", maxCount: 1 },
    ]),
    createStory,
);

router.get("/", getStories);
router.get("/:id", getStoryById);
router.put("/:id", updateStory);
router.delete("/:id", deleteStory);

module.exports = router;
