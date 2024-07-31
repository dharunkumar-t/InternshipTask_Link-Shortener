// backend/routes/urlRoutes.js

const express = require("express");
const shortid = require("shortid");
const Url = require("../models/Url");

const router = express.Router();

router.post("/", async (req, res) => {
  const { longUrl } = req.body;
  const shortUrl = shortid.generate();

  try {
    const newUrl = new Url({ longUrl, shortUrl });
    await newUrl.save();
    res.json(newUrl);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const urls = await Url.find();
    res.json(urls);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:shortUrl", async (req, res) => {
  try {
    const url = await Url.findOne({ shortUrl: req.params.shortUrl });
    if (!url) return res.status(404).json({ message: "URL not found" });
    res.redirect(url.longUrl);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
