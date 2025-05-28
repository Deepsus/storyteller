const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const bookRoutes = require("./routes/book.route.js");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/books", bookRoutes);

// DB Connection
mongoose.connect(process.env.MONGO_URI).then(() =>
    app.listen(
        process.env.PORT || 5000,
        () => console.log("Server running on port 5000"),
    )
).catch((err) => console.error(err));
