// backend/server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const urlRoutes = require("./routes/urlRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/urls", urlRoutes);

mongoose
  .connect("mongodb://localhost/linkshortener", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
