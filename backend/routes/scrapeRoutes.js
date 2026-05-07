const express = require("express");

const scrapeStories = require("../scraper/scraper");

const router = express.Router();

router.post("/", async (req, res) => {

  await scrapeStories();

  res.json({
    message: "Scraping completed",
  });
});

module.exports = router;