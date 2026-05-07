const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const scrapeStories = require("./scraper/scraper");
const storyRoutes = require("./routes/storyRoutes");
const scrapeRoutes = require("./routes/scrapeRoutes");

dotenv.config();

const app = express();

app.use("/api/stories", storyRoutes);
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/stories", storyRoutes);
app.use("/api/scrape", scrapeRoutes);

app.get("/", (req, res) => {
  res.send("API Running...");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {

    console.log("MongoDB Connected");

    await scrapeStories();

    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });

  })
  .catch((err) => {
    console.log(err);
  });