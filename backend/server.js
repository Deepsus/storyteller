// Imports
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const storyRoutes = require("./routes/story.route.js");
const contentRoutes = require("./routes/content.route.js");
const userRoutes = require("./routes/user.route.js");
const bookRoutes = require("./routes/book.route.js");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Serve static files (like uploaded cover images)
app.use("/covers", express.static("uploads/covers"));

// API routes
app.use("/api/stories", storyRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/content", contentRoutes);
app.use("/api/auth", userRoutes);
// DB connection and server start
mongoose.connect(process.env.MONGO_URI).then(() =>
    app.listen(
        process.env.PORT || 5000,
        () => console.log("Server running on port 5000"),
    )
).catch((err) => console.error(err));
